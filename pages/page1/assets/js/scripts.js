document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submitButton").addEventListener("click", (event) => {
        event.preventDefault();

        const name = document.getElementById("nameInput").value;
        const age = parseInt(document.getElementById("ageInput").value, 10);
        const number = parseInt(document.getElementById("numberInput").value, 10);

        if (!name || !age || !number) {
            alert("Please fill out all the fields.");
            return;
        }

        const output = document.getElementById("output");
        output.innerHTML = `<p>Hello, ${name}!</p>`;

        if (age >= 18) {
            output.innerHTML += `<p>You are eligible to vote.</p>`;
        } else {
            output.innerHTML += `<p>You are not eligible to vote.</p>`;
        }

        let sum = 0;
        for (let i = 1; i <= number; i++) {
            sum += i;
        }
        output.innerHTML += `<p>The sum of numbers from 1 to ${number} is ${sum}.</p>`;
    });
});