
document.addEventListener("DOMContentLoaded", function () {
    let jobTitles = ["Bachelor in Marketing", "Web Developer student", "FrontEnd student", "BackEnd student"];
    let index = 0;
    let output = document.querySelector(".typed-text-output");

    function changeTitle() {
        output.textContent = jobTitles[index];
        index = (index + 1) % jobTitles.length;
    }

    changeTitle(); // Kör direkt första gången
    setInterval(changeTitle, 2000); // Byt titel var 2:e sekund
});


// Detect when the "About" section is in the viewport
document.addEventListener("scroll", () => {
    const aboutSection = document.getElementById("about");
    const sectionPosition = aboutSection.getBoundingClientRect();

    // Check if "About" section is visible on the screen
    if (sectionPosition.top < window.innerHeight && sectionPosition.bottom > 0) {
        aboutSection.classList.add("show"); // Apply the "show" class
    }
});


// in about section at education and experience you click - you get active link meanwhile gets info
document.addEventListener("DOMContentLoaded", () => {
    const educationBtn = document.getElementById("education-btn");
    const experienceBtn = document.getElementById("experience-btn");
    const additionalInfo = document.getElementById("additional-info");

    // Education Info
    const educationContent = `
        <p><strong>2023 - 2025</strong> | Bachelor's Degree in Digital Marketing from Sälj & Marknadshögskolan Stockholm.</p>
        <p><strong>Jan - July 2025</strong> | Currently pursuing a Fullstack Developer Certificate at Code Institute Dublin (On distance).</p>
    `;

    // Experience Info
    const experienceContent = `
        <p><strong>Autumn 2023</strong> | Internship in Copenhagen at marketing agency focused on Influencer marketing.</p>
        <p><strong>Autumn 2024</strong> | Internship back in Sweden working with a marketing team in-house at a recruitment company.</p>
    `;

    // Function to handle active state
    const setActiveButton = (activeButton) => {
        // Remove active class from both buttons
        educationBtn.classList.remove("active");
        experienceBtn.classList.remove("active");

        // Add active class to the clicked button
        activeButton.classList.add("active");
    };

    // Event Listener for Education Button
    educationBtn.addEventListener("click", () => {
        additionalInfo.innerHTML = educationContent;
        additionalInfo.classList.add("visible");
        setActiveButton(educationBtn); // Set active state
    });

    // Event Listener for Experience Button
    experienceBtn.addEventListener("click", () => {
        additionalInfo.innerHTML = experienceContent;
        additionalInfo.classList.add("visible");
        setActiveButton(experienceBtn); // Set active state
    });
});

// What I learned so far section
document.addEventListener("DOMContentLoaded", function () {
    const digitalMarketingBtn = document.getElementById("digital-marketing-btn");
    const webDeveloperBtn = document.getElementById("web-developer-btn");
    const coursesInfo = document.getElementById("courses-info");

    // Digital Marketing Courses
    const digitalMarketingCourses = [
        "Agile Project Management",
        "Presentation Techniques",
        "Digital Channels",
        "SEM & Web Analytics",
        "SEO",
        "Social Media Marketing",
        "Content Marketing",
        "Economics & Law",
        "Interaction Design",
        "Data-Driven Sales",
        "Digital Analytics",
        "Erasmus LIA 1 & 2",
    ];

    // Web Developer Courses
    const webDeveloperCourses = [
        "HTML & CSS",
        "JavaScript Basics",
        "Responsive Design",
        "React.js",
        "Node.js",
        "Database Management",
    ];

    // Function to render course cards
    const renderCourses = (courses) => {
        coursesInfo.innerHTML = ""; // Clear the grid
        courses.forEach((course) => {
            const courseCard = `
                <div class="course-card">
                    <h4>${course}</h4>
                </div>
            `;
            coursesInfo.innerHTML += courseCard;
        });
    };

    // Set Active Button
    const setActiveButton = (activeButton) => {
        digitalMarketingBtn.classList.remove("active");
        webDeveloperBtn.classList.remove("active");
        activeButton.classList.add("active");
    };

    // Event Listener for Digital Marketing Button
    digitalMarketingBtn.addEventListener("click", () => {
        renderCourses(digitalMarketingCourses); // Show courses
        setActiveButton(digitalMarketingBtn); // Highlight button
    });

    // Event Listener for Web Developer Button
    webDeveloperBtn.addEventListener("click", () => {
        renderCourses(webDeveloperCourses); // Show courses
        setActiveButton(webDeveloperBtn); // Highlight button
    });

    // No courses are loaded by default
    coursesInfo.innerHTML = ""; // Ensure the grid is empty initially
});
