tinymce.PluginManager.add('contentSanitiser', function( editor ) {
	editor.addButton( 'contentSanitiser', {
		title: 'Cleanup Tags',
		icon: "drop",
		onclick: function() {
			editor.setContent(editor.getContent().replace(/ data-[^"]*="[^"]*"/g, "").replace(/ aria-[^"]*="[^"]*"/g, "").replace(/<span>/g, "").replace(/<\/span>/g, "").replace(/<div>/g, "").replace(/<\/div>/g, ""));
		}
	});
	editor.on('BeforeSetContent', function(e) {
		if (e.paste) {
			e.content = e.content.replace(/ style="[^"]*"/g, "");
			e.content = e.content.replace(/ class="[^"]*"/g, "");
			e.content = e.content.replace(/ width="[^"]*"/g, "");
			e.content = e.content.replace(/ height="[^"]*"/g, "");
			e.content = e.content.replace(/ data-[^"]*="[^"]*"/g, "");
			e.content = e.content.replace(/ aria-[^"]*="[^"]*"/g, "");
			e.content = e.content.replace(/<div[^>]*>/g, "");
			e.content = e.content.replace(/<\/div[^>]*>/g, "");
			e.content = e.content.replace(/<span[^>]*>/g, "");
			e.content = e.content.replace(/<\/span[^>]*>/g, "");
		}
	});

});