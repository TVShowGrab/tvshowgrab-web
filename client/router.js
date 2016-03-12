Router.configure({
    layoutTemplate: 'Layout',
    loadingTemplate: 'Loader'
});

Router.route('/', function () {
    this.render('PageHome');
});

/*
Router.route('/search/:id', function () {
    this.render('Plan', {
        data: function () {
            Meteor.call("getThisPl", this.params.id, function (e, r) {
                pl.set(r);
            });
            return pl.get();
        }
    });
});*/
