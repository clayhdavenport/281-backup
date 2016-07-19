var main = function () {
    "use strict";

    var requestURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags=eagle&format=json&jsoncallback=?";

    $.getJSON(requestURL, function(flickrResponse) {
        flickrResponse.items.forEach(function (item) {

            var $a = $("<a>").hide();
            $a.attr("href", item.media.m);
            $a.attr("data-lightbox", "Flickr");

            // create a new JQuery element to hold the image
            // but hide it so we can fade it in
            var $img = $("<img>");

            // set the attribute to the url
            // contained in the response
            $img.attr("src", item.media.m);

            //create the image link
            $a.html($img);

            // attach the img tag to the main
            // photos element and then fade it in
            $("main .photos").append($a);
            $a.fadeIn();
        });

    });
};

$(document).ready(main);
