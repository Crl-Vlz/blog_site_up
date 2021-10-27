$("#btn-add").click(function(){
    $("#popup").addClass("mdc-dialog--open");
});

$("#postOK").click(function(){
    $("#popup").removeClass("mdc-dialog--open");
});

$("#postEdited").click(function(){
    $("#popup2").removeClass("mdc-dialog--open");
});

$("#closePost").click(function(){
    $("#popup").removeClass("mdc-dialog--open");
});

$("#closeEdit").click(function(){
    $("#popup2").removeClass("mdc-dialog--open");
});