// Toggle between view and edit mode
function toggleEdit() {
    const editButton = document.getElementById('edit-btn');
    const saveButton = document.getElementById('save-btn');
    const inputs = document.querySelectorAll('#name, #email, #phone');

    if (editButton.innerText === "Edit Profile") {
        editButton.innerText = "Cancel";
        saveButton.style.display = "inline-block";

        // Enable input fields for editing
        inputs.forEach(input => {
            input.disabled = false;
        });
    } else {
        editButton.innerText = "Edit Profile";
        saveButton.style.display = "none";

        // Disable input fields after canceling
        inputs.forEach(input => {
            input.disabled = true;
        });
    }
}

// Save profile information
function saveProfile() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    // Save the updated profile info to localStorage
    localStorage.setItem('userName', name);
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userPhone', phone);

    console.log("Profile saved:", { name, email, phone });

    // Disable inputs after saving
    toggleEdit();
}

// Load profile data from localStorage when the page loads
window.onload = function () {
    const name = localStorage.getItem('userName');
    const email = localStorage.getItem('userEmail');
    const phone = localStorage.getItem('userPhone');

    if (name) {
        document.getElementById('name').value = name;
    }
    if (email) {
        document.getElementById('email').value = email;
    }
    if (phone) {
        document.getElementById('phone').value = phone;
    }
};

// Handle profile picture change
document.getElementById('profile-pic-input').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function () {
            document.getElementById('profile-pic').src = reader.result;
        };
        reader.readAsDataURL(file);
    }
});
