$(document).ready(function() {

    var $form = $("form");
    var $table = $("table");

    $form.submit(function(event) {
        event.preventDefault();
        var $firstName = $("#firstName").val();
        var $lastName = $("#lastName").val();
        var $email = $("#email").val();
        var $contact = $("#contact").val();
        var newRow = "<tr><td>" + $firstName + "</td><td>" + $lastName + "</td><td>" + $email + "</td><td>" + $contact + "</td></tr>";
        $table.append(newRow);
    });
    
});