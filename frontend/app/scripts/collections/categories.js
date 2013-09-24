/*global frontend, Backbone*/

frontend.Collections = frontend.Collections || {};

(function () {
    'use strict';

    frontend.Collections.CategoriesCollection = Backbone.Collection.extend({

        model: frontend.Models.CategoryModel,

        url: '/categories',

        initialize: function  () {
        }

    });

})();
