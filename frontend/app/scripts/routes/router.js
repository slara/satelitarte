/*global frontend, Backbone*/

frontend.Routers = frontend.Routers || {};

(function () {
    'use strict';

    frontend.Routers.Router = Backbone.Router.extend({

        routes: {
            '': 'showCategory',
            ':id': 'showCategory'
        },

        initialize: function () {
            console.log('initialize router');
            this.categories = new frontend.Collections.CategoriesCollection();
            this.categories.fetch({'reset': true});
            this.appView = new frontend.Views.AppView({collection: this.categories});
        },

        showCategory: function (category) {
            console.log('showCategory:', category);
        }

    });

})();
