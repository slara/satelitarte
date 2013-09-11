/*global frontend, Backbone, JST*/

frontend.Views = frontend.Views || {};

(function () {
    'use strict';

    frontend.Views.CategoryPanelView = Backbone.View.extend({

        template: JST['app/scripts/templates/category-panel.ejs']

    });

})();
