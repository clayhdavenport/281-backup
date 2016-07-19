var main = function () {
    "use strict";

if (localStorage.getItem("toDoList")){
    $(".comments").html(localStorage.getItem("toDoList"));
}
    var addCommentFromInputBox = function () {
        var $new_comment;

        if ($(".comment-input input").val() !== "") {
            $new_comment = $("<p>").text($(".comment-input input").val());
            //$new_comment.hide();
            $(".comments").append($new_comment);
            localStorage.setItem("toDoList", $(".comments").html());
            //$new_comment.fadeIn();
            $(".comment-input input").val("");
        }
    };

    $(".comment-input button").on("click", function (event) {
        addCommentFromInputBox();
    });

    $(".comment-input input").on("keypress", function (event) {
        if (event.keyCode === 13) {
            addCommentFromInputBox();
        }
    });
};

$(document).ready(main);
