"use strict";
var bookToHTMLstr = function(item) {

    var toString = "<h4 style='display:inline'>Item</h4><br>Title: " +
        item.title + "<br>Author: " +
        item.author + "<br> Category: " +
        item.category + "<br>ID: " +
        item._id + "<br><br>";
    return toString;
};

var main = function() {

    var requestURL = "/books";

    $.getJSON(requestURL, function(booksResponse) {
        booksResponse.forEach(function(item) {

            var booksHTML = bookToHTMLstr(item);

            $("main .photos").html(booksHTML + $("main .photos").html());
        });

    });
};

function init() {
    var ref = document.getElementById("submitBttn");
    ref.onclick = window.open("/confirm-add.html");
}
$(document).ready(main);