/*global frontend, Backbone, JST*/

frontend.Views = frontend.Views || {};

(function () {
    'use strict';

    frontend.Views.CategoryPanelView = Backbone.View.extend({

        template: JST['app/scripts/templates/category-panel.ejs'],

        initialize: function () {
            this.render();
        },

        render: function () {
            console.log(this.model.get('name'));
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });

})();
