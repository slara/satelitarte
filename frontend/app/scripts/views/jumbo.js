/*global frontend, Backbone, JST*/

frontend.Views = frontend.Views || {};

(function () {
    'use strict';

    frontend.Views.JumboView = Backbone.View.extend({

        template: JST['app/scripts/templates/jumbo.ejs'],

        events: {
            'click #selectionsubmit': 'selectCategory'
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        show: function () {
            $('#categoryModal').modal('show');
        },

        selectCategory: function () {
            console.log('Selected Category: ', this.model.get('name'));
            console.log('User: ', this.router.user.name);
            var category = this.model.get('id');
            var participant = this.router.user.name;
            var url = '/selectcategory/' + participant + '/' + category;
            var self = this;
            $.getJSON(url, function(data) {
                if (data.status === 'success') {
                    $('#categoryModal').modal('hide');
                    self.router.categories.fetch({'reset': true});
                    window.location = 'http://www.cefop.cl';
                } else {
                    $('#categoryModal').modal('toggle');
                    var alert = new frontend.Views.ClashAlertView({message: data.status});
                    $('#alert-container').append(alert.render().el);
                }
            }, this);
        }

    });

})();
