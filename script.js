// script.js
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
