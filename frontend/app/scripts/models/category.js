/*global frontend, Backbone*/

frontend.Models = frontend.Models || {};

(function () {
    'use strict';

    frontend.Models.CategoryModel = Backbone.Model.extend({

        defaults: {
            'name': '',
            'image1': '',
            'image2': ''
        }

    });

})();
