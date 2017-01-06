$(document).ready(function () {
    var desc = $("#Description"),
        massageLength = $("#massageLength");

    if (!desc && !massageLength)
        return;

    desc.keyup(function (event) {
        var count = 1000- desc.val().length;
        
        massageLength.text(count);

        if (count <= 0) {
            desc.val(desc.val().substring(0, 1000));
            massageLength.text(0);
        }
    });
});