/*global frontend, Backbone, JST*/

frontend.Views = frontend.Views || {};

(function () {
    'use strict';

    frontend.Views.CategorylistView = Backbone.View.extend({

        template: JST['app/scripts/templates/categorylist.ejs']

    });

})();
