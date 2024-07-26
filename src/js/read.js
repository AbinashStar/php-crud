$(document).ready(function() {
    $.ajax({
        type: 'GET',
        url: '../../src/php/read.php',
        dataType: 'json',
        success: function(response) {
           console.log("Response", response);
           displayData(response.data);
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
            alert('There was an error while fetching data.');
        }
    });
});

function displayData(data) {
    let table = '<table class="table"><thead><tr><th>ID</th><th>Name</th><th>Age</th><th>Phone</th><th>Email</th><th>Action</th></tr></thead><tbody>';
    data.forEach(function(user) {
        table += `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.age}</td>
            <td>${user.phone}</td>
            <td>${user.email}</td>
            <td>
                <button class="btn btn-outline-success btn-rounded edit-button" data-id="${user.id}">Edit</button>
                <button class="btn btn-outline-danger btn-rounded delete-button" data-id="${user.id}">Delete</button>
            </td>
        </tr>`;
    });
    table += '</tbody></table>';
    $('.card-body').html(table);

    $('.edit-button').click(function() {
        var userId = $(this).data('id');
        window.location.href = `../html/edit.html?id=${userId}`;
    });

    $('.delete-button').click(function() {
        var confirmation = confirm("Are you sure you want to delete this record?");
        if (confirmation) {
            var id = $(this).data('id');
            if (id) {
                $.ajax({
                    type: 'POST',
                    url: '../php/delete.php',
                    data: { id: id },
                    dataType: 'json',
                    success: function(response) {
                        window.location.href = 'read.html';
                    },
                    error: function(xhr, status, error) {
                        console.error('Error:', error);
                        alert('There was an error while fetching data.');
                    }
                });
            }
        }
    });    
}
