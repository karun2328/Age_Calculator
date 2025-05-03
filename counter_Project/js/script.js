document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let birthDate = document.getElementById("Date").value;
    let result = document.getElementById("result");

    if (!birthDate) {
        result.textContent = "Please select a valid date.";
        return;
    }

    let today = new Date();
    let birth = new Date(birthDate);

    if (birth > today) {
        result.textContent = "The selected date is in the future. Please select a valid past date.";
        return;
    }

    let age = today.getFullYear() - birth.getFullYear();
    let month = today.getMonth() - birth.getMonth();
    let day = today.getDate() - birth.getDate();

    // Correct month calculation
    if (month < 0) {
        age--;
        month += 12;
    }

    // Correct day calculation with proper month adjustment
    if (day < 0) {
        month--;

        // If month goes negative, adjust by adding 12 and reducing the year
        if (month < 0) {
            month = 11;
            age--;
        }

        let previousMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        day += previousMonthDays;
    }

    result.textContent = `Your current age is ${age} years, ${month} months, and ${day} days.`;
});
