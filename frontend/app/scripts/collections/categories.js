/*global frontend, Backbone*/

frontend.Collections = frontend.Collections || {};

(function () {
    'use strict';

    frontend.Collections.CategoriesCollection = Backbone.Collection.extend({

        model: frontend.Models.CategoryModel,

        url: 'http://localhost:6543/categories',

        initialize: function  () {
        }

    });

})();
