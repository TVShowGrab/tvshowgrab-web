Template.ResultLine.events({
    "click .collapsible-header": function(e,t) {
        Session.set("linksAreReady", false);
        Meteor.call("getLinks", t.find(".url").innerHTML, function (e, links) {
            Session.set("links", links);
            Session.set("linksAreReady", true);
        });
    }
});

Template.ResultLine.helpers({
    getTitle: function(title) {return title.substring(0,title.indexOf(' HDTV'))},
    getUnderTitle: function(title) {return title.substring(title.indexOf(' HDTV'), title.length - 1)},
    links: function() { return Session.get("links"); },
    ready: function() { return Session.get("linksAreReady")},
    unShorten: function(url) { return Meteor.call("") }
});

Template.ResultLine.onRendered(function(){
    Session.set("linksAreReady", false);
});