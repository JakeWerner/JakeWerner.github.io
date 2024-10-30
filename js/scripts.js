//scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Existing Navigation Burger Toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });
    } else {
        console.error('Burger or nav-links elements not found');
    }

    // Rotating Job Titles
    const jobTitleElement = document.getElementById('job-title');
    const jobTitles = [
        'DevSecOps Engineer',
        'Non-profit Board Member',
        'Student Pilot',
        'Writer and Editor',
        'Business Analyst',
        'Developer Advocate'
        // Add more job titles as desired
    ];
    const typingDelay = 3000; // Time between title changes in milliseconds

    let titleIndex = 0;
    const animationDuration = 500; // Duration matching the CSS animation (0.5s)

    // Function to update the job title with fade-out and fade-in effects
    function updateJobTitle() {
        // Add fade-out class to start fade-out animation
        jobTitleElement.classList.add('fade-out');

        // After the fade-out animation completes, change the text and add fade-in class
        setTimeout(() => {
            // Remove fade-out class
            jobTitleElement.classList.remove('fade-out');

            // Update the text content
            jobTitleElement.textContent = jobTitles[titleIndex];
            /*console.log(`Job title changed to: ${jobTitles[titleIndex]}`);*/

            // Add fade-in class to start fade-in animation
            jobTitleElement.classList.add('fade-in');

            // Increment the index, looping back if necessary
            titleIndex = (titleIndex + 1) % jobTitles.length;

            // Remove fade-in class after the animation completes to reset state
            setTimeout(() => {
                jobTitleElement.classList.remove('fade-in');
                /*console.log('Fade-in animation completed');*/
            }, animationDuration);
        }, animationDuration);
    }

    // Initial call to display the first job title
    updateJobTitle();

    // Set interval to update job title periodically
    setInterval(updateJobTitle, typingDelay);

    // Smooth Scroll Implementation
    const scrollArrow = document.getElementById('scroll-arrow');

    if (scrollArrow) {
        scrollArrow.addEventListener('click', () => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    } else {
        console.error('Scroll arrow element not found');
    }
});
