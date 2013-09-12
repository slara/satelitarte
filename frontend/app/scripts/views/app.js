/*global frontend, Backbone, JST*/

frontend.Views = frontend.Views || {};

(function () {
    'use strict';

    frontend.Views.AppView = Backbone.View.extend({

        template: JST['app/scripts/templates/app.ejs'],

        initialize: function () {
            this.collection.on('reset', this.addAll, this);
        },

        addAll: function () {
            console.log('addAll Category');
            this.collection.forEach(function (category) {
                console.log(category);
                var categoryView = new frontend.Views.CategoryPanelView({model: category});
                $('#selector').append(categoryView.render().el);
            });
        }

    });

})();
