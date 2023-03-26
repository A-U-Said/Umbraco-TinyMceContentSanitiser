angular.module("umbraco").run(config);

function config($injector) {
    var tinyMceAssets;
    if (!$injector.has("tinyMceAssets")) {
        return;
    }

    tinyMceAssets = $injector.get("tinyMceAssets");
    tinyMceAssets.push("/App_Plugins/TinyMceContentSanitiser/Js/plugin.js");


}