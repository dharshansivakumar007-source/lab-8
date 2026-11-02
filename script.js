
// Get Form Element

document.getElementById("userForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    // Collect User Information

    let user = {
        name: document.getElementById("name").value,
        gender: document.getElementById("gender").value,
        mobile: document.getElementById("mobile").value,
        email: document.getElementById("email").value,
        city: document.getElementById("city").value,
        state: document.getElementById("state").value,
        country: document.getElementById("country").value
    };

    // Store Information in Local Storage

    localStorage.setItem("userData", JSON.stringify(user));

    // Display User Details

    showDetails(user);

});


// Function to Display User Details

function showDetails(user) {

    let table = document.getElementById("userDetails");

    table.innerHTML = "";

    let details = [
        ["Name", user.name],
        ["Gender", user.gender],
        ["Mobile Number", user.mobile],
        ["Email ID", user.email],
        ["City", user.city],
        ["State", user.state],
        ["Country", user.country]
    ];

    details.forEach(function(item) {

        let row = document.createElement("tr");

        let heading = document.createElement("th");
        heading.textContent = item[0];

        let value = document.createElement("td");
        value.textContent = item[1];

        row.appendChild(heading);
        row.appendChild(value);

        table.appendChild(row);

    });

    // Hide Form

    document.getElementById("userForm").style.display = "none";

    // Show Details

    document.getElementById("display").style.display = "block";

}


// Back Button Function

document.getElementById("backBtn")
.addEventListener("click", function() {

    document.getElementById("display").style.display = "none";

    document.getElementById("userForm").style.display = "block";

});
