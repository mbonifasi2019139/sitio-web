$(document).ready(function() {
    //Lettering JS
    $(function() {
        $("#daniel-bonifasi").lettering();
    });

    $(function() {
        $("#daniel-bonifasi").textillate({ in: { effect: "splat" },
            out: { effect: "foldUnfold", sync: true },
            loop: true,
        });
    });
});