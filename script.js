document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.getElementById("home-link");
    const loginLink = document.getElementById("login-link");
    const registerLink = document.getElementById("register-link");
    const jobListingsContainer = document.getElementById("job-listings");
    const loginForm = document.getElementById("login-form");
    const registerForm = document.getElementById("register-form");

    const jobListings = [
        { title: "Frontend Developer", company: "Tech Co.", location: "New York" },
        { title: "Backend Developer", company: "Soft Corp.", location: "San Francisco" },
        { title: "UI/UX Designer", company: "Design Studio", location: "Los Angeles" }
    ];

    function displayJobListings() {
        jobListingsContainer.innerHTML = "";
        jobListings.forEach(job => {
            const jobDiv = document.createElement("div");
            jobDiv.classList.add("job");
            jobDiv.innerHTML = `
                <h3>${job.title}</h3>
                <p>Company: ${job.company}</p>
                <p>Location: ${job.location}</p>
            `;
            jobListingsContainer.appendChild(jobDiv);
        });
    }

    displayJobListings();

    loginLink.addEventListener("click", function(event) {
        event.preventDefault();
        loginForm.style.display = "block";
        registerForm.style.display = "none";
    });
    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        registerForm.style.display = "block";
        loginForm.style.display = "none";
    });

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        console.log("Logging in with username:", username, "and password:", password);
        window.location.href = "/";
    });

    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newUsername = document.getElementById("new-username").value;
        const newPassword = document.getElementById("new-password").value;
        console.log("Registering new user with username:", newUsername, "and password:", newPassword);
        window.location.href = "/";
    });
});
