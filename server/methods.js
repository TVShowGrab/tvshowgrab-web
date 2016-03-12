Meteor.methods({
    getPosts: function(url) {
       this.unblock();
       return Meteor.http.call("GET", url);
    },
    getLinks: function(url) {
        this.unblock();
        var r = Meteor.http.call("GET", url);
        var match, links = [];
        var re = /\<p style="text-align: center;"\>\<strong\>([^<]*)\<\/strong\>\<br \/\> ([^<]*)\<br \/\> \<strong\>\<a href="([^"]*)"\>MEGA/g;
        while ((match = re.exec(r.content)) != null) {
            links.push({
                link_title: match[1],
                link_desc: match[2],
                link: Meteor.http.call("GET", "http://api.longurl.org/v2/expand?url=" + match[3] +"&format=json").data['long-url']
            })
        }
        return links;
    }
});