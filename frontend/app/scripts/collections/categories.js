/*global frontend, Backbone*/

frontend.Collections = frontend.Collections || {};

(function () {
    'use strict';

    frontend.Collections.CategoriesCollection = Backbone.Collection.extend({

        model: frontend.Models.CategoryModel,

        url: 'http://152.74.221.197:6543/categories',

        initialize: function  () {
        }

    });

})();
