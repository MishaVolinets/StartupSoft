function validate(firstName, lastName, fullName, email, projectName, description) {
    var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if ((firstName == "" && lastName == "") || fullName == "")
        return false;

    if (!reg.test(email))
        return false;

    if (projectName == "")
        return false;

    if (description == "")
        return false;

    return true;
}
$(document).ready(function () {
    $('#submit').on('click', function () {
        var Firstname = $("#Firstname").val();
        var Lastname = $("#Lastname").val();
        var Fullname = $('#Fullname').val();
        var Email = $('#Email').val();
        var FromApply = $('#FromApply').val();
        var ProjectName = $('#ProjectName').val();
        var Description = $('#Description').val();

        var isValid = validate(Firstname, Lastname, Fullname, Email, ProjectName, Description);

        if (isValid) {
            $(".error").hide();
            $.ajax({
                url: "/email/send",
                data: {
                    Firstname: Firstname,
                    Lastname: Lastname,
                    Fullname: Fullname,
                    Email: Email,
                    FromApply: FromApply,
                    ProjectName: ProjectName,
                    Description: Description
                },
                success: function () {
                    $("#applyModal").modal('show');
                }
            });
        } else {
            $(".error").show();
        }
    })
});
