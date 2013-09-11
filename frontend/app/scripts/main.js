/*global frontend, $*/


window.frontend = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');
    }
};

$(document).ready(function () {
    'use strict';
    frontend.init();
    new frontend.Routers.Router();
    Backbone.history.start();
});
