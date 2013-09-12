/*global frontend, Backbone*/

frontend.Routers = frontend.Routers || {};

(function () {
    'use strict';

    frontend.Routers.Router = Backbone.Router.extend({

        routes: {
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
            var catmodel = this.categories.get(category);
            if (this.modal !== undefined) {
                this.modal.remove();
            }
            this.modal = new frontend.Views.JumboView({model: catmodel});
            $('#modalContent').append(this.modal.render().el);
            this.modal.show();
        }

    });

})();
