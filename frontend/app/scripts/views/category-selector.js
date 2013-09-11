/*global frontend, Backbone, JST*/

frontend.Views = frontend.Views || {};

(function () {
    'use strict';

    frontend.Views.CategorySelectorView = Backbone.View.extend({

        template: JST['app/scripts/templates/category-selector.ejs'],

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
