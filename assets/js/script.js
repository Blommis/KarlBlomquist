
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
        <p><strong>2016 - 2018</strong> | High School Diploma in Economics.</p>
        <p><strong>2023 - 2025</strong> | Bachelor's Degree in Digital marketing from Sälj & Marknadshögskolan Stockholm.</p>
        <p><strong>Jan - July 2025</strong> | Currently pursuing a Fullstack Developer diploma at Code Institute Dublin (On distance).</p>
    `;

    // Experience Info
    const experienceContent = `
        <p><strong>Autumn 2023</strong> | I took my first Erasmus internship abroad in Copenhagen, working at a marketing agency 
        focused on influencer marketing. During this time, I gained valuable experience in international marketing and cultural differences.
         My main task was to establish the Danish platform in the Swedish market, managing the process independently. This internship improved my 
         adaptability, teamwork skills, and ability to communicate in multiple languages.
          </p>

        <p><strong>Autumn 2024</strong> | During my second internship at the marketing department of the recruitment company Procruitment, 
        I have combined technical skills with creativity to produce content that strengthens the brand. I developed a career page and an intranet for
         consultants, utilizing HTML, CSS, and JavaScript with a strong focus on user-friendliness.
Additionally, I have worked on SEO, copywriting, and content marketing, as well as managing their social 
media to effectively reach the target audience. By leveraging tools like Keyword Planner and Google Analytics, I have analyzed data to identify areas for improvement in Procruitment's marketing efforts and implemented strategies to optimize results.</p>
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
        "HTML", "CSS", "Bootstrap","JavaScript", "Jest", 
        "jQuery", "API", "Python", "Django", 
        "React.js", "SQL", "Database Management", "Github", "Vs Code", "README"
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


const track = document.querySelector('.carousel-track');
let cards = Array.from(document.querySelectorAll('.project-cards'));
let currentIndex = 1;

// Klona första och sista
const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, track.firstChild);

// Uppdatera kortlistan efter kloning
cards = Array.from(document.querySelectorAll('.project-cards'));

// Ställ in första synliga kortet (index 1, eftersom vi har en klon först)
track.style.transform = `translateX(-${100 * currentIndex}%)`;

function scrollCarousel(direction) {
  if (track.classList.contains('shifting')) return;

  currentIndex += direction;
  track.classList.add('shifting');
  track.style.transition = 'transform 0.5s ease';
  track.style.transform = `translateX(-${100 * currentIndex}%)`;
}

// Återställ när vi når klonade kortet
track.addEventListener('transitionend', () => {
  track.classList.remove('shifting');

  if (currentIndex === 0) {
    // Gå till sista riktiga kortet
    currentIndex = cards.length - 2;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${100 * currentIndex}%)`;
  } else if (currentIndex === cards.length - 1) {
    // Gå till första riktiga kortet
    currentIndex = 1;
    track.style.transition = 'none';
    track.style.transform = `translateX(-${100 * currentIndex}%)`;
  }
});


// Animation to tools section 
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const items = entry.target.querySelectorAll('h4');
        items.forEach(item => item.classList.add('animate'));
        observer.unobserve(entry.target); // Bara en gång
      }
    });
  }, { threshold: 0.2 });

  const toolsSection = document.querySelector('.tools-websites');
  if (toolsSection) {
    observer.observe(toolsSection);
  }