$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - 200;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 500, 'linear')
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_TTDmetQLYgWCLzHTDgqxm");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Ayush Kumar Sharma";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ['DevOps Engineer', 'DevSecOps Specialist', 'Cloud Infrastructure', 'CI/CD Automation', 'Infrastructure as Code (IaC)', 'Containerization with Docker & Kubernetes'],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});

// <!-- typed js effect ends -->

// Curated metadata dictionary for professional portfolio descriptions & categorization
const CURATED_PROJECT_METADATA = {
    "AKA-AI-Studio": {
        title: "AKA AI Studio",
        desc: "Interactive AI workspace platform built for prototyping agentic workflows, testing custom prompts, and integrating multi-modal LLMs.",
        category: "ai-ml",
        featured: true
    },
    "CLOUD-BASED-ONLINE-VOTING-SYSTEM": {
        title: "Cloud-Based Online Voting System",
        desc: "Cloud-native secure voting application featuring encrypted voter authentication, tamper-proof ballot processing, and real-time audit logs.",
        category: "devops-cloud",
        featured: true
    },
    "Lecture-Voice-to-Notes-Generator": {
        title: "Lecture Voice to Notes Generator",
        desc: "Automated AI speech processing utility that transcribes spoken lecture audio into structured, summarized study notes using speech-to-text NLP models.",
        category: "ai-ml",
        featured: true
    },
    "Navbharat-Public-School": {
        title: "Navbharat Public School Portal",
        desc: "Modern, responsive institutional web application offering dynamic course highlights, announcement feeds, and user-friendly navigation.",
        category: "web",
        featured: true
    },
    "AI-Powered-Medical-Assistant-Chatbot": {
        title: "AI Medical Assistant Bot",
        desc: "Intelligent conversational chatbot engineered to answer preliminary medical queries, analyze symptoms, and offer health guidelines.",
        category: "ai-ml",
        featured: true
    },
    "Weather-Forecasting-Climate-Analysis-System": {
        title: "Weather Forecasting & Climate Analytics",
        desc: "Real-time climate monitoring web application integrating live weather APIs with visual data graphs for temperature and precipitation analysis.",
        category: "web",
        featured: true
    },
    "Quiz-LeadBoard-Flask-Powered-General-Knowledge-Quiz-App": {
        title: "Flask Quiz & Leaderboard Engine",
        desc: "Full-stack web application powered by Flask, featuring automated test scoring, dynamic player leaderboards, and user session management.",
        category: "python",
        featured: true
    },
    "Bussines-app": {
        title: "Enterprise Business Management App",
        desc: "Modern workflow management application designed for tracking business operations, client invoicing, and key performance analytics.",
        category: "typescript"
    },
    "Crop_Guru": {
        title: "Crop Guru - Smart Agriculture System",
        desc: "Agri-tech advisory platform analyzing soil chemistry and weather data to provide data-driven crop recommendations for farmers.",
        category: "python"
    },
    "Cloud-Attendance-system": {
        title: "Cloud Facial Recognition Attendance System",
        desc: "Automated biometric logging solution leveraging computer vision and cloud storage for frictionless attendance tracking.",
        category: "devops-cloud"
    },
    "Setting-up-a-small-network-and-configuring-network-devices.": {
        title: "Small Network Architecture & Cisco Topology",
        desc: "Comprehensive computer network design featuring Cisco router configurations, subnetting plans, and switch topology setups.",
        category: "devops-cloud"
    },
    "Configuring-and-Securing-a-Network-Infrastructure": {
        title: "Network Infrastructure Hardening & Security",
        desc: "Hands-on network security blueprint implementing VLAN segmentations, firewall policy rules, and secure SSH administrative access.",
        category: "devops-cloud"
    },
    "Cybersecurity_Internship_Projects_PinnacleLabs": {
        title: "Cybersecurity & Vulnerability Assessment Suite",
        desc: "Collection of security scripts, automated port scanners, and penetration testing documentation developed during Pinnacle Labs internship.",
        category: "devops-cloud"
    },
    "Object_Detection": {
        title: "Real-Time Object Detection Engine",
        desc: "Computer vision application implementing YOLO and OpenCV for fast multi-object detection and real-time bounding box visualization.",
        category: "ai-ml"
    },
    "Stock_Price_Prediction": {
        title: "Stock Market Trend Prediction Model",
        desc: "Financial analytics tool using Recurrent Neural Networks (LSTM) to model historical stock trends and forecast future prices.",
        category: "ai-ml"
    },
    "Streamlit-Chatbot-Collection": {
        title: "Streamlit Conversational AI Suite",
        desc: "Versatile collection of custom chatbots built with Streamlit, showcasing prompt templates, stateful chat memory, and LLM integrations.",
        category: "ai-ml"
    },
    "Fashion-Classification": {
        title: "Fashion Item Image Classifier",
        desc: "Deep learning neural network built with TensorFlow/Keras to classify fashion apparel images into 10 distinct categories.",
        category: "ai-ml"
    },
    "Convolutional-Neural-Network-CNN-Network": {
        title: "Convolutional Neural Network Architecture",
        desc: "Deep learning research repository demonstrating CNN layer design, feature map extraction, and hyperparameter tuning for image classification.",
        category: "ai-ml"
    },
    "TextClassifier-ML-NLP": {
        title: "NLP Text Classification & Sentiment Analysis",
        desc: "Natural language processing model utilizing TF-IDF vectorization and Naive Bayes for automated sentiment classification.",
        category: "ai-ml"
    },
    "Sufri_Brews_Cafe": {
        title: "Sufri Brews Cafe Web Application",
        desc: "Aesthetic web application for a modern cafe, featuring responsive food menus, online table booking, and smooth CSS animations.",
        category: "web"
    },
    "Cloud_Based-Bus-System": {
        title: "Cloud Transit & Bus Tracking System",
        desc: "Cloud-connected public transit application allowing commuters to view real-time bus locations, schedule updates, and seat status.",
        category: "devops-cloud"
    },
    "CampusOs": {
        title: "CampusOS Smart University Portal",
        desc: "Centralized campus management portal facilitating student course registrations, academic notice boards, and study resource distribution.",
        category: "web"
    },
    "Graph-Greener": {
        title: "Graph Greener Environmental Dashboard",
        desc: "Data-driven sustainability analytics dashboard visualizing carbon footprint reductions, energy efficiency, and eco-metrics.",
        category: "web"
    },
    "wanderlust": {
        title: "Wanderlust Travel & Destination Guide",
        desc: "Interactive travel discovery platform featuring curated location guides, user ratings, and itinerary building capabilities.",
        category: "web"
    },
    "sandeep-traders": {
        title: "Sandeep Traders Commercial Management",
        desc: "Tailored business inventory management solution built to streamline local trader stock records, sales logs, and customer invoicing.",
        category: "python"
    },
    "90DaysOfDevOps": {
        title: "90 Days of DevOps Hands-on Practice",
        desc: "Comprehensive learning documentation detailing 90 days of DevOps projects across Linux administration, Docker, Kubernetes, and CI/CD pipelines.",
        category: "devops-cloud"
    },
    "Gemini_AI": {
        title: "Google Gemini AI Multi-Modal Application",
        desc: "Integration wrapper leveraging Google Gemini API for multi-modal text generation, image analysis, and conversational AI tasks.",
        category: "ai-ml"
    },
    "-Gemini-AI-Chatbots-Collection-using-Streamlit": {
        title: "Gemini AI Chatbot Collection",
        desc: "Streamlit-powered conversational AI collection utilizing Google Gemini models for multi-turn domain-specific Q&A.",
        category: "ai-ml"
    },
    "Numpy_Tutorial": {
        title: "NumPy Data Science & Matrix Operations",
        desc: "Hands-on tutorial repository covering essential NumPy array manipulations, linear algebra operations, and scientific computing methods.",
        category: "python"
    },
    "Customer_Classification": {
        title: "Customer Segmentation & Behavior Classifier",
        desc: "Machine learning clustering project applying K-Means and decision trees to categorize retail customers based on purchasing trends.",
        category: "ai-ml"
    },
    "Food-ordering-system": {
        title: "Python Food Ordering & Billing System",
        desc: "Interactive ordering system for restaurants featuring menu customization, automated invoice generation, and order history logs.",
        category: "python"
    },
    "Chatbot-for-Streamlit": {
        title: "Streamlit Assistant Chatbot",
        desc: "Lightweight conversational assistant built with Streamlit providing rapid Q&A capabilities for user documentation.",
        category: "ai-ml"
    },
    "OpenCV-Basics---Image-Processing-with-Python": {
        title: "OpenCV Computer Vision & Image Processing",
        desc: "Hands-on computer vision repository demonstrating image filtering, edge detection, color space conversions, and contours.",
        category: "python"
    },
    "Recurrent-Neural-Network-RNN-": {
        title: "Recurrent Neural Network (RNN & GRU) Model",
        desc: "Deep learning notebook implementing RNN and GRU sequential architectures for time-series forecasting and sequence modeling.",
        category: "ai-ml"
    },
    "Ankush--Portfolio": {
        title: "Responsive Developer Portfolio Template",
        desc: "Sleek frontend portfolio layout template featuring responsive project showcases, contact forms, and animated UI components.",
        category: "web"
    },
    "portfolio": {
        title: "Ayush's Developer Portfolio Website",
        desc: "Personal developer portfolio website showcasing DevOps, DevSecOps, Cloud Security, and Cybersecurity expertise.",
        category: "web"
    },
    "Ayush-Oops-07": {
        title: "GitHub Special Profile README",
        desc: "Personalized GitHub profile configuration showcasing technical stack, badges, open-source metrics, and active repositories.",
        category: "python"
    }
};

// Helper: Language Icon Mapping
function getLanguageIcon(language) {
    if (!language) return 'fas fa-laptop-code';
    const lang = language.toLowerCase();
    switch (lang) {
        case 'python': return 'fab fa-python';
        case 'javascript': return 'fab fa-js';
        case 'typescript': return 'fab fa-js-square';
        case 'html': return 'fab fa-html5';
        case 'css': return 'fab fa-css3-alt';
        case 'java': return 'fab fa-java';
        case 'shell':
        case 'bash': return 'fas fa-terminal';
        case 'dockerfile': return 'fab fa-docker';
        case 'jupyter notebook': return 'fas fa-book';
        case 'c':
        case 'c++': return 'fas fa-code';
        case 'php': return 'fab fa-php';
        default: return 'fas fa-code';
    }
}

// Helper: Date Formatting
function formatDate(isoString) {
    if (!isoString) return '';
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return '';
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric'
    });
}

// Helper: Skeleton Loaders
function renderProjectsSkeleton(container, count = 6) {
    if (!container) return;
    let skeletonHTML = "";
    for (let i = 0; i < count; i++) {
        skeletonHTML += `
        <div class="project-card skeleton-card">
            <div class="card-header">
                <div class="skeleton-box skeleton-icon"></div>
                <div class="skeleton-box skeleton-badge"></div>
            </div>
            <div class="skeleton-box skeleton-title"></div>
            <div class="skeleton-box skeleton-desc"></div>
            <div class="skeleton-box skeleton-desc-short"></div>
            <div class="card-meta">
                <div class="skeleton-box skeleton-badge"></div>
                <div class="skeleton-box skeleton-badge"></div>
            </div>
        </div>`;
    }
    container.innerHTML = skeletonHTML;
}

// Helper: Get enriched project metadata for a repo
function getEnrichedRepoData(repo) {
    const rawName = repo.name || 'Repository';
    const meta = CURATED_PROJECT_METADATA[rawName] || {};
    
    // Display Title
    const title = meta.title || rawName.replace(/[-_]/g, ' ');
    
    // Description: Preference order: Curated desc > Repo desc > Fallback
    let description = meta.desc;
    if (!description && repo.description && repo.description.trim() && repo.description.trim() !== '.') {
        description = repo.description.trim();
    }
    if (!description) {
        description = `An open-source project focusing on modern ${repo.language || 'software development'} implementation and best practices.`;
    }

    const language = repo.language || 'Code / Tech';
    const langIcon = getLanguageIcon(repo.language);
    const updatedDate = formatDate(repo.updated_at);
    const repoUrl = repo.html_url || `https://github.com/Ayush-Oops-07/${rawName}`;
    const isFeatured = meta.featured || false;
    const category = meta.category || 'all';

    return {
        rawName,
        title,
        description,
        language,
        langIcon,
        updatedDate,
        repoUrl,
        isFeatured,
        category
    };
}

// Main GitHub Projects Loader for Home Page (Displays Top 6-7 Featured Projects)
async function loadGitHubProjects(username = "Ayush-Oops-07") {
    const projectsContainer = document.querySelector("#work .box-container");
    if (!projectsContainer) return;

    // Render skeleton while loading
    renderProjectsSkeleton(projectsContainer, 6);

    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=100`);
        if (!response.ok) {
            throw new Error(`GitHub API HTTP ${response.status}`);
        }
        const repos = await response.json();
        
        // Filter out profile README repository
        const validRepos = repos.filter(r => r.name !== username);

        // Sort: Featured first, then by updated date
        validRepos.sort((a, b) => {
            const metaA = CURATED_PROJECT_METADATA[a.name] || {};
            const metaB = CURATED_PROJECT_METADATA[b.name] || {};
            if (metaA.featured && !metaB.featured) return -1;
            if (!metaA.featured && metaB.featured) return 1;
            return new Date(b.updated_at) - new Date(a.updated_at);
        });

        // Select top 7 featured projects for homepage
        const featuredRepos = validRepos.slice(0, 7);

        if (!featuredRepos || featuredRepos.length === 0) {
            projectsContainer.innerHTML = `
            <div class="project-error-state">
                <i class="fas fa-folder-open"></i>
                <p>No public repositories found for ${username}.</p>
                <a href="https://github.com/${username}" class="github-profile-btn" target="_blank" rel="noopener noreferrer">Visit GitHub Profile</a>
            </div>`;
            return;
        }

        let projectsHTML = "";
        featuredRepos.forEach(repo => {
            const p = getEnrichedRepoData(repo);

            projectsHTML += `
            <div class="project-card">
              <div class="card-header">
                <div class="card-icon"><i class="${p.langIcon}"></i></div>
                <span class="tech-badge">${p.language}</span>
              </div>
              <h3 class="card-title">${p.title}</h3>
              <p class="card-desc">${p.description}</p>
              <div class="card-meta">
                <span class="card-updated"><i class="far fa-calendar-alt"></i> ${p.updatedDate ? 'Updated ' + p.updatedDate : ''}</span>
                <a href="${p.repoUrl}" class="github-btn" target="_blank" rel="noopener noreferrer">
                  <i class="fab fa-github"></i> View on GitHub
                </a>
              </div>
            </div>`;
        });

        projectsContainer.innerHTML = projectsHTML;

        // Initialize tilt effect if VanillaTilt is available
        if (typeof VanillaTilt !== 'undefined') {
            VanillaTilt.init(document.querySelectorAll("#work .project-card"), {
                max: 10,
                speed: 400,
                glare: false
            });
        }

    } catch (error) {
        console.error("Failed to fetch GitHub repositories:", error);
        projectsContainer.innerHTML = `
        <div class="project-error-state">
            <i class="fas fa-exclamation-triangle"></i>
            <p>Unable to load GitHub repositories dynamically at this time.</p>
            <div class="error-actions">
                <button onclick="loadGitHubProjects('${username}')" class="retry-btn"><i class="fas fa-redo"></i> Retry</button>
                <a href="https://github.com/${username}" class="github-profile-btn" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i> View Profile on GitHub</a>
            </div>
        </div>`;
    }
}

// Trigger GitHub fetch on DOM ready
document.addEventListener("DOMContentLoaded", () => {
    loadGitHubProjects("Ayush-Oops-07");
});

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

// Start of Tawk.to Live Chat
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/68cee152f6dadc19215a5ade/1j5k20c3j';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();
// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});
// === Initialize Swiper for Certifications Section ===
const certSwiper = new Swiper('.cert-swiper', {
  slidesPerView: 2,   // show 2 certificates at once
  spaceBetween: 20,   // space between them
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    // For mobile screens, fallback to 1 certificate
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
});


// Modal logic
/* ==== CERTIFICATE MODAL ==== */
  const certModal = document.getElementById("certModal");
  const certModalImg = document.getElementById("certModalImg");
  const certCaption = document.getElementById("certCaption");
  const certClose = certModal?.querySelector(".close");
  let lastFocused = null;

 /* ===== CERTIFICATE MODAL (robust) ===== */
(function () {
  const certModal = document.getElementById("certModal");
  const certModalImg = document.getElementById("certModalImg");
  const certCaption = document.getElementById("certCaption");
  const certClose = certModal?.querySelector(".close");
  let lastFocused = null;

  if (!certModal || !certModalImg || !certCaption) {
    // if modal DOM isn't present, stop silently
    return;
  }

  // Ensure modal is hidden and image cleared on load (prevents restore/open on refresh)
  window.addEventListener("load", () => {
    certModal.style.display = "none";
    certModalImg.src = "";
    certModalImg.alt = "";
    certCaption.innerHTML = "";
    // remove any hash that points to modal (defensive)
    if (window.location.hash && window.location.hash.toLowerCase().includes("certmodal")) {
      history.replaceState(null, null, window.location.pathname + window.location.search);
    }
  });

  // Utility: open only when valid src provided
  function openCertModal(src, title, desc, alt) {
    if (!src || src === "undefined") return; // guard: don't open without valid image src

    lastFocused = document.activeElement;
    certModalImg.src = src;
    certModalImg.alt = alt || title || "Certificate";
    certCaption.innerHTML = `<h3 style="margin:0 0 .25rem;">${(title||"")}</h3><p style="margin:0;color:#e8e8e8">${(desc||"")}</p>`;
    certModal.style.display = "flex";
    document.body.style.overflow = "hidden";
    certClose?.focus();
  }

  function closeCertModal() {
    certModal.style.display = "none";
    certModalImg.src = "";
    certModalImg.alt = "";
    certCaption.innerHTML = "";
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  // Attach click / keyboard listeners to both .cert-card and .cert-box
  const cards = document.querySelectorAll(".cert-card, .cert-box");
  cards.forEach(card => {
    // click only if user-initiated (prevents synthetic/auto triggers)
    card.addEventListener("click", function (e) {
      if (!e.isTrusted) return; // ignore programmatic events
      const src = card.dataset.full || card.querySelector("img")?.getAttribute("src");
      const title = card.dataset.title || card.querySelector("h3")?.innerText;
      const desc = card.dataset.desc || card.querySelector("p")?.innerText;
      const alt = card.querySelector("img")?.alt || title;
      openCertModal(src, title, desc, alt);
    });

    // keyboard activation (Enter / Space)
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const src = card.dataset.full || card.querySelector("img")?.getAttribute("src");
        const title = card.dataset.title || card.querySelector("h3")?.innerText;
        const desc = card.dataset.desc || card.querySelector("p")?.innerText;
        const alt = card.querySelector("img")?.alt || title;
        openCertModal(src, title, desc, alt);
      }
    });
  });

  // close handlers
  certClose?.addEventListener("click", closeCertModal);
  certModal.addEventListener("click", function (e) {
    if (e.target === certModal) closeCertModal();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && certModal.style.display === "flex") {
      closeCertModal();
    }
  });

  // image load/error handlers (user friendly)
  certModalImg.addEventListener("error", function () {
    // if image fails to load, show friendly message in caption
    certCaption.innerHTML = `<h3>Image not available</h3><p>The certificate image couldn't be loaded. Try again or check the file path.</p>`;
  });
  certModalImg.addEventListener("load", function () {
    // optional: nothing special, but keeps caption as set
  });

})();

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills-grid', { interval: 200 });
srtop.reveal('.skills-grid .skill-card', { interval: 150, delay: 200 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });
/* ============================================================
   NEW SKILLS SECTION — animated gradient progress bars
   Uses IntersectionObserver so bars fill from 0% -> target%
   only once, the first time the grid scrolls into view.
   Wrapped in its own IIFE to avoid polluting global scope /
   clashing with any existing variable names in this file.
============================================================= */
(function initSkillsAnimation() {
  const skillsGrid = document.getElementById("skillsGrid");
  if (!skillsGrid) return; // section not present on this page, nothing to do

  let hasAnimated = false;

  function animateSkillBars() {
    const items = skillsGrid.querySelectorAll(".skill-item");
    items.forEach((item, index) => {
      const fill = item.querySelector(".skill-fill");
      const percentLabel = item.querySelector(".skill-percent");
      if (!fill || !percentLabel) return;

      const target = parseInt(fill.getAttribute("data-percent"), 10) || 0;

      // stagger each bar slightly so the fills don't all animate in lockstep
      const startDelay = Math.min(index * 40, 600);

      window.setTimeout(() => {
        // trigger the CSS width transition
        fill.style.width = target + "%";

        // count-up the percentage text in sync with the fill animation
        const duration = 1400; // must match the CSS transition duration on .skill-fill
        const startTime = performance.now();

        function tick(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // ease-out for a natural deceleration toward the target number
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(eased * target);
          percentLabel.textContent = current + "%";

          if (progress < 1) {
            window.requestAnimationFrame(tick);
          } else {
            percentLabel.textContent = target + "%";
          }
        }
        window.requestAnimationFrame(tick);
      }, startDelay);
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          hasAnimated = true;
          animateSkillBars();
          observer.unobserve(entry.target); // animate only once
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(skillsGrid);
})();
