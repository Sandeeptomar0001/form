var empList = [];

$("#submit").click(() => {
    let email = $("#email").val();
    let pass = $("#pass").val();
    let age = $("#age").val();
    let bloodGroup = $("#bloodGroup").val();

    if (email !== "" && pass !== "" && age !== "" && bloodGroup !== "") {
        // Additional validation can be added as needed

        var emp = { email: email, pass: pass, age: age, bloodGroup: bloodGroup };

        if (empList.some((element) => element.email === emp.email)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: emp.email + " is already exist!",
                footer: '<a href="#">do not add duplicate email</a>'
            });
        } else {
            empList.push(emp);
            Swal.fire({
                title: "Good Job!",
                text: "Employee details added successfully",
                icon: "success"
            });
            $("#email").val("");
            $("#pass").val("");
            $("#age").val("");
            $("#bloodGroup").val("");
        }

        renderTable();
    } else {
        Swal.fire({
            title: "Cannot be empty",
            text: "Fill all the input fields",
            icon: "warning",
        });
    }
});

// ... (remaining code)

function renderTable() {
    if (empList.length !== 0) {
        let table = `<table class="table table-secondary table-hover">
            <thead>
                <tr>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Age</th>
                    <th scope="col">Blood Group</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>`;

        empList.forEach(e => {
            table += `<tr>
                <td>${e.email}</td>
                <td>${e.pass}</td>
                <td>${e.age}</td>
                <td>${e.bloodGroup}</td>
                <td><div class="fa fa-trash-o delete" id="${e.email}"></div></td>
                </tr>`;
        });

        table += `</tbody></table>`;
        $(".empData").html(table);
    } else {
        $(".empData").html("");
    }
}