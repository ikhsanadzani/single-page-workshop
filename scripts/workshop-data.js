/* ============================================================
   scripts/workshop-data.js
   Single Source of Truth — semua data workshop, kategori, paket
   ============================================================ */

'use strict';

// ============================================================
// 1. CATEGORIES
// ============================================================
const CATEGORIES = [
    {
        id: 'engineering',
        label: 'Engineering',
        desc: 'Linux, DevOps, CI/CD, Jaringan & Sistem',
        longDesc: 'Workshop Engineering Yuros dirancang untuk menghasilkan engineer yang kompeten dalam mengelola infrastruktur modern. Dari administrasi sistem Linux hingga orkestrasi container dan pipeline CI/CD — semua diajarkan oleh praktisi aktif industri dengan pendekatan hands-on dan studi kasus nyata yang langsung bisa diterapkan di tempat kerja.',
        highlights: ['Linux Administration', 'Container & Kubernetes', 'CI/CD Pipeline', 'Network Engineering', 'Shell Scripting & Automation'],
        icon: 'fa-screwdriver-wrench',
        gradient: 'linear-gradient(135deg,#1a1a2e,#0f3460)',
        color: '#6366f1',
        totalAlumni: 1240,
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'teknologi',
        label: 'Teknologi',
        desc: 'AI/ML, IoT, Cloud, Embedded Systems',
        longDesc: 'Masuki era teknologi terdepan bersama Yuros. Workshop Teknologi mencakup Machine Learning, Computer Vision, IoT, dan Cloud Computing — disampaikan dengan framework open source terkini dan proyek nyata yang dapat langsung diaplikasikan dalam konteks bisnis maupun riset.',
        highlights: ['Machine Learning & AI', 'Computer Vision', 'IoT & Embedded', 'Cloud Native', 'Big Data Processing'],
        icon: 'fa-microchip',
        gradient: 'linear-gradient(135deg,#1b4332,#2d6a4f)',
        color: '#10b981',
        totalAlumni: 980,
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'security',
        label: 'Security',
        desc: 'Ethical Hacking, Cryptography, PenTest',
        longDesc: 'Lindungi sistem digital dengan ilmu keamanan siber terkini. Workshop Security Yuros mencakup penetration testing, analisis malware, forensik digital, dan kriptografi — semua dalam koridor ethical dan legal untuk membangun profesional keamanan siber yang dibutuhkan industri.',
        highlights: ['Penetration Testing', 'Malware Analysis', 'Digital Forensics', 'Web App Security', 'Network & Wireless Security'],
        icon: 'fa-shield-halved',
        gradient: 'linear-gradient(135deg,#370617,#6a040f)',
        color: '#ef4444',
        totalAlumni: 760,
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'programming',
        label: 'Programming',
        desc: 'Python, Rust, Go, C/C++, Web Dev',
        longDesc: 'Kuasai bahasa pemrograman modern yang relevan di industri global. Workshop Programming Yuros mengajarkan Python, Rust, Go, dan C/C++ dengan fokus pada paradigma yang benar, performa, dan best practice yang digunakan di perusahaan teknologi terkemuka.',
        highlights: ['Python & Data Science', 'Rust Systems Programming', 'Go & Microservices', 'C/C++ Embedded', 'Full-Stack Web Development'],
        icon: 'fa-code',
        gradient: 'linear-gradient(135deg,#03045e,#0077b6)',
        color: '#0ea5e9',
        totalAlumni: 1580,
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'academic',
        label: 'Academic',
        desc: 'Riset, Data Science, Matematika, Paper',
        longDesc: 'Tingkatkan kualitas riset dan publikasi ilmiah bersama Yuros. Workshop Academic dirancang untuk mahasiswa, peneliti, dan dosen — mencakup metodologi riset, statistika, penulisan ilmiah dengan LaTeX, dan teknik algoritma untuk meningkatkan karier akademik secara signifikan.',
        highlights: ['Research Methodology', 'Statistics & Probability', 'LaTeX & Academic Writing', 'Algorithm Design', 'Discrete Mathematics'],
        icon: 'fa-graduation-cap',
        gradient: 'linear-gradient(135deg,#3d0066,#7b2d8b)',
        color: '#a855f7',
        totalAlumni: 640,
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'design',
        label: 'Design & Creative',
        desc: 'UI/UX, Tipografi, Open Source Design Tools',
        longDesc: 'Ciptakan desain digital yang memukau dengan tools open source dan prinsip desain modern. Workshop Design & Creative Yuros mengajarkan UI/UX, Design System, Motion Design, dan visual storytelling yang menjadi fondasi karier desainer digital profesional.',
        highlights: ['UI/UX Design with Figma', 'Open Source Tools (Inkscape, GIMP)', 'Design Systems', 'Motion & CSS Animation', 'Typography & Branding'],
        icon: 'fa-palette',
        gradient: 'linear-gradient(135deg,#7c2d12,#b45309)',
        color: '#f59e0b',
        totalAlumni: 480,
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    }
];

// ============================================================
// 2. WORKSHOPS
// ============================================================
const WORKSHOPS = [
    // --- ENGINEERING ---
    {
        id: 'ws-e1', category: 'engineering',
        title: 'Mastering Archlinux: Bangun Distro Sendiri',
        desc: 'Pelajari cara merancang dan mengkonfigurasi distribusi Linux kustom dari awal hingga production-ready.',
        status: 'online', date: '2026-06-15', day: '15', month: 'Jun',
        time: '09:00 – 17:00 WIB', instructor: 'Rizky Pratama',
        participants: 120, maxParticipants: 150,
        rating: 4.9, popularity: 98,
        tags: ['Archlinux', 'Linux', 'Advanced'],
        icon: 'fa-brands fa-linux',
        gradient: 'linear-gradient(135deg,#1a1a2e,#0f3460)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-e2', category: 'engineering',
        title: 'CI/CD Pipeline dengan GitHub Actions & Jenkins',
        desc: 'Implementasi DevOps modern menggunakan tools open source terpopuler di dunia industri.',
        status: 'hybrid', date: '2026-06-22', day: '22', month: 'Jun',
        time: '13:00 – 18:00 WIB', instructor: 'Siti Nurhaliza',
        participants: 45, maxParticipants: 80,
        rating: 4.7, popularity: 72,
        tags: ['CI/CD', 'DevOps', 'GitHub'],
        icon: 'fa-brands fa-github',
        gradient: 'linear-gradient(135deg,#0f2027,#203a43)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-e3', category: 'engineering',
        title: 'Docker & Container Orchestration Dasar',
        desc: 'Dari Docker Compose hingga Kubernetes — panduan lengkap containerisasi aplikasi modern.',
        status: 'online', date: '2026-07-03', day: '03', month: 'Jul',
        time: '10:00 – 16:00 WIB', instructor: 'Budi Santoso',
        participants: 60, maxParticipants: 100,
        rating: 4.8, popularity: 80,
        tags: ['Docker', 'Kubernetes', 'DevOps'],
        icon: 'fa-brands fa-docker',
        gradient: 'linear-gradient(135deg,#004e92,#000428)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-e4', category: 'engineering',
        title: 'Networking Dasar untuk Sysadmin Linux',
        desc: 'Konfigurasi jaringan, firewall iptables, dan monitoring trafik dengan tools open source.',
        status: 'offline', date: '2026-07-12', day: '12', month: 'Jul',
        time: '08:00 – 14:00 WIB', instructor: 'Ahmad Fauzi',
        participants: 25, maxParticipants: 40,
        rating: 4.6, popularity: 60,
        tags: ['Networking', 'iptables', 'Sysadmin'],
        icon: 'fa-solid fa-network-wired',
        gradient: 'linear-gradient(135deg,#0f3443,#34e89e)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-e5', category: 'engineering',
        title: 'Bash Scripting & Automation untuk Linux',
        desc: 'Otomasi tugas sysadmin menggunakan Bash scripting yang powerful dan efisien.',
        status: 'online', date: '2026-07-20', day: '20', month: 'Jul',
        time: '14:00 – 18:00 WIB', instructor: 'Dewi Rahayu',
        participants: 80, maxParticipants: 120,
        rating: 4.8, popularity: 75,
        tags: ['Bash', 'Automation', 'Shell'],
        icon: 'fa-solid fa-terminal',
        gradient: 'linear-gradient(135deg,#232526,#414345)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },

    // --- TEKNOLOGI ---
    {
        id: 'ws-t1', category: 'teknologi',
        title: 'Machine Learning dengan Python & TensorFlow',
        desc: 'Bangun model ML dari scratch menggunakan Python modern — dari regresi hingga neural network.',
        status: 'online', date: '2026-06-18', day: '18', month: 'Jun',
        time: '09:00 – 17:00 WIB', instructor: 'Dr. Irfan Hakim',
        participants: 200, maxParticipants: 200,
        rating: 4.9, popularity: 99,
        tags: ['ML', 'Python', 'TensorFlow'],
        icon: 'fa-solid fa-brain',
        gradient: 'linear-gradient(135deg,#1a1a2e,#533483)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-t2', category: 'teknologi',
        title: 'IoT dengan Raspberry Pi & Linux Embedded',
        desc: 'Bangun perangkat IoT fungsional menggunakan Raspberry Pi, sensor, dan protokol MQTT.',
        status: 'offline', date: '2026-06-28', day: '28', month: 'Jun',
        time: '09:00 – 16:00 WIB', instructor: 'Fajar Nugroho',
        participants: 18, maxParticipants: 30,
        rating: 4.8, popularity: 78,
        tags: ['IoT', 'Raspberry Pi', 'MQTT'],
        icon: 'fa-solid fa-microchip',
        gradient: 'linear-gradient(135deg,#1b4332,#40916c)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-t3', category: 'teknologi',
        title: 'Cloud Native dengan OpenStack & Terraform',
        desc: 'Deploy infrastruktur cloud private menggunakan OpenStack dan otomasi dengan Terraform.',
        status: 'hybrid', date: '2026-07-08', day: '08', month: 'Jul',
        time: '10:00 – 17:00 WIB', instructor: 'Lisa Andriani',
        participants: 35, maxParticipants: 60,
        rating: 4.7, popularity: 65,
        tags: ['Cloud', 'OpenStack', 'Terraform'],
        icon: 'fa-solid fa-cloud',
        gradient: 'linear-gradient(135deg,#03045e,#0077b6)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-t4', category: 'teknologi',
        title: 'Computer Vision dengan OpenCV & Python',
        desc: 'Deteksi objek, face recognition, dan real-time video processing dengan OpenCV.',
        status: 'online', date: '2026-07-15', day: '15', month: 'Jul',
        time: '13:00 – 18:00 WIB', instructor: 'Rendi Setiawan',
        participants: 90, maxParticipants: 120,
        rating: 4.8, popularity: 82,
        tags: ['CV', 'OpenCV', 'AI'],
        icon: 'fa-solid fa-eye',
        gradient: 'linear-gradient(135deg,#200122,#6f0000)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-t5', category: 'teknologi',
        title: 'Big Data Processing dengan Apache Spark',
        desc: 'Analisis data skala besar menggunakan Apache Spark di atas cluster Linux.',
        status: 'online', date: '2026-07-25', day: '25', month: 'Jul',
        time: '09:00 – 16:00 WIB', instructor: 'Dr. Wahyu Pratama',
        participants: 55, maxParticipants: 80,
        rating: 4.6, popularity: 58,
        tags: ['BigData', 'Spark', 'Hadoop'],
        icon: 'fa-solid fa-database',
        gradient: 'linear-gradient(135deg,#004e89,#1a936f)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },

    // --- SECURITY ---
    {
        id: 'ws-s1', category: 'security',
        title: 'Penetration Testing Dasar dengan Kali Linux',
        desc: 'Hands-on workshop untuk memahami teknik dasar ethical hacking dan metodologi pentest profesional.',
        status: 'offline', date: '2026-07-05', day: '05', month: 'Jul',
        time: '08:00 – 16:00 WIB', instructor: 'Ahmad Fauzi',
        participants: 20, maxParticipants: 40,
        rating: 4.9, popularity: 95,
        tags: ['PenTest', 'Kali Linux', 'Ethical Hacking'],
        icon: 'fa-solid fa-shield-halved',
        gradient: 'linear-gradient(135deg,#370617,#6a040f)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-s2', category: 'security',
        title: 'Web Application Security & OWASP Top 10',
        desc: 'Identifikasi dan eksploitasi celah keamanan web berdasarkan standar OWASP Top 10 terbaru.',
        status: 'online', date: '2026-06-25', day: '25', month: 'Jun',
        time: '13:00 – 18:00 WIB', instructor: 'Hendra Kurniawan',
        participants: 75, maxParticipants: 100,
        rating: 4.8, popularity: 85,
        tags: ['OWASP', 'WebSec', 'SQL Injection'],
        icon: 'fa-solid fa-bug',
        gradient: 'linear-gradient(135deg,#7b2d8b,#c0392b)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-s3', category: 'security',
        title: 'Digital Forensics & Incident Response',
        desc: 'Teknik investigasi digital forensics dan prosedur incident response pada sistem Linux.',
        status: 'hybrid', date: '2026-07-14', day: '14', month: 'Jul',
        time: '09:00 – 17:00 WIB', instructor: 'Ibu Sari Dewi',
        participants: 28, maxParticipants: 50,
        rating: 4.7, popularity: 70,
        tags: ['Forensics', 'DFIR', 'Investigation'],
        icon: 'fa-solid fa-magnifying-glass',
        gradient: 'linear-gradient(135deg,#0f0c29,#302b63)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-s4', category: 'security',
        title: 'Malware Analysis & Reverse Engineering',
        desc: 'Analisis malware statis dan dinamis menggunakan tools open source seperti Ghidra dan Radare2.',
        status: 'online', date: '2026-07-22', day: '22', month: 'Jul',
        time: '10:00 – 17:00 WIB', instructor: 'Dimas Wicaksono',
        participants: 40, maxParticipants: 60,
        rating: 4.9, popularity: 88,
        tags: ['Malware', 'RE', 'Ghidra'],
        icon: 'fa-solid fa-virus',
        gradient: 'linear-gradient(135deg,#200122,#6f0000)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-s5', category: 'security',
        title: 'Network Security & Wireless Hacking',
        desc: 'Audit keamanan jaringan dan wireless network menggunakan Aircrack-ng dan Wireshark.',
        status: 'offline', date: '2026-08-02', day: '02', month: 'Agu',
        time: '08:00 – 15:00 WIB', instructor: 'Budi Santoso',
        participants: 15, maxParticipants: 25,
        rating: 4.8, popularity: 76,
        tags: ['Wireless', 'Wireshark', 'Network'],
        icon: 'fa-solid fa-wifi',
        gradient: 'linear-gradient(135deg,#141e30,#243b55)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },

    // --- PROGRAMMING ---
    {
        id: 'ws-p1', category: 'programming',
        title: 'Python untuk Data Science & Machine Learning',
        desc: 'Kuasai analisis data end-to-end: dari pandas, numpy hingga scikit-learn dan visualisasi.',
        status: 'online', date: '2026-06-20', day: '20', month: 'Jun',
        time: '09:00 – 17:00 WIB', instructor: 'Dr. Maya Putri',
        participants: 180, maxParticipants: 200,
        rating: 5.0, popularity: 97,
        tags: ['Python', 'Data Science', 'scikit-learn'],
        icon: 'fa-brands fa-python',
        gradient: 'linear-gradient(135deg,#1b4332,#2d6a4f)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-p2', category: 'programming',
        title: 'Rust Systems Programming dari Nol',
        desc: 'Belajar Rust dari dasar: ownership, borrowing, dan membangun CLI tools yang blazing fast.',
        status: 'online', date: '2026-07-01', day: '01', month: 'Jul',
        time: '10:00 – 17:00 WIB', instructor: 'Teguh Prasetyo',
        participants: 55, maxParticipants: 80,
        rating: 4.9, popularity: 84,
        tags: ['Rust', 'Systems', 'CLI'],
        icon: 'fa-solid fa-gear',
        gradient: 'linear-gradient(135deg,#7c2d12,#b45309)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-p3', category: 'programming',
        title: 'Go (Golang) untuk Backend & Microservices',
        desc: 'Membangun REST API dan microservices yang concurrency-native menggunakan Go dan gRPC.',
        status: 'hybrid', date: '2026-07-10', day: '10', month: 'Jul',
        time: '13:00 – 18:00 WIB', instructor: 'Galang Ramadhan',
        participants: 42, maxParticipants: 70,
        rating: 4.8, popularity: 79,
        tags: ['Go', 'Microservices', 'gRPC'],
        icon: 'fa-solid fa-arrow-right-arrow-left',
        gradient: 'linear-gradient(135deg,#03045e,#0077b6)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-p4', category: 'programming',
        title: 'C/C++ Embedded Programming untuk Linux',
        desc: 'Pemrograman C/C++ untuk sistem embedded berbasis Linux: driver, kernel module, dan hardware interfacing.',
        status: 'offline', date: '2026-07-19', day: '19', month: 'Jul',
        time: '09:00 – 16:00 WIB', instructor: 'Prof. Eko Yulianto',
        participants: 12, maxParticipants: 20,
        rating: 4.7, popularity: 62,
        tags: ['C/C++', 'Embedded', 'Kernel'],
        icon: 'fa-solid fa-microchip',
        gradient: 'linear-gradient(135deg,#232526,#414345)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-p5', category: 'programming',
        title: 'Full-Stack Web dengan Node.js & PostgreSQL',
        desc: 'Bangun aplikasi web modern dari frontend hingga backend dan deployment di server Linux.',
        status: 'online', date: '2026-07-28', day: '28', month: 'Jul',
        time: '10:00 – 18:00 WIB', instructor: 'Nadia Rahmawati',
        participants: 100, maxParticipants: 150,
        rating: 4.8, popularity: 88,
        tags: ['Node.js', 'PostgreSQL', 'Web'],
        icon: 'fa-brands fa-node-js',
        gradient: 'linear-gradient(135deg,#1a1a2e,#16213e)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },

    // --- ACADEMIC ---
    {
        id: 'ws-a1', category: 'academic',
        title: 'Metodologi Riset di Bidang Informatika',
        desc: 'Panduan lengkap merancang riset informatika: dari topik, literature review, hingga publikasi internasional.',
        status: 'online', date: '2026-06-24', day: '24', month: 'Jun',
        time: '09:00 – 15:00 WIB', instructor: 'Prof. Dr. Husni Thamrin',
        participants: 90, maxParticipants: 120,
        rating: 4.9, popularity: 92,
        tags: ['Research', 'Metodologi', 'Publikasi'],
        icon: 'fa-solid fa-flask',
        gradient: 'linear-gradient(135deg,#3d0066,#7b2d8b)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-a2', category: 'academic',
        title: 'Statistika & Probabilitas untuk Data Scientist',
        desc: 'Fondasi matematika statistik yang wajib dikuasai sebelum masuk ke machine learning dan AI.',
        status: 'online', date: '2026-07-06', day: '06', month: 'Jul',
        time: '10:00 – 16:00 WIB', instructor: 'Dr. Ratna Sari',
        participants: 65, maxParticipants: 100,
        rating: 4.8, popularity: 78,
        tags: ['Statistika', 'Math', 'Data Science'],
        icon: 'fa-solid fa-chart-line',
        gradient: 'linear-gradient(135deg,#200122,#6f0000)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-a3', category: 'academic',
        title: 'Penulisan Ilmiah & LaTeX untuk Akademisi',
        desc: 'Cara menulis paper ilmiah berkualitas menggunakan LaTeX dan publish ke jurnal bereputasi.',
        status: 'online', date: '2026-07-13', day: '13', month: 'Jul',
        time: '13:00 – 17:00 WIB', instructor: 'Dr. Wahyu Setyawan',
        participants: 48, maxParticipants: 80,
        rating: 4.7, popularity: 65,
        tags: ['LaTeX', 'Academic Writing', 'Research'],
        icon: 'fa-solid fa-file-lines',
        gradient: 'linear-gradient(135deg,#0f0c29,#302b63)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-a4', category: 'academic',
        title: 'Algorithm Design & Competitive Programming',
        desc: 'Teknik problem-solving dan desain algoritma untuk kompetisi dan interview teknis.',
        status: 'hybrid', date: '2026-07-21', day: '21', month: 'Jul',
        time: '09:00 – 17:00 WIB', instructor: 'Rizaldi Putra',
        participants: 35, maxParticipants: 60,
        rating: 4.9, popularity: 86,
        tags: ['Algorithm', 'Competitive', 'DSA'],
        icon: 'fa-solid fa-diagram-project',
        gradient: 'linear-gradient(135deg,#141e30,#243b55)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-a5', category: 'academic',
        title: 'Matematika Diskret untuk Computer Science',
        desc: 'Graph theory, combinatorics, dan logika matematika — fondasi CS yang sering diabaikan.',
        status: 'online', date: '2026-08-01', day: '01', month: 'Agu',
        time: '10:00 – 15:00 WIB', instructor: 'Dr. Andri Permana',
        participants: 72, maxParticipants: 100,
        rating: 4.7, popularity: 70,
        tags: ['Math', 'Discrete', 'Graph Theory'],
        icon: 'fa-solid fa-infinity',
        gradient: 'linear-gradient(135deg,#1a1a2e,#533483)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },

    // --- DESIGN ---
    {
        id: 'ws-d1', category: 'design',
        title: 'UI/UX Design dengan Figma untuk Developer',
        desc: 'Rancang interface yang indah dan usable menggunakan Figma — panduan khusus untuk developer.',
        status: 'online', date: '2026-06-26', day: '26', month: 'Jun',
        time: '10:00 – 17:00 WIB', instructor: 'Kirana Setiawati',
        participants: 130, maxParticipants: 150,
        rating: 4.9, popularity: 94,
        tags: ['Figma', 'UI/UX', 'Design System'],
        icon: 'fa-solid fa-palette',
        gradient: 'linear-gradient(135deg,#7c2d12,#b45309)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-d2', category: 'design',
        title: 'Open Source Design: Inkscape & GIMP Mastery',
        desc: 'Kuasai Inkscape (vektor) dan GIMP (raster) — alternatif gratis untuk Adobe suite.',
        status: 'online', date: '2026-07-04', day: '04', month: 'Jul',
        time: '09:00 – 16:00 WIB', instructor: 'Bimo Wicaksono',
        participants: 60, maxParticipants: 80,
        rating: 4.7, popularity: 72,
        tags: ['Inkscape', 'GIMP', 'Vector'],
        icon: 'fa-solid fa-pen-nib',
        gradient: 'linear-gradient(135deg,#200122,#6f0000)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-d3', category: 'design',
        title: 'Design Sistem & Komponen Library',
        desc: 'Buat design system yang scalable dengan token, komponen, dan dokumentasi yang rapi.',
        status: 'hybrid', date: '2026-07-11', day: '11', month: 'Jul',
        time: '13:00 – 18:00 WIB', instructor: 'Kirana Setiawati',
        participants: 45, maxParticipants: 70,
        rating: 4.8, popularity: 80,
        tags: ['Design System', 'Tokens', 'Storybook'],
        icon: 'fa-solid fa-layer-group',
        gradient: 'linear-gradient(135deg,#1a1a2e,#533483)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-d4', category: 'design',
        title: 'Motion Design & CSS Animation untuk Web',
        desc: 'Ciptakan animasi web yang smooth dan performant menggunakan CSS dan JavaScript.',
        status: 'online', date: '2026-07-18', day: '18', month: 'Jul',
        time: '10:00 – 15:00 WIB', instructor: 'Aldi Firmansyah',
        participants: 88, maxParticipants: 120,
        rating: 4.8, popularity: 83,
        tags: ['CSS Animation', 'Motion', 'Web'],
        icon: 'fa-solid fa-wand-sparkles',
        gradient: 'linear-gradient(135deg,#03045e,#0077b6)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    },
    {
        id: 'ws-d5', category: 'design',
        title: 'Tipografi & Visual Storytelling',
        desc: 'Prinsip tipografi modern dan cara menggunakannya untuk komunikasi visual yang efektif.',
        status: 'online', date: '2026-07-26', day: '26', month: 'Jul',
        time: '09:00 – 13:00 WIB', instructor: 'Nadia Rahma',
        participants: 52, maxParticipants: 80,
        rating: 4.7, popularity: 66,
        tags: ['Typography', 'Storytelling', 'Branding'],
        icon: 'fa-solid fa-font',
        gradient: 'linear-gradient(135deg,#1b4332,#40916c)',
        image: null,
        longDesc: 'Pelatihan intensif ini dirancang untuk membekali peserta dengan keterampilan praktis dan mendalam sesuai dengan standar industri saat ini. Peserta akan dibimbing langsung oleh expert melalui sesi hands-on, studi kasus nyata, dan praktik terbaik yang dapat langsung diterapkan di dunia kerja.',
        targetAudience: ['Pemula yang ingin memulai karir', 'Profesional yang ingin upskilling', 'Mahasiswa tingkat akhir', 'Tim IT/Developer perusahaan'],
        certificate: { available: true, type: 'Certificate of Completion', image: 'https://placehold.co/600x400/1a1a28/6366f1?text=Sertifikat+Yuros' }
    }
];

// ============================================================
// 3. REGISTRATION TYPES
// ============================================================
const REGISTRATION_TYPES = [
    {
        id: 'private-online',
        label: 'Private Online',
        icon: 'fa-video',
        tagline: 'Sesi 1-on-1 via Video Conference',
        desc: 'Sesi intensif personal bersama instruktur secara online. Kurikulum dirancang 100% sesuai kebutuhan.',
        highlights: ['Kurikulum custom', 'Perhatian penuh', 'Fleksibel'],
        badge: null
    },
    {
        id: 'private-regular',
        label: 'Private Regular',
        icon: 'fa-user-tie',
        tagline: 'Sesi 1-on-1 Tatap Muka',
        desc: 'Sesi intensif personal tatap muka dengan instruktur di lokasi. Fokus penuh dengan fasilitas langsung.',
        highlights: ['Tatap muka', 'Lab & tools fisik', 'Interaksi intensif'],
        badge: null
    },
    {
        id: 'group-online',
        label: 'Group Online',
        icon: 'fa-users',
        tagline: 'Pelatihan Tim Jarak Jauh',
        desc: 'Workshop diselenggarakan online untuk tim Anda. Ideal untuk perusahaan dengan tim remote.',
        highlights: ['Akses dari mana saja', 'Interaktif via platform', 'Rekaman sesi berkualitas'],
        badge: null
    },
    {
        id: 'group-regular',
        label: 'Group Regular',
        icon: 'fa-people-group',
        tagline: 'Pelatihan Tim Tatap Muka',
        desc: 'Workshop diselenggarakan secara offline. Cocok untuk membangun kolaborasi dan networking tim secara langsung.',
        highlights: ['Fasilitas lab lengkap', 'Networking tim', 'Praktik langsung'],
        badge: 'Terpopuler'
    },
    {
        id: 'group-onsite',
        label: 'Group Onsite',
        icon: 'fa-building-user',
        tagline: 'Pelatihan Tim di Kantor Anda',
        desc: 'Instruktur Yuros datang ke kantor Anda. Ideal untuk melatih tim secara massal tanpa perlu keluar kantor.',
        highlights: ['Suasana kerja familiar', 'Tanpa biaya transportasi tim', 'Jadwal sesuai klien'],
        badge: null
    },
    {
        id: 'private-onsite',
        label: 'Private Onsite',
        icon: 'fa-car-side',
        tagline: 'Instruktur Datang ke Lokasi Anda',
        desc: 'Sesi intensif 1-on-1 di mana instruktur Yuros datang langsung ke rumah atau kantor Anda.',
        highlights: ['Tatap muka di lokasi Anda', 'Waktu fleksibel', 'Tanpa perlu mobilisasi'],
        badge: null
    }
];

// ============================================================
// 4. PACKAGE TIERS (3 tier × 4 tipe)
// ============================================================
const PACKAGE_TIERS = {
    'group-regular': [
        {
            name: 'Basic',
            price: 3500000,
            priceUnit: '/ sesi',
            priceNote: 'maks. 20 peserta',
            duration: '1 Hari (8 jam)',
            isPopular: false,
            features: [
                'Instruktur bersertifikat Yuros',
                'Materi workshop digital (PDF + slide)',
                'Sertifikat peserta digital',
                'Sesi Q&A interaktif',
                'Rekaman sesi (akses 7 hari)',
                'Laporan evaluasi peserta'
            ]
        },
        {
            name: 'Standard',
            price: 5500000,
            priceUnit: '/ sesi',
            priceNote: 'maks. 30 peserta',
            duration: '2 Hari (16 jam)',
            isPopular: true,
            features: [
                'Semua fitur Basic',
                'Hands-on lab environment',
                'Materi PDF eksklusif (cetak)',
                'Rekaman sesi (akses 30 hari)',
                'Support via WhatsApp (1 bulan)',
                'Pre-training consultation (1 jam)',
                'Assessment & sertifikat kelulusan'
            ]
        },
        {
            name: 'Premium',
            price: 8500000,
            priceUnit: '/ sesi',
            priceNote: 'maks. 50 peserta',
            duration: '3 Hari (24 jam)',
            isPopular: false,
            features: [
                'Semua fitur Standard',
                'Kurikulum custom penuh',
                'Rasio instruktur 1:10',
                'Rekaman sesi (akses 90 hari)',
                'Support via WhatsApp (3 bulan)',
                'Sertifikat fisik + digital',
                '1× Free re-session',
                'Laporan performa detail per peserta'
            ]
        }
    ],
    'group-online': [
        {
            name: 'Basic',
            price: 750000,
            priceUnit: '/ orang',
            priceNote: 'min. 10 peserta',
            duration: '1 Hari (8 jam)',
            isPopular: false,
            features: [
                'Akses lab komputer Yuros',
                'Materi workshop digital',
                'Sertifikat digital',
                'Coffee break & snack',
                'Rekaman sesi (akses 7 hari)',
                'WiFi dedicated 100 Mbps'
            ]
        },
        {
            name: 'Standard',
            price: 1500000,
            priceUnit: '/ orang',
            priceNote: 'min. 5 peserta',
            duration: '2 Hari (16 jam)',
            isPopular: true,
            features: [
                'Semua fitur Basic',
                'Makan siang 2× (box catering)',
                'Materi PDF eksklusif',
                'Rekaman sesi (akses 30 hari)',
                'Akses grup Discord komunitas',
                'Assessment post-training'
            ]
        },
        {
            name: 'Premium',
            price: 2500000,
            priceUnit: '/ orang',
            priceNote: 'min. 5 peserta',
            duration: '3 Hari (24 jam)',
            isPopular: false,
            features: [
                'Semua fitur Standard',
                'Sertifikat fisik Yuros',
                'Rekaman sesi (akses 90 hari)',
                'Networking dinner malam hari',
                '1× Free re-session (online)',
                'Akses perpustakaan digital 1 tahun'
            ]
        }
    ],
    'private-regular': [
        {
            name: 'Basic',
            price: 5000000,
            priceUnit: '/ sesi',
            priceNote: '1 peserta, 4 jam',
            duration: '4 Jam',
            isPopular: false,
            features: [
                'Instruktur datang ke lokasi Anda',
                'Materi workshop digital',
                'Sertifikat digital',
                'Rekaman sesi pribadi (30 hari)',
                'Biaya transport instruktur included'
            ]
        },
        {
            name: 'Standard',
            price: 8000000,
            priceUnit: '/ sesi',
            priceNote: '1 peserta, 1 hari',
            duration: '1 Hari (8 jam)',
            isPopular: true,
            features: [
                'Semua fitur Basic',
                'Kurikulum semi-custom',
                'Hands-on project pribadi',
                'Rekaman sesi pribadi (60 hari)',
                'Support via WhatsApp (2 bulan)'
            ]
        },
        {
            name: 'Premium',
            price: 12000000,
            priceUnit: '/ sesi',
            priceNote: '1 peserta, 2 hari',
            duration: '2 Hari (16 jam)',
            isPopular: false,
            features: [
                'Semua fitur Standard',
                'Kurikulum custom penuh',
                'Portfolio project nyata',
                'Rekaman sesi pribadi (90 hari)',
                'Support via WhatsApp (3 bulan)',
                '1× Follow-up session online',
                'LinkedIn recommendation letter'
            ]
        }
    ],
    'private-online': [
        {
            name: 'Basic',
            price: 3000000,
            priceUnit: '/ sesi',
            priceNote: '1 peserta, 4 jam',
            duration: '4 Jam',
            isPopular: false,
            features: [
                'Akses lab komputer Yuros',
                'Materi workshop digital',
                'Sertifikat digital',
                'Rekaman sesi pribadi (30 hari)',
                'Coffee break'
            ]
        },
        {
            name: 'Standard',
            price: 5000000,
            priceUnit: '/ sesi',
            priceNote: '1 peserta, 1 hari',
            duration: '1 Hari (8 jam)',
            isPopular: true,
            features: [
                'Semua fitur Basic',
                'Kurikulum semi-custom',
                'Makan siang',
                'Rekaman sesi pribadi (60 hari)',
                'Support via WhatsApp (1 bulan)',
                'Akses perpustakaan digital (6 bulan)'
            ]
        },
        {
            name: 'Premium',
            price: 7500000,
            priceUnit: '/ sesi',
            priceNote: '1 peserta, 2 hari',
            duration: '2 Hari (16 jam)',
            isPopular: false,
            features: [
                'Semua fitur Standard',
                'Kurikulum custom penuh',
                'Makan siang 2×',
                'Rekaman sesi pribadi (90 hari)',
                'Support via WhatsApp (2 bulan)',
                '1× Follow-up session online',
                'Akses perpustakaan digital (1 tahun)'
            ]
        }
            ]
        }
    
    'group-onsite' [
        {
            name: 'Basic',
            price: 3500000,
            priceUnit: '/ sesi',
            priceNote: 'maks. 20 peserta',
            duration: '1 Hari (8 jam)',
            isPopular: false,
            features: [
                'Instruktur bersertifikat Yuros',
                'Instruktur datang ke lokasi',
                'Materi workshop digital (PDF + slide)',
                'Sesi Q&A interaktif',
                'Laporan evaluasi peserta'
            ]
        },
        {
            name: 'Standard',
            price: 5500000,
            priceUnit: '/ sesi',
            priceNote: 'maks. 30 peserta',
            duration: '2 Hari (16 jam)',
            isPopular: true,
            features: [
                'Semua fitur Basic',
                'Materi PDF eksklusif (cetak)',
                'Support via WhatsApp (1 bulan)',
                'Pre-training consultation (1 jam)',
                'Assessment & sertifikat kelulusan'
            ]
        },
        {
            name: 'Premium',
            price: 8500000,
            priceUnit: '/ sesi',
            priceNote: 'maks. 50 peserta',
            duration: '3 Hari (24 jam)',
            isPopular: false,
            features: [
                'Semua fitur Standard',
                'Kurikulum custom penuh',
                'Support via WhatsApp (3 bulan)',
                'Sertifikat fisik + digital',
                'Laporan performa detail per peserta'
            ]
        }
    ],
    'private-onsite' [
        {
            name: 'Basic',
            price: 5000000,
            priceUnit: '/ sesi',
            priceNote: '1 peserta, 4 jam',
            duration: '4 Jam',
            isPopular: false,
            features: [
                'Instruktur datang ke lokasi Anda',
                'Materi workshop digital',
                'Sertifikat digital',
                'Biaya transport instruktur included'
            ]
        },
        {
            name: 'Standard',
            price: 8000000,
            priceUnit: '/ sesi',
            priceNote: '1 peserta, 1 hari',
            duration: '1 Hari (8 jam)',
            isPopular: true,
            features: [
                'Semua fitur Basic',
                'Kurikulum semi-custom',
                'Hands-on project pribadi',
                'Support via WhatsApp (2 bulan)'
            ]
        },
        {
            name: 'Premium',
            price: 12000000,
            priceUnit: '/ sesi',
            priceNote: '1 peserta, 2 hari',
            duration: '2 Hari (16 jam)',
            isPopular: false,
            features: [
                'Semua fitur Standard',
                'Kurikulum custom penuh',
                'Portfolio project nyata',
                'Support via WhatsApp (3 bulan)',
                'LinkedIn recommendation letter'
            ]
        }
    ]


// ============================================================
// 5. HELPERS
// ============================================================

/** Format harga ke Rupiah singkat, misal 3500000 → "Rp 3,5 Jt" */
function formatPrice(n) {
    if (n >= 1000000) return `Rp ${(n / 1000000).toLocaleString('id-ID', { maximumFractionDigits: 1 })} Jt`;
    if (n >= 1000) return `Rp ${(n / 1000).toFixed(0)} Rb`;
    return `Rp ${n.toLocaleString('id-ID')}`;
}

/** Persen kapasitas terisi */
function fillPct(cur, max) { return Math.round((cur / max) * 100); }

/** Label status terjemahan */
function statusLabel(s) {
    return { online: 'Online', offline: 'Offline', hybrid: 'Hybrid' }[s] || s;
}

// ============================================================
// 6. TRAINERS
// ============================================================
const TRAINERS = [
    {
        id: 't1',
        name: 'Rizky Pratama',
        photo: 'https://i.pravatar.cc/150?u=rizky',
        role: 'Senior System Engineer',
        experience: '10+ tahun merancang infrastruktur high-availability dan administrasi sistem Linux tingkat lanjut.'
    },
    {
        id: 't2',
        name: 'Siti Nurhaliza',
        photo: 'https://i.pravatar.cc/150?u=siti',
        role: 'Cloud Architect',
        experience: 'Sertifikasi AWS & CKA, ahli dalam deployment Kubernetes dan implementasi DevOps modern.'
    },
    {
        id: 't3',
        name: 'Budi Santoso',
        photo: 'https://i.pravatar.cc/150?u=budi',
        role: 'Security Specialist',
        experience: 'Pakar Keamanan Siber dengan 15+ sertifikasi internasional dan mantan konsultan enterprise global.'
    },
    {
        id: 't4',
        name: 'Dewi Rahayu',
        photo: 'https://i.pravatar.cc/150?u=dewi',
        role: 'Principal Designer',
        experience: '8 tahun pengalaman mendesain produk digital multi-platform dan membangun design system di startup Unicorn.'
    }
];
