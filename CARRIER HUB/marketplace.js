// ======================== HAMBURGER MENU ========================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ======================== PROFILE DROPDOWN ========================
const profileBtn = document.querySelector('.profile-btn');
const profileDropdown = document.getElementById('profileDropdown');

if (profileBtn) {
    profileBtn.addEventListener('click', () => {
        profileDropdown.classList.toggle('active');
    });

    // Close dropdown when a link is clicked
    const dropdownItems = profileDropdown.querySelectorAll('.dropdown-item');
    dropdownItems.forEach(item => {
        item.addEventListener('click', () => {
            profileDropdown.classList.remove('active');
        });
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.user-profile')) {
            profileDropdown.classList.remove('active');
        }
    });
}

// ======================== MODALS & BUTTONS ========================
const coursesModal = document.getElementById('coursesModal');

// Get all apply buttons
const applyBtns = document.querySelectorAll('.apply-btn');
applyBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = e.target.closest('.job-card');
        const jobTitle = card.querySelector('h3').textContent;
        const company = card.querySelector('.company-name').textContent;
        
        // Show confirmation and save application
        alert(`✓ Your application for "${jobTitle}" at ${company} has been submitted!\n\nYou can track your application in your dashboard.`);
        
        // In a real app, this would send data to backend
        console.log('Application submitted for:', jobTitle, 'at', company);
    });
});

// Get all view courses buttons
const viewCoursesBtns = document.querySelectorAll('.view-courses-btn');
viewCoursesBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.mentor-card');
        const mentorName = card.querySelector('h3').textContent;
        
        document.getElementById('mentorName').textContent = mentorName;
        populateCourses(mentorName);
        coursesModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Get all book session buttons
const bookSessionBtns = document.querySelectorAll('.book-session-btn');
bookSessionBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const card = e.target.closest('.mentor-card');
        const mentorName = card.querySelector('h3').textContent;
        const mentorTitle = card.querySelector('.title').textContent;
        
        alert(`✓ You're ready to book a session with ${mentorName}!\n\nGo to your dashboard to schedule your first session and discuss your learning goals.`);
        
        // In a real app, redirect to dashboard or booking page
        console.log('Session booking requested with:', mentorName);
    });
});

// Close modals
const closeButtons = document.querySelectorAll('.close-modal');
closeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Close modals when clicking outside
window.addEventListener('click', (e) => {
    if (coursesModal && e.target === coursesModal) {
        coursesModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Cancel buttons for modals
const cancelBtns = document.querySelectorAll('.btn-cancel');
cancelBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.target.closest('.modal').classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// ======================== COURSES DATA ========================
const coursesData = {
    'Sarah Johnson': [
        { name: 'React Mastery', duration: '8 weeks', level: 'Advanced' },
        { name: 'System Design 101', duration: '6 weeks', level: 'Advanced' },
        { name: 'Full Stack Development', duration: '12 weeks', level: 'Intermediate' },
        { name: 'Web Performance', duration: '4 weeks', level: 'Intermediate' },
        { name: 'Node.js Advanced', duration: '6 weeks', level: 'Advanced' }
    ],
    'Michael Chen': [
        { name: 'Machine Learning Basics', duration: '10 weeks', level: 'Beginner' },
        { name: 'Deep Learning', duration: '12 weeks', level: 'Advanced' },
        { name: 'Data Cleaning & Prep', duration: '4 weeks', level: 'Beginner' },
        { name: 'Statistical Analysis', duration: '6 weeks', level: 'Intermediate' },
        { name: 'TensorFlow in Production', duration: '8 weeks', level: 'Advanced' },
        { name: 'Python for Data Science', duration: '8 weeks', level: 'Intermediate' },
        { name: 'Computer Vision', duration: '10 weeks', level: 'Advanced' }
    ],
    'Emily Rodriguez': [
        { name: 'Figma for Beginners', duration: '4 weeks', level: 'Beginner' },
        { name: 'User Experience Design', duration: '8 weeks', level: 'Intermediate' },
        { name: 'Prototyping & Interaction', duration: '6 weeks', level: 'Intermediate' },
        { name: 'Design Systems', duration: '6 weeks', level: 'Advanced' },
        { name: 'Web Accessibility', duration: '4 weeks', level: 'Intermediate' },
        { name: 'User Research Fundamentals', duration: '5 weeks', level: 'Beginner' }
    ],
    'James Wilson': [
        { name: 'Kubernetes Basics', duration: '8 weeks', level: 'Intermediate' },
        { name: 'Docker Deep Dive', duration: '6 weeks', level: 'Intermediate' },
        { name: 'CI/CD Pipelines', duration: '7 weeks', level: 'Intermediate' },
        { name: 'AWS for DevOps', duration: '10 weeks', level: 'Advanced' },
        { name: 'Infrastructure as Code', duration: '6 weeks', level: 'Advanced' },
        { name: 'Microservices Architecture', duration: '8 weeks', level: 'Advanced' },
        { name: 'Monitoring & Logging', duration: '5 weeks', level: 'Intermediate' },
        { name: 'Security Best Practices', duration: '6 weeks', level: 'Advanced' }
    ],
    'Lisa Thompson': [
        { name: 'React Native Basics', duration: '8 weeks', level: 'Beginner' },
        { name: 'Native iOS Development', duration: '12 weeks', level: 'Intermediate' },
        { name: 'Kotlin for Android', duration: '10 weeks', level: 'Intermediate' },
        { name: 'Mobile App Architecture', duration: '6 weeks', level: 'Advanced' }
    ],
    'David Park': [
     { name:  'Product Strategy Essentials', duration: '5 weeks', level: 'Beginner' },
        { name: 'Data-Driven Decision Making', duration: '4 weeks', level: 'Intermediate' },
        { name: 'Agile Leadership', duration: '6 weeks', level: 'Intermediate' }
    ],
    'Rebecca Anderson': [
        { name: 'AWS Security Fundamentals', duration: '8 weeks', level: 'Intermediate' },
        { name: 'Cloud Compliance & Governance', duration: '6 weeks', level: 'Advanced' },
        { name: 'Zero Trust Architecture', duration: '7 weeks', level: 'Advanced' },
        { name: 'Threat Detection & Response', duration: '8 weeks', level: 'Advanced' },
        { name: 'Infrastructure Security', duration: '6 weeks', level: 'Intermediate' }
    ],
    'Marcus Johnson': [
        { name: 'Introduction to Product Management', duration: '6 weeks', level: 'Beginner' },
        { name: 'Growth Hacking Strategies', duration: '5 weeks', level: 'Intermediate' },
        { name: 'Product Metrics & Analytics', duration: '5 weeks', level: 'Intermediate' },
        { name: 'Scaling Products to Millions', duration: '8 weeks', level: 'Advanced' }
    ],
    'Nina Patel': [
        { name: 'Adobe Creative Suite Mastery', duration: '10 weeks', level: 'Beginner' },
        { name: 'Graphic Design Fundamentals', duration: '8 weeks', level: 'Beginner' },
        { name: 'Motion Design & Animation', duration: '9 weeks', level: 'Intermediate' },
        { name: 'Building a Strong Portfolio', duration: '4 weeks', level: 'Intermediate' },
        { name: 'Brand Design Systems', duration: '6 weeks', level: 'Advanced' },
        { name: 'Professional Freelancing', duration: '5 weeks', level: 'Intermediate' }
    ],
    'Christopher Lee': [
        { name: 'Go for Backend Development', duration: '9 weeks', level: 'Intermediate' },
        { name: 'Rust Systems Programming', duration: '12 weeks', level: 'Advanced' },
        { name: 'Microservices Design Patterns', duration: '8 weeks', level: 'Advanced' },
        { name: 'Scaling Systems to Millions', duration: '10 weeks', level: 'Advanced' },
        { name: 'Database Optimization', duration: '6 weeks', level: 'Advanced' }
    ],
    'Aisha Kumar': [
        { name: 'Deep Learning Basics', duration: '10 weeks', level: 'Intermediate' },
        { name: 'Natural Language Processing', duration: '10 weeks', level: 'Advanced' },
        { name: 'Computer Vision Essentials', duration: '9 weeks', level: 'Intermediate' },
        { name: 'Building Production ML Systems', duration: '8 weeks', level: 'Advanced' },
        { name: 'Transformer Models Deep Dive', duration: '6 weeks', level: 'Advanced' },
        { name: 'ML Research Methodology', duration: '7 weeks', level: 'Advanced' },
        { name: 'PyTorch Mastery', duration: '8 weeks', level: 'Intermediate' }
    ],
    'Thomas Bradley': [
        { name: 'Selenium WebDriver Mastery', duration: '8 weeks', level: 'Beginner' },
        { name: 'Test Automation Best Practices', duration: '7 weeks', level: 'Intermediate' },
        { name: 'CI/CD Integration for QA', duration: '6 weeks', level: 'Intermediate' },
        { name: 'Performance & Load Testing', duration: '6 weeks', level: 'Advanced' },
        { name: 'API Testing Fundamentals', duration: '5 weeks', level: 'Beginner' }
    ]
};

function populateCourses(mentorName) {
    const coursesList = document.getElementById('coursesList');
    coursesList.innerHTML = '';

    const courses = coursesData[mentorName] || [];

    if (courses.length === 0) {
        coursesList.innerHTML = '<p style="padding: 20px; text-align: center;">No courses available at this time.</p>';
        return;
    }

    courses.forEach(course => {
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `
            <h4>${course.name}</h4>
            <p>${course.level}</p>
            <span class="course-duration">
                <i class="fas fa-clock"></i> ${course.duration}
            </span>
        `;
        coursesList.appendChild(courseItem);
    });
}

// ======================== FILTERS & SEARCH ========================
const jobSearch = document.getElementById('jobSearch');
const mentorSearch = document.getElementById('mentorSearch');
const resetFilters = document.querySelectorAll('.reset-filters');

if (jobSearch) {
    jobSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const jobCards = document.querySelectorAll('.job-card');

        jobCards.forEach(card => {
            const jobTitle = card.querySelector('h3').textContent.toLowerCase();
            const company = card.querySelector('.company-name').textContent.toLowerCase();
            const description = card.querySelector('.job-description').textContent.toLowerCase();

            if (jobTitle.includes(searchTerm) || company.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

if (mentorSearch) {
    mentorSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const mentorCards = document.querySelectorAll('.mentor-card');

        mentorCards.forEach(card => {
            const mentorName = card.querySelector('h3').textContent.toLowerCase();
            const title = card.querySelector('.title').textContent.toLowerCase();
            const skills = Array.from(card.querySelectorAll('.skill')).map(s => s.textContent.toLowerCase()).join(' ');

            if (mentorName.includes(searchTerm) || title.includes(searchTerm) || skills.includes(searchTerm)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Reset filters
resetFilters.forEach(btn => {
    btn.addEventListener('click', () => {
        // Reset checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(cb => cb.checked = false);
        
        // Reset search inputs
        if (jobSearch) jobSearch.value = '';
        if (mentorSearch) mentorSearch.value = '';
        
        // Reset salary inputs
        document.querySelectorAll('input[type="number"]').forEach(input => input.value = '');
        
        // Show all cards
        document.querySelectorAll('.job-card, .mentor-card').forEach(card => {
            card.style.display = '';
        });
    });
});

// ======================== SORT FUNCTIONALITY ========================
const sortSelects = document.querySelectorAll('#sort');

sortSelects.forEach(select => {
    select.addEventListener('change', (e) => {
        const sortValue = e.target.value;
        const isJobsPage = document.querySelector('.jobs-grid');

        if (isJobsPage) {
            sortJobs(sortValue);
        } else {
            sortMentors(sortValue);
        }
    });
});

function sortJobs(sortValue) {
    const jobCards = Array.from(document.querySelectorAll('.job-card'));
    const jobsGrid = document.querySelector('.jobs-grid');

    jobCards.sort((a, b) => {
        switch (sortValue) {
            case 'Most Relevant':
                return a.querySelector('h3').textContent.localeCompare(b.querySelector('h3').textContent);
            case 'Salary (High to Low)':
                const salaryA = parseInt(b.querySelector('.salary-range').textContent.split('-')[1].trim());
                const salaryB = parseInt(a.querySelector('.salary-range').textContent.split('-')[1].trim());
                return salaryA - salaryB;
            case 'Salary (Low to High)':
                const salaryMinA = parseInt(a.querySelector('.salary-range').textContent.split('-')[0].replace(/\D/g, ''));
                const salaryMinB = parseInt(b.querySelector('.salary-range').textContent.split('-')[0].replace(/\D/g, ''));
                return salaryMinA - salaryMinB;
            default: // Most Recent
                return 0;
        }
    });

    jobCards.forEach(card => jobsGrid.appendChild(card));
}

function sortMentors(sortValue) {
    const mentorCards = Array.from(document.querySelectorAll('.mentor-card'));
    const mentorsGrid = document.querySelector('.mentors-grid');

    mentorCards.sort((a, b) => {
        switch (sortValue) {
            case 'Highest Rated':
                const ratingA = parseFloat(b.querySelector('.rating span').textContent);
                const ratingB = parseFloat(a.querySelector('.rating span').textContent);
                return ratingA - ratingB;
            case 'Price (Low to High)':
                const priceA = parseInt(a.querySelector('.amount').textContent);
                const priceB = parseInt(b.querySelector('.amount').textContent);
                return priceA - priceB;
            case 'Price (High to Low)':
                const priceMaxA = parseInt(b.querySelector('.amount').textContent);
                const priceMaxB = parseInt(a.querySelector('.amount').textContent);
                return priceMaxA - priceMaxB;
            default: // Most Popular
                return 0;
        }
    });

    mentorCards.forEach(card => mentorsGrid.appendChild(card));
}

// ======================== SAVE JOBS ========================
const saveJobBtns = document.querySelectorAll('.save-job');

saveJobBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('saved');
        
        if (this.classList.contains('saved')) {
            this.style.color = '#ef4444';
            alert('Job saved to your favorites!');
        } else {
            this.style.color = '#d1d5db';
            alert('Job removed from favorites.');
        }
    });
});

// ======================== LOAD MORE ========================
const loadMoreBtns = document.querySelectorAll('.load-more-btn');

loadMoreBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Loading more items...');
        // In a real app, this would load more items from the server
    });
});

console.log('Marketplace initialized successfully!');
