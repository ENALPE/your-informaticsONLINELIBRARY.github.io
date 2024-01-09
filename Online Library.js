document.addEventListener('DOMContentLoaded', function () {
    const bookContainer = document.querySelector(".book-container");

    const trendingBooks = [
        { title: "The Art of Programming", link: "https://example.com/book1" },
        { title: "Digital Revolution", link: "https://example.com/book2" },
        { title: "Data Science Essentials", link: "https://example.com/book3" },
        { title: "The Future of AI", link: "https://example.com/book4" },
        { title: "Web Development Masterclass", link: "https://example.com/book5" },
        { title: "Entrepreneurship Handbook", link: "https://example.com/book6" },
        { title: "History of Science", link: "https://example.com/book7" },
        { title: "Space Exploration Chronicles", link: "https://example.com/book8" },
        { title: "Mystery and Thrillers Collection", link: "https://example.com/book9" },
        { title: "AI in Everyday Life", link: "https://example.com/book10" }
    ];

    trendingBooks.slice(0, 10).forEach(book => {
        const bookElement = document.createElement("div");
        bookElement.innerHTML = `<h3>${book.title}</h3><a href="${book.link}" target="_blank">Read E-Book</a>`;
        bookElement.classList.add("trending-book");
        bookContainer.appendChild(bookElement);
    });

    const categoryEls = document.querySelectorAll(".category ul li");

    categoryEls.forEach(categoryEl => {
        categoryEl.addEventListener("click", event => {
            const clickedStrandCourse = event.target.dataset.subjects;
            const subjectList = event.target.dataset.subjectsList;

            document.getElementById("subjects").innerHTML = `<h2>Subjects for ${clickedStrandCourse}</h2>
                                                             <ul>${subjectList.split(',').map(subject => 
                                                             `<li data-subject="${subject}">
                                                                <a class="subject-link" href="#">${subject}</a>
                                                                <div class="lesson-content" style="display:none;">
                                                                    <h3>Lesson for ${subject}</h3>
                                                                    <p>Lesson content for ${subject} goes here.</p>
                                                                </div>
                                                             </li>`).join('')}</ul>`;
            
            const subjectLinks = document.querySelectorAll(".subject-link");
            subjectLinks.forEach(subjectLink => {
                subjectLink.addEventListener("click", toggleLessonContent);
            });
        });
    });

    const subjectsData = {
        'STEM': ['Math', 'Physics', 'Chemistry', 'Biology', 'Advanced Placement'],
        'ABM': ['Accountancy', 'Business Management', 'Marketing', 'Economics'],
        'HUMSS': ['History', 'Literature', 'Language', 'Philosophy', 'Political Science'],
        'TVL': ['Home Economics', 'Technology and Livelihood Education', 'Industrial Arts'],
        'Arts & Design': ['Music', 'Visual Arts', 'Theater Arts', 'Film and Media'],
        'BS IT': ['Programming Languages', 'Database Management', 'Networking', 'Web Development'],
        'BS CS': ['Algorithms', 'Data Structures', 'Software Engineering', 'Artificial Intelligence'],
        'BS MIS': ['Information Systems Management', 'Business Analysis', 'Project Management', 'Data Analytics'],
        'BS EE': ['Circuit Analysis', 'Electronics', 'Power Systems', 'Control Systems'],
        'BS Nursing': ['Anatomy and Physiology', 'Nursing Fundamentals', 'Pharmacology', 'Pathophysiology']
    };

    const subjectsSection = document.getElementById('subjects');
    const exploreButtons = document.querySelectorAll('.category ul li');

    exploreButtons.forEach(button => {
        button.addEventListener('click', function () {
            const courseStrand = this.getAttribute('data-subjects');
            const subjectsList = subjectsData[courseStrand];

            if (subjectsList) {
                displaySubjects(subjectsList);
            } else {
                console.error(`Subjects for ${courseStrand} not found`);
            }
        });
    });

    function displaySubjects(subjectsList) {
        subjectsSection.innerHTML = `<h2>Subjects</h2>
                                     <ul>${subjectsList.map(subject => 
                                     `<li data-subject="${subject}">
                                        <a class="subject-link" href="#">${subject}</a>
                                        <div class="lesson-content" style="display:none;">
                                            <h3>Lesson for ${subject}</h3>
                                            <p>Lesson content for ${subject} goes here.</p>
                                        </div>
                                     </li>`).join('')}</ul>`;
        
        const subjectLinks = document.querySelectorAll(".subject-link");
        subjectLinks.forEach(subjectLink => {
            subjectLink.addEventListener("click", toggleLessonContent);
        });
    }

    function toggleLessonContent(event) {
        const clickedSubject = event.target.closest('li').dataset.subject;
        const lessonContent = event.target.nextElementSibling;

        const allLessonContents = document.querySelectorAll(".lesson-content");
        allLessonContents.forEach(content => {
            if (content !== lessonContent && content.style.display !== "none") {
                content.style.display = "none";
            }
        });

        lessonContent.style.display = (lessonContent.style.display === "none") ? "block" : "none";
    }

    const aboutSection = document.getElementById('about');
    const aboutButton = document.getElementById('aboutButton');

    aboutButton.addEventListener('click', function () {
        toggleSectionVisibility(aboutSection);
    });

    function toggleSectionVisibility(section) {
        const currentDisplay = section.style.display;
        section.style.display = currentDisplay === 'none' ? 'block' : 'none';
    }
});