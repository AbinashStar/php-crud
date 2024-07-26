$(document).ready(function() {
    $('#create_submit').click(function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var age = $('#age').val();
        var phone = $('#phone').val();
        var email = $('#email').val();
        var id = $('#id').val();

        var formData = {name: name,age: age,phone: phone,email: email};
        
        if (id) {
            formData.id = id;
        }

        $.ajax({
            type: 'POST',
            url: '../php/insert.php',
            data: formData,
            dataType: 'json',
            success: function(response) {
                window.location.href = 'read.html';
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
                alert('There was an error while submitting data.');
            }
        });
    });
});
