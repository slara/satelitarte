/*global frontend, Backbone, JST*/

frontend.Views = frontend.Views || {};

(function () {
    'use strict';

    frontend.Views.ClashAlertView = Backbone.View.extend({

        template: JST['app/scripts/templates/clashalert.ejs'],

        initialize: function (data) {
            this.data = data;
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.data));
            return this;
        }

    });

})();
