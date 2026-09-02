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
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Projects | Portfolio Jigar Sable";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });


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

// State Variables
let allReposList = [];
let activeCategoryFilter = "all";
let currentSearchQuery = "";

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
function renderProjectsSkeleton(container, count = 8) {
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

    // Detect language / category tags defensively
    let category = meta.category;
    if (!category) {
        const langLower = (repo.language || '').toLowerCase();
        if (langLower === 'python') category = 'python';
        else if (langLower === 'typescript' || langLower === 'javascript') category = 'typescript';
        else if (langLower === 'html' || langLower === 'css') category = 'web';
        else category = 'web';
    }

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

// Filter and Render Projects Grid
function filterAndRenderProjects() {
    const projectsContainer = document.querySelector(".work .box-container");
    if (!projectsContainer) return;

    let filtered = allReposList.filter(repo => {
        const p = repo._enriched;

        // 1. Category Filter
        let categoryMatch = true;
        if (activeCategoryFilter === "featured") {
            categoryMatch = p.isFeatured;
        } else if (activeCategoryFilter === "python") {
            categoryMatch = p.category === "python" || p.language.toLowerCase() === "python";
        } else if (activeCategoryFilter === "typescript") {
            categoryMatch = p.category === "typescript" || p.language.toLowerCase() === "typescript" || p.language.toLowerCase() === "javascript";
        } else if (activeCategoryFilter === "ai-ml") {
            categoryMatch = p.category === "ai-ml" || p.language.toLowerCase() === "jupyter notebook";
        } else if (activeCategoryFilter === "devops-cloud") {
            categoryMatch = p.category === "devops-cloud" || p.language.toLowerCase() === "dockerfile" || p.language.toLowerCase() === "shell";
        } else if (activeCategoryFilter === "web") {
            categoryMatch = p.category === "web" || p.language.toLowerCase() === "html" || p.language.toLowerCase() === "css";
        }

        // 2. Search Query Filter
        let searchMatch = true;
        if (currentSearchQuery) {
            const query = currentSearchQuery.toLowerCase();
            searchMatch = (
                p.title.toLowerCase().includes(query) ||
                p.rawName.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.language.toLowerCase().includes(query)
            );
        }

        return categoryMatch && searchMatch;
    });

    if (filtered.length === 0) {
        projectsContainer.innerHTML = `
        <div class="no-projects-found">
            <i class="fas fa-search-minus"></i>
            <p>No projects found matching "${currentSearchQuery || activeCategoryFilter}".</p>
            <button onclick="resetSearchAndFilters()" class="reset-search-btn">Reset Search & Filters</button>
        </div>`;
        return;
    }

    let projectsHTML = "";
    filtered.forEach(repo => {
        const p = repo._enriched;

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
        VanillaTilt.init(document.querySelectorAll(".project-card"), {
            max: 10,
            speed: 400,
            glare: false
        });
    }
}

// Reset Search and Filters
function resetSearchAndFilters() {
    activeCategoryFilter = "all";
    currentSearchQuery = "";

    const searchInput = document.getElementById("project-search");
    const clearBtn = document.getElementById("clear-search");
    if (searchInput) searchInput.value = "";
    if (clearBtn) clearBtn.style.display = "none";

    document.querySelectorAll(".filter-btn").forEach(btn => {
        if (btn.getAttribute("data-category") === "all") {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    });

    filterAndRenderProjects();
}

// Setup Event Listeners for Search and Filter Controls
function setupProjectControls() {
    // Filter Buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategoryFilter = btn.getAttribute("data-category") || "all";
            filterAndRenderProjects();
        });
    });

    // Search Input
    const searchInput = document.getElementById("project-search");
    const clearBtn = document.getElementById("clear-search");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            currentSearchQuery = e.target.value.trim();
            if (clearBtn) {
                clearBtn.style.display = currentSearchQuery ? "block" : "none";
            }
            filterAndRenderProjects();
        });
    }

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            if (searchInput) searchInput.value = "";
            currentSearchQuery = "";
            clearBtn.style.display = "none";
            filterAndRenderProjects();
        });
    }
}

// Main GitHub Projects Loader for Projects Page
async function loadGitHubProjects(username = "Ayush-Oops-07") {
    const projectsContainer = document.querySelector(".work .box-container");
    if (!projectsContainer) return;

    renderProjectsSkeleton(projectsContainer, 8);

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

        // Enrich repo objects
        allReposList = validRepos.map(repo => {
            repo._enriched = getEnrichedRepoData(repo);
            return repo;
        });

        setupProjectControls();
        filterAndRenderProjects();

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
// fetch projects end

// Start of Tawk.to Live Chat
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();
// End of Tawk.to Live Chat

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