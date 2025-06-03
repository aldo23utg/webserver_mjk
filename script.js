/* ==========================================
   JAVASCRIPT UNTUK PORTFOLIO WEBSITE
   ========================================== */

// Data anggota tim - Ganti dengan data sebenarnya
const teamMembers = [
    {
        id: 1,
        name: "Ahmad Desvaldo Putra Surya",
        nim: "1462300184",
        jurusan: "Teknik Informatika",
        angkatan: "2023",
        email: "aldo.untag23@gmail.com",
        phone: "+62 812-4990-1668",
        alamat: "Surabaya, Jawa Timur",
        hobi: "Programming",
        keahlian: "Web Development & Network",
        photo: "assets/fotodiri1.jpg", // Ganti dengan nama file foto sebenarnya
        socialMedia: {
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            github: "https://github.com/",
        },
        bio: "Mahasiswa Teknik Informatika yang passionate dalam web development dan Jaringan."
    },
    {
        id: 2,
        name: "Ristyo Ahmad Ramadani",
        nim: "1462300178",
        jurusan: "Teknik Informatika",
        angkatan: "2023",
        email: "ristyod@gmail.com",
        phone: "+62 878-5494-7431",
        alamat: "Sidoarjo, Jawa Timur",
        hobi: "Programming",
        keahlian: "Web Development & Network",
        photo: "assets/fotodiri3.jpg", // Ganti dengan nama file foto sebenarnya
        socialMedia: {
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            github: "https://github.com/",
        },
        bio: "Mahasiswa Teknik Informatika yang passionate dalam web development dan Jaringan."
    },
    {
        id: 3,
        name: "John Inovat Djarfi Sough",
        nim: "1462300186",
        jurusan: "Teknik Informatika",
        angkatan: "2023",
        email: "jrjohn417@gmail.com",
        phone: "+62 895-2289-9777",
        alamat: "Surabaya, Jawa Timur",
        hobi: "Programming",
        keahlian: "Web Development & Network",
        photo: "assets/fotodiri2.jpg", // Ganti dengan nama file foto sebenarnya
        socialMedia: {
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            github: "https://github.com/",
        },
        bio: "Mahasiswa Teknik Informatika yang passionate dalam web development dan Jaringan."
    },
    {
        id: 4,
        name: "Muhammad Anton Bahrul",
        nim: "1462300011",
        jurusan: "Teknik Informatika",
        angkatan: "2023",
        email: "antonbahrul225@gmail.com",
        phone: "+62 815-7891-2345",
        alamat: "Surabaya, Jawa Timur",
        hobi: "Programming",
        keahlian: "Web Development & Network",
        photo: "assets/fotodiri4.jpg", // Ganti dengan nama file foto sebenarnya
        socialMedia: {
            instagram: "https://www.instagram.com/",
            linkedin: "https://www.linkedin.com/",
            github: "https://github.com/",
        },
        bio: "Mahasiswa Teknik Informatika yang passionate dalam web development dan Jaringan."
    }
];

/* ==========================================
   FUNGSI UNTUK INISIALISASI WEBSITE
   ========================================== */

// Fungsi yang dijalankan ketika DOM sudah loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
});

// Inisialisasi utama website
function initializeWebsite() {
    console.log('🚀 Initializing Portfolio Website...');
    
    // Generate team cards
    generateTeamCards();
    
    // Setup smooth scrolling untuk navigation
    setupSmoothScrolling();
    
    // Setup navbar scroll effect
    setupNavbarScrollEffect();
    
    // Setup modal functionality
    setupModalFunctionality();
    
    // Setup lazy loading untuk gambar
    setupLazyLoading();
    
    console.log('✅ Portfolio Website initialized successfully!');
}

/* ==========================================
   FUNGSI UNTUK GENERATE TEAM CARDS
   ========================================== */

function generateTeamCards() {
    const teamGrid = document.getElementById('team-grid');
    
    if (!teamGrid) {
        console.error('❌ Team grid element not found!');
        return;
    }
    
    // Clear existing content
    teamGrid.innerHTML = '';
    
    // Generate card untuk setiap member
    teamMembers.forEach((member, index) => {
        const card = createTeamCard(member, index);
        teamGrid.appendChild(card);
    });
    
    console.log(`✅ Generated ${teamMembers.length} team cards`);
}

// Fungsi untuk membuat card individual
function createTeamCard(member, index) {
    const col = document.createElement('div');
    col.className = 'col-lg-6 col-xl-3 col-md-6';
    
    // Delay animation untuk efek masuk berurutan
    const animationDelay = index * 0.2;
    
    col.innerHTML = `
        <div class="card team-card h-100" style="animation-delay: ${animationDelay}s">
            <div class="card-body">
                <!-- Profile Image -->
                <div class="profile-img-container">
                    <img src="${member.photo}" 
                         alt="Foto ${member.name}" 
                         class="profile-img"
                         onerror="handleImageError(this)"
                         loading="lazy">
                </div>
                
                <!-- Member Info -->
                <h5 class="member-name">${member.name}</h5>
                <p class="member-nim">NIM: ${member.nim}</p>
                
                <div class="member-info">
                    <p><i class="fas fa-graduation-cap text-primary me-2"></i>${member.jurusan}</p>
                    <p><i class="fas fa-calendar text-primary me-2"></i>Angkatan ${member.angkatan}</p>
                </div>
                
                <!-- Social Media Links -->
                <div class="social-links">
                    ${generateSocialLinks(member.socialMedia)}
                </div>
                
                <!-- Detail Button -->
                <button class="btn btn-detail" onclick="showMemberDetail(${member.id})">
                    <i class="fas fa-user me-2"></i>Lihat Detail
                </button>
            </div>
        </div>
    `;
    
    return col;
}

// Fungsi untuk generate social media links
function generateSocialLinks(socialMedia) {
    let links = '';
    
    // Instagram
    if (socialMedia.instagram) {
        links += `<a href="${socialMedia.instagram}" target="_blank" class="social-link instagram" title="Instagram">
                    <i class="fab fa-instagram"></i>
                  </a>`;
    }
    
    // LinkedIn
    if (socialMedia.linkedin) {
        links += `<a href="${socialMedia.linkedin}" target="_blank" class="social-link linkedin" title="LinkedIn">
                    <i class="fab fa-linkedin-in"></i>
                  </a>`;
    }
    
    // GitHub
    if (socialMedia.github) {
        links += `<a href="${socialMedia.github}" target="_blank" class="social-link github" title="GitHub">
                    <i class="fab fa-github"></i>
                  </a>`;
    }
    
    
    return links;
}

/* ==========================================
   FUNGSI UNTUK MODAL DETAIL MEMBER
   ========================================== */

// Fungsi untuk menampilkan detail member dalam modal
function showMemberDetail(memberId) {
    const member = teamMembers.find(m => m.id === memberId);
    
    if (!member) {
        console.error('❌ Member not found with ID:', memberId);
        return;
    }
    
    // Update modal title
    const modalTitle = document.getElementById('modalTitle');
    modalTitle.textContent = `Profil ${member.name}`;
    
    // Update modal body
    const modalBody = document.getElementById('modalBody');
    modalBody.innerHTML = generateModalContent(member);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('memberModal'));
    modal.show();
    
    console.log(`👤 Showing detail for: ${member.name}`);
}

// Fungsi untuk generate konten modal
function generateModalContent(member) {
    return `
        <div class="modal-profile-section">
            <img src="${member.photo}" 
                 alt="Foto ${member.name}" 
                 class="modal-profile-img"
                 onerror="handleImageError(this)">
            <h3 class="text-primary mb-2">${member.name}</h3>
            <p class="lead text-muted">${member.bio}</p>
        </div>
        
        <div class="modal-info-grid">
            <div class="info-item">
                <div class="info-label">
                    <i class="fas fa-id-card me-2"></i>NIM
                </div>
                <div class="info-value">${member.nim}</div>
            </div>
            
            <div class="info-item">
                <div class="info-label">
                    <i class="fas fa-graduation-cap me-2"></i>Jurusan
                </div>
                <div class="info-value">${member.jurusan}</div>
            </div>
            
            <div class="info-item">
                <div class="info-label">
                    <i class="fas fa-calendar me-2"></i>Angkatan
                </div>
                <div class="info-value">${member.angkatan}</div>
            </div>
            
            <div class="info-item">
                <div class="info-label">
                    <i class="fas fa-envelope me-2"></i>Email
                </div>
                <div class="info-value">
                    <a href="mailto:${member.email}" class="text-decoration-none">${member.email}</a>
                </div>
            </div>
            
            <div class="info-item">
                <div class="info-label">
                    <i class="fas fa-phone me-2"></i>Telepon
                </div>
                <div class="info-value">${member.phone}</div>
            </div>
            
            <div class="info-item">
                <div class="info-label">
                    <i class="fas fa-map-marker-alt me-2"></i>Alamat
                </div>
                <div class="info-value">${member.alamat}</div>
            </div>
            
            <div class="info-item">
                <div class="info-label">
                    <i class="fas fa-heart me-2"></i>Hobi
                </div>
                <div class="info-value">${member.hobi}</div>
            </div>
            
            <div class="info-item">
                <div class="info-label">
                    <i class="fas fa-code me-2"></i>Keahlian
                </div>
                <div class="info-value">${member.keahlian}</div>
            </div>
        </div>
        
        <div class="text-center mt-4">
            <h5 class="text-primary mb-3">Connect with me</h5>
            <div class="social-links">
                ${generateSocialLinks(member.socialMedia)}
            </div>
        </div>
    `;
}

/* ==========================================
   FUNGSI UNTUK SMOOTH SCROLLING
   ========================================== */

function setupSmoothScrolling() {
    // Get all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Offset untuk navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    console.log('✅ Smooth scrolling setup completed');
}

/* ==========================================
   FUNGSI UNTUK NAVBAR SCROLL EFFECT
   ========================================== */

function setupNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });
    
    console.log('✅ Navbar scroll effect setup completed');
}

/* ==========================================
   FUNGSI UNTUK MODAL FUNCTIONALITY
   ========================================== */

function setupModalFunctionality() {
    const modal = document.getElementById('memberModal');
    
    // Event listener untuk ketika modal ditutup
    modal.addEventListener('hidden.bs.modal', function() {
        console.log('👤 Member detail modal closed');
    });
    
    // Event listener untuk ketika modal dibuka
    modal.addEventListener('shown.bs.modal', function() {
        console.log('👤 Member detail modal opened');
    });
    
    console.log('✅ Modal functionality setup completed');
}

/* ==========================================
   FUNGSI UNTUK LAZY LOADING GAMBAR
   ========================================== */

function setupLazyLoading() {
    // Intersection Observer untuk lazy loading
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.remove('img-loading');
                observer.unobserve(img);
            }
        });
    });
    
    // Observe semua gambar yang perlu lazy load
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.classList.add('img-loading');
        imageObserver.observe(img);
    });
    
    console.log('✅ Lazy loading setup completed');
}

/* ==========================================
   FUNGSI UNTUK ERROR HANDLING GAMBAR
   ========================================== */

// Fungsi untuk handle error ketika gambar tidak ditemukan
function handleImageError(img) {
    // Set placeholder image jika gambar asli tidak ditemukan
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjVGNUY1Ii8+CjxjaXJjbGUgY3g9IjEwMCIgY3k9IjgwIiByPSIzMCIgZmlsbD0iI0NDQ0NDQyIvPgo8cGF0aCBkPSJNNzAgMTIwSDEzMEwxMjAgMTQwSDgwTDcwIDEyMFoiIGZpbGw9IiNDQ0NDQ0MiLz4KPHRleHQgeD0iMTAwIiB5PSIxNzAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5OTk5OTkiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxMiI+Rm90byBUaWRhayBEaXRlbXVrYW48L3RleHQ+Cjwvc3ZnPgo=';
    img.alt = 'Foto tidak ditemukan';
    
    console.warn('⚠️ Image not found, using placeholder');
}

/* ==========================================
   FUNGSI UTILITY TAMBAHAN
   ========================================== */

// Fungsi untuk menambah member baru (untuk development)
function addNewMember(memberData) {
    // Validasi data member
    if (!memberData.name || !memberData.nim || !memberData.jurusan) {
        console.error('❌ Invalid member data');
        return false;
    }
    
    // Generate ID baru
    const newId = Math.max(...teamMembers.map(m => m.id)) + 1;
    memberData.id = newId;
    
    // Tambah ke array
    teamMembers.push(memberData);
    
    // Regenerate cards
    generateTeamCards();
    
    console.log(`✅ New member added: ${memberData.name}`);
    return true;
}

// Fungsi untuk update data member
function updateMember(memberId, updatedData) {
    const memberIndex = teamMembers.findIndex(m => m.id === memberId);
    
    if (memberIndex === -1) {
        console.error('❌ Member not found with ID:', memberId);
        return false;
    }
    
    // Update data
    teamMembers[memberIndex] = { ...teamMembers[memberIndex], ...updatedData };
    
    // Regenerate cards
    generateTeamCards();
    
    console.log(`✅ Member updated: ${teamMembers[memberIndex].name}`);
    return true;
}

// Fungsi untuk hapus member
function removeMember(memberId) {
    const memberIndex = teamMembers.findIndex(m => m.id === memberId);
    
    if (memberIndex === -1) {
        console.error('❌ Member not found with ID:', memberId);
        return false;
    }
    
    const removedMember = teamMembers.splice(memberIndex, 1)[0];
    
    // Regenerate cards
    generateTeamCards();
    
    console.log(`✅ Member removed: ${removedMember.name}`);
    return true;
}

// Fungsi untuk search member
function searchMember(query) {
    const lowercaseQuery = query.toLowerCase();
    return teamMembers.filter(member => 
        member.name.toLowerCase().includes(lowercaseQuery) ||
        member.nim.includes(query) ||
        member.jurusan.toLowerCase().includes(lowercaseQuery)
    );
}

/* ==========================================
   EVENT LISTENERS TAMBAHAN
   ========================================== */

// Event listener untuk resize window
window.addEventListener('resize', function() {
    // Bisa ditambahkan logic untuk responsive adjustments
    console.log('📱 Window resized');
});

// Event listener untuk scroll
window.addEventListener('scroll', function() {
    // Bisa ditambahkan parallax effects atau scroll animations
    const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    // Update progress bar jika diperlukan
    // console.log(`Scroll progress: ${scrollPercentage.toFixed(2)}%`);
});

// Event listener untuk keyboard navigation
document.addEventListener('keydown', function(e) {
    // ESC key untuk tutup modal
    if (e.key === 'Escape') {
        const modal = bootstrap.Modal.getInstance(document.getElementById('memberModal'));
        if (modal) {
            modal.hide();
        }
    }
});

/* ==========================================
   EXPORT FUNCTIONS (jika diperlukan)
   ========================================== */

// Jika menggunakan modules, export fungsi-fungsi yang diperlukan
// export { addNewMember, updateMember, removeMember, searchMember };