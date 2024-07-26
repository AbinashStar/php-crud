$(document).ready(function() {
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var id = urlParams.get('id');
    if(id){
        $.ajax({
            type: 'POST',
            url: '../php/edit.php',
            data: { id: id },
            dataType: 'json',
            success: function(response) {
                console.log(response.data[0]);
                var data = response.data[0];
                $("#id").val(data.id);
                $("#name").val(data.name);
                $("#age").val(data.age);
                $("#phone").val(data.phone);
                $("#email").val(data.email);
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
                alert('There was an error while fetching data.');
            }
        });
    }
});