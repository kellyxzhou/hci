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

    // Normally, here you would send data to a backend server or save it to localStorage
    console.log("Profile saved:", { name, email, phone });

    // Disable inputs after saving
    toggleEdit();
}

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


function selectDate(element) {
    // Remove 'selected' class from all date items
    const items = document.querySelectorAll('.date-item');
    items.forEach(item => item.classList.remove('selected'));

    // Add 'selected' class to the clicked item
    element.classList.add('selected');
}

function generateCalendar() {
    const dateSelection = document.getElementById('dateSelection');
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth(); // 0 = January, 1 = February, etc.

    // Get the first day of the month and the number of days in the month
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Last day of the month

    // Generate date items for each day of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateItem = document.createElement('div');
        dateItem.className = 'date-item';
        dateItem.innerHTML = `${day}<br><span>${firstDay.toLocaleString('default', { weekday: 'short' })}</span>`;
        dateItem.onclick = function () { selectDate(this); };

        // Move to the next day
        firstDay.setDate(firstDay.getDate() + 1);
        dateSelection.appendChild(dateItem);
    }
}

// Call the function to generate the calendar on page load
window.onload = generateCalendar;

let daysLeft = 5;
let hoursLeft = 13;

// Function to update the countdown display
function updateCountdown() {
    const countdownElement = document.getElementById('countdown');

    // Decrease hours
    if (hoursLeft > 0) {
        hoursLeft -= 1;
    } else {
        // Decrease days and reset hours to 23 if days are left
        if (daysLeft > 0) {
            daysLeft -= 1;
            hoursLeft = 23;
        }
    }

    // Update the countdown text
    countdownElement.textContent = `${daysLeft} days ${hoursLeft} hours left`;
}

// Update the countdown every hour (3600000 ms)
setInterval(updateCountdown, 3600000);

// Initial update
updateCountdown();

document.addEventListener("DOMContentLoaded", function () {
    const goalDailyToggle = document.getElementById("goal-daily-toggle");
    const reminderDailyToggle = document.getElementById("reminder-daily-toggle");

    const goalInputSection = document.getElementById("goal-section").querySelector(".goal-container");
    const reminderTimePicker = document.getElementById("reminder-section").querySelector(".time-picker");

    goalDailyToggle.addEventListener("change", function () {
        if (goalDailyToggle.checked) {
            goalInputSection.style.display = "none";
        } else {
            goalInputSection.style.display = "flex";
        }
    });

    reminderDailyToggle.addEventListener("change", function () {
        if (reminderDailyToggle.checked) {
            reminderTimePicker.style.display = "none";
        } else {
            reminderTimePicker.style.display = "flex";
        }
    });
});