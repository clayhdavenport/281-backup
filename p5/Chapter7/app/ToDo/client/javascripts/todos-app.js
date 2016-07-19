var toDoToHTMLstr = function(item) {

    var toString = "<p>" + item.content + "</p>";
    return toString;
};

var addCommentFromInputBox = function() {

    var requestURL = "/todos";

    $.getJSON(requestURL, function(toDoResponse) {
        toDoResponse.forEach(function(item) {

            var new_comment = toDoToHTMLstr(item);

            $("main .comments").html($("main .comments").html() + new_comment);

        });

    });
};

$(document).ready(addCommentFromInputBox);