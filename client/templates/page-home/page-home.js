Template.PageHome.events({
    "keypress #search": function(e,t) {
        if(e.keyCode == '13') {
            Session.set("firstScreen", false);
            Session.set("resultsAreReady", false);
            Meteor.call("getPosts", "http://tuserie.com/?s=" + t.find("#search").value, function(e,r) {
                var match, results = [];
                var re = /\<div class="post-main"\>\<h2\>\<a href="([^"]*)"\>([^\[]*)/g;
                while ((match = re.exec(r.content)) != null) {
                    results.push({
                        url: match[1],
                        title: match[2]
                    });
                }
                Session.set("results", results);
                Session.set("resultsAreReady", true);
            });
        }
    }
});

Template.PageHome.helpers({
    results: function() { return Session.get("results"); },
    ready: function() { return Session.get("resultsAreReady");},
    first: function() { return Session.get("firstScreen"); }
});

Template.PageHome.onRendered(function(){
    Session.set("firstScreen", true);
    Session.set("resultsAreReady", false);
    $(document).ready(function(){
        $('.collapsible').collapsible({
            accordion : false
        });
    });
});