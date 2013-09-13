/*global frontend, Backbone, JST*/

frontend.Views = frontend.Views || {};

(function () {
    'use strict';

    frontend.Views.LoginView = Backbone.View.extend({

        template: JST['app/scripts/templates/login.ejs'],

        events: {
            'click #loginsubmit': 'login'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        login: function () {
            console.log('login');
            this.router.navigate('app', {trigger: true});
        }

    });

})();
