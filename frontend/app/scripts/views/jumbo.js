/*global frontend, Backbone, JST*/

frontend.Views = frontend.Views || {};

(function () {
    'use strict';

    frontend.Views.JumboView = Backbone.View.extend({

        template: JST['app/scripts/templates/jumbo.ejs'],

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        show: function () {
            $('#categoryModal').modal('show');
        }

    });

})();
