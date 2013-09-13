/*global frontend, Backbone*/

frontend.Routers = frontend.Routers || {};

(function () {
    'use strict';

    frontend.Routers.Router = Backbone.Router.extend({

        routes: {
            '': 'login',
            'app': 'app',
            ':id': 'showCategory'
        },

        initialize: function () {
            console.log('initialize router');
        },

        login: function() {
            this.user = {};
            this.loginView = new frontend.Views.LoginView();
            this.loginView.router = this;
            $('#login').append(this.loginView.render().el);
        },

        app: function () {
            console.log(this.user);
            if (this.loginView !== undefined) {
                this.loginView.remove();
            }
            this.categories = new frontend.Collections.CategoriesCollection();
            this.categories.fetch({'reset': true});
            this.appView = new frontend.Views.AppView({collection: this.categories});
            this.appView.router = this;
        },


        showCategory: function (category) {
            console.log('showCategory:', category);
            var catmodel = this.categories.get(category);
            if (this.modal !== undefined) {
                this.modal.remove();
            }
            this.modal = new frontend.Views.JumboView({model: catmodel});
            this.modal.router = this;
            $('#modalContent').append(this.modal.render().el);
            this.modal.show();
        }

    });

})();
