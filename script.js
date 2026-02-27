function toggleMenu() {
            document.getElementById("dropdown").classList.toggle("show");
        };

        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };

        function scrollToInfo() {
            document.getElementById("info-awal").scrollIntoView({
                behavior: "smooth"
            });
        };

        // Pastikan halaman selalu mulai dari atas
        window.onbeforeunload = function () {
           window.scrollTo(0, 0);
        } 
       // Chart.js untuk grafik tren kasus DBD

        // Tren Kasus
        new Chart(document.getElementById('TrenKasusDbd'), {
        type: 'line',
        data: {
            labels: ['Januari','Februari','Maret','April','Mei','Juni','Juli','Agustus','September','Oktober'],
            datasets: [{
            label: 'Jumlah Kasus DBD Jakarta Selatan 2025',
            data: [169,141,110,98,110,115,181,130,140,145],
            borderColor: '#4a90e2',
            fill: false
            }]
        }
        });

        // Kasus per Kecamatan
        new Chart(document.getElementById('KasusDbdKecamatan'), {
        type: 'bar',
        data: {
            labels: ['Pancoran','Jagakarsa','Pasar Minggu','Tebet','Kebayoran Lama','Cilandak','Pesanggrahan','Kebayoran Baru','Mampang','Setiabudi'],
            datasets: [{
            label: 'Jumlah Kasus',
            data: [216,192,165,145,138,125,115,105,95,88],
            backgroundColor: '#c2e1fc'
            }]
        }
        });

        // Gender
        new Chart(document.getElementById('KasusDbdGender'), {
        type: 'pie',
        data: {
            labels: ['Laki-laki','Perempuan'],
            datasets: [{
            data: [47,53],
            backgroundColor: ['#c2e1fc','#ffc2d9']
            }]
        }
        });

        // Gender & Umur (STACKED)
        new Chart(document.getElementById('KasusDbdGenderUmur'), {
        type: 'bar',
        data: {
            labels: ['< 1 thn','1-4 thn','5-11 thn','12-25 thn','26-45 thn','46-59 thn','> 59 thn'],
            datasets: [
            { label:'Laki-laki', data:[6,53,148,280,110,47,19], backgroundColor:'#c2e1fc' },
            { label:'Perempuan', data:[7,34,162,218,115,34,17], backgroundColor:'#ffc2d9' }
            ]
        },
        options: {
            scales: {
            x: { stacked:true },
            y: { stacked:true, beginAtZero:true, max:500 }
            }
        }
        });

        const ChartsData = [
        { title:'Kecamatan Pancoran', 
        labels:['Kalibata','Duren Tiga','Pancoran','Rawajati', 'Pengadegan', 'Cikoko'], 
        values:[3, 1, 4, 0, 1, 1], },

        { title:'Kecamatan Jagakarsa', 
        labels:['Cipedak','Jagakarsa','Lenteng Agung','Tanjung Barat', 'Srengseng Sawah', 'Ciganjur'], 
        values:[2,1,0,0,0,0], },

        { title:'Kecamatan Mampang Prapatan', 
        labels:['Pela Mampang','Tegal Mampang','Mampang Prapatan','Bangka', 'Kungingan Barat'], 
        values:[3,3,9,1,1] },
        
        { title:'Kecamatan Pasar Minggu', 
        labels:['Pejaten Timur','Cilandak Timur','Pejaten Barat','Kebagusan', 'Jati Padang', 'Pasar Minggu', 'Ragunan'], 
        values:[7,3,0,1,0,2,1] },

        { title:'Kecamatan Pesanggrahan', 
        labels:['Petukangan Utara','Bintaro','Ulujami','Ptukangan Selatan', 'Pesanggrahan'], 
        values:[2,1,0,0,1] },

        { title:'Kecamatan Kebayoran Baru', 
        labels:['Cipete Utara','Gandaria Utara','Petogongan','Gunung', 'Kramat Pela', 'Rawa Barat', 'Pulo', 'Selong', 'Senayan', 'Melawai'], 
        values:[3,2,0,1,0,1,0,0,0,0] },

        { title:'Kecamatan Cilandak', 
        labels:['Cilandak Barat','Lebak Bulus','Pondok Labu','Gandaria Selatan', 'Cipete Selatan'], 
        values:[0, 0, 0, 0, 0] },

        { title:'Kecamatan Kebayoran Lama', 
        labels:['Kebayoran Lama Utara','Pondok Pinang','Kebayoran Lama Selatan','Cipulir','Grogol Selatan','Grogol Utara'], 
        values:[2,7,1,1,2,0] },

        { title:'Kecamatan Tebet', 
        labels:['Bukit Duri','Menteng Dalam','Kebon Baru','Manggari Selatan','Manggarai','Tebet Barat','Tebet Timur'], 
        values:[2,2,0,1,1,1,0] },

        { title:'Kecamatan Setiabudi', 
        labels:['Menteng Atas','Pasar Manggis','Karet Kuningan','Kuningan Timur', 'Karet','Setiabudi','Guntur','Karet Semanggi'], 
        values:[3,1,2,0,0,0,0,0] }
        ];
        

        // AUTO CREATE 10 CHART
        ChartsData.forEach((item, index) => {
        const canvas = document.getElementById(`chartExtra${index + 1}`);
        if (!canvas) return;

        canvas.closest('.card-slide').querySelector('h4').innerText = item.title;

        new Chart(canvas, {
            type: 'bar',
            data: {
            labels: item.labels,
            datasets: [{
                label: 'Jumlah Kasus',
                data: item.values,
                backgroundColor: '#c2e1fc'
            }]
            },
            options: {
            responsive: true,
            plugins: { legend: { display:false } },
            scales: { y: { beginAtZero:true } }
            }
        });
        });


        // ===== SLIDER DATA TAMBAHAN =====
        const slider = document.getElementById('sliderTambahan');
        const thumb = document.getElementById('thumbTambahan');
        const scrollbar = thumb.parentElement;

        let isThumbDragging = false;
        let thumbOffsetX = 0;

        // ===== HITUNG UKURAN THUMB =====
        function updateThumb() {
        const ratio = slider.clientWidth / slider.scrollWidth;
        thumb.style.width =
            Math.max(ratio * scrollbar.clientWidth, 60) + 'px';
        }
        window.addEventListener('load', updateThumb);
        window.addEventListener('resize', updateThumb);

        // ===== DRAG THUMB (PROFESSIONAL WAY) =====
        thumb.addEventListener('pointerdown', (e) => {
        isThumbDragging = true;
        thumb.classList.add('dragging');

        // jarak klik dari kiri thumb
        thumbOffsetX = e.clientX - thumb.getBoundingClientRect().left;

        thumb.setPointerCapture(e.pointerId);
        });

        thumb.addEventListener('pointermove', (e) => {
        if (!isThumbDragging) return;

        const barRect = scrollbar.getBoundingClientRect();
        let x = e.clientX - barRect.left - thumbOffsetX;

        const maxX = scrollbar.clientWidth - thumb.offsetWidth;
        x = Math.max(0, Math.min(x, maxX));

        thumb.style.left = x + 'px';

        const ratio = x / maxX;
        slider.scrollLeft =
            ratio * (slider.scrollWidth - slider.clientWidth);
        });

        thumb.addEventListener('pointerup', () => {
        isThumbDragging = false;
        thumb.classList.remove('dragging');
        });

        thumb.addEventListener('pointercancel', () => {
        isThumbDragging = false;
        });

        slider.addEventListener('scroll', () => {
        const maxScroll = slider.scrollWidth - slider.clientWidth;
        const maxX = scrollbar.clientWidth - thumb.offsetWidth;

        if (maxScroll <= 0) return;

        const ratio = slider.scrollLeft / maxScroll;
        thumb.style.left = ratio * maxX + 'px';
        });

        document.getElementById("contactForm").addEventListener("submit", function(e) {
        e.preventDefault();
        const status = document.getElementById("formStatus");
        status.textContent = "Pesan berhasil dikirim. Terima kasih!";
        this.reset();
        });

        // ===== Card Carrousel =====
const cards = document.querySelectorAll('#edukasi .carousel-card');
const prevBtn = document.querySelector('#edukasi .prev');
const nextBtn = document.querySelector('#edukasi .next');

let currentIndex = 0;
const total = cards.length;

function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.remove('center', 'left', 'right', 'back');
    
    // hitung jarak melingkar
    let diff = index - currentIndex;

    if (diff < -Math.floor(total / 2)) diff += total;
    if (diff > Math.floor(total / 2)) diff -= total;

    if (diff === 0) {
      card.classList.add('center');
    } 
    else if (diff === -1) {
      card.classList.add('left');
    } 
    else if (diff === 1) {
      card.classList.add('right');
    } 
    else {
      card.classList.add('back');
    }
  });
}

// AKSI WILAYAH
const aksiCards = document.querySelectorAll('#aksi .aksi-card');
const aksiContainer = document.getElementById('aksiCarousel');

let aksiIndex = 0;
const aksiTotal = aksiCards.length;
let aksiInterval;

// Update posisi card
function updateAksiCarousel() {
  aksiCards.forEach((card, index) => {
    card.classList.remove('center','left','right','back');

    let diff = index - aksiIndex;

    if (diff < -Math.floor(aksiTotal / 2)) diff += aksiTotal;
    if (diff > Math.floor(aksiTotal / 2)) diff -= aksiTotal;

    if (diff === 0) {
      card.classList.add('center');
    }
    else if (diff === -1) {
      card.classList.add('left');
    }
    else if (diff === 1) {
      card.classList.add('right');
    }
    else {
      card.classList.add('back');
    }
  });
}

// Start slide
function startAksiSlide() {
  aksiInterval = setInterval(() => {
    aksiIndex = (aksiIndex + 1) % aksiTotal;
    updateAksiCarousel();
  }, 3000);
}
// Stop slide
function stopAksiSlide() {
  clearInterval(aksiInterval);
}
// Hover
aksiContainer.addEventListener('mouseenter', stopAksiSlide);
aksiContainer.addEventListener('mouseleave', startAksiSlide);

// INIT
updateAksiCarousel();
startAksiSlide();

// NAVIGATION
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + total) % total;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % total;
  updateCarousel();
});

// INIT
updateCarousel();
