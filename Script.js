// بيانات المغنيين
const artists = [
    {
        id: 1,
        name: "Jul",
        image: "imgs/Jul.jpg",
        songs: [
            { id: 1, title: "J'oublie tou", video: "videos/Jul1.mp4" },
            { id: 2, title: "Ça tourne", video: "videos/Jul2.mp4" },
            { id: 3, title: "Sousou", video: "videos/Jul3.mp4" },
            { id: 4, title: "Bande organisé 1", video: "videos/Jul3.mp4" },
             { id: 5, title: "Bande organisé 2", video: "videos/Bande organisé.mp4" },
            
        ]
    },
    {
        id: 2,
        name: "Soolking",
        image: "imgs/Soolking.jpg",
        songs: [
            { id: 1, title: "Melegim", video: "videos/Soolking1.mp4" },
            { id: 2, title: "Suavementè", video: "videos/Soolking2.mp4" },
            { id: 3, title: "Sans visa", video: "videos/Soolking3.mp4" }, 
            { id: 4, title: "Casanova", video: "videos/Casanova.mp4" },
            { id: 5, title: "متعودة", video: "videos/متعودة.mp4" },
           { id: 3, title: "Baila", video: "videos/Baila.mp4" },
      
        ]
    },
    {
        id: 3,
        name: "Elshami",
        image: "imgs/Elshami.jpg",
        songs: [
            { id: 1, title: "صبرا", video: "videos/Elshami1.mp4" },
            { id: 2, title: "وين", video: "videos/Elshami2.mp4" },
            { id: 3, title: "ملكة جمال الكون", video: "videos/Elshami3.mp4" }
        ]
    },
    {
        id: 4,
        name: "Bessan ismail",
        image: "imgs/Bessan.jpg",
        songs: [
            { id: 1, title: "الحربين", video: "videos/Bessan1.mp4" },
            { id: 2, title: "خطية", video: "videos/Bessan2.mp4" },
            { id: 3, title: "علاش", video: "videos/Bessan3.mp4" }
        ]
    }, 
    {
    id: 4,
    name: "الجربوع",
    image: "imgs/artist4.jpg",
    songs: [
        { id: 1, title: "Pelele", video: "videos/Pelele.mp4" },
        { id: 2, title: "Motorola", video: "videos/Motorola.mp4" }, 
        { id: 3, title: "Toca", video:"videos/Toca.mp4"
            
        }
    ]
}
    
    
    
    
    
];

// عناصر DOM
const homePage = document.querySelector('.home-page');
const artistPage = document.querySelector('.artist-page');
const videoPage = document.querySelector('.video-page');
const artistsContainer = document.getElementById('artistsContainer');
const songsList = document.getElementById('songsList');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const backToHome = document.getElementById('backToHome');
const backToArtist = document.getElementById('backToArtist');
const artistPageName = document.getElementById('artistPageName');
const artistPageImg = document.getElementById('artistPageImg');
const artistSongsCount = document.getElementById('artistSongsCount');
const musicVideo = document.getElementById('musicVideo');
const videoTitle = document.getElementById('videoTitle');
const videoArtist = document.getElementById('videoArtist');
const musicNotes = document.getElementById('musicNotes');

// عرض المغنيين
function displayArtists(artistsToDisplay = artists) {
    artistsContainer.innerHTML = '';
    
    artistsToDisplay.forEach((artist, index) => {
        const artistCard = document.createElement('div');
        artistCard.className = `artist-card fade-in delay-${index % 4}`;
        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}" class="artist-img">
            <div class="artist-info">
                <h3 class="artist-name">${artist.name}</h3>
                <p class="songs-count">${artist.songs.length} أغاني</p>
                <button class="view-btn">عرض الأغاني</button>
            </div>
        `;
        
        artistCard.querySelector('.view-btn').addEventListener('click', () => {
            showArtistPage(artist);
        });
        
        artistsContainer.appendChild(artistCard);
    });
}

// عرض صفحة المغني
function showArtistPage(artist) {
    homePage.style.display = 'none';
    artistPage.style.display = 'block';
    videoPage.style.display = 'none';
    
    artistPageName.textContent = artist.name;
    artistPageImg.src = artist.image;
    artistSongsCount.textContent = `${artist.songs.length} أغاني`;
    
    songsList.innerHTML = '';
    
    artist.songs.forEach((song, index) => {
        const songCard = document.createElement('div');
        songCard.className = `song-card fade-in delay-${index % 3 + 1}`;
        songCard.innerHTML = `
            <span class="song-number">${song.id}</span>
            <span class="song-title">${song.title}</span>
            <div class="play-btn">
                <i class="fas fa-play"></i>
            </div>
        `;
        
        songCard.addEventListener('click', () => {
            showVideoPage(artist, song);
        });
        
        songsList.appendChild(songCard);
    });
    
    // إضافة اسم المطور في الصفحة
    const devName = document.createElement('p');
    devName.style.marginTop = '20px';
    devName.style.textAlign = 'center';
    devName.style.color = 'var(--accent)';
    devName.textContent = 'تم التطوير بواسطة Moumen ZwD';
    songsList.appendChild(devName);
}

// عرض صفحة الفيديو
function showVideoPage(artist, song) {
    homePage.style.display = 'none';
    artistPage.style.display = 'none';
    videoPage.style.display = 'block';
    
    musicVideo.src = song.video;
    videoTitle.textContent = song.title;
    videoArtist.textContent = artist.name;
    
    // تشغيل الفيديو تلقائياً
    musicVideo.play();
}

// العودة للصفحة الرئيسية
backToHome.addEventListener('click', () => {
    homePage.style.display = 'block';
    artistPage.style.display = 'none';
    videoPage.style.display = 'none';
    musicVideo.pause();
});

// العودة لصفحة المغني
backToArtist.addEventListener('click', () => {
    homePage.style.display = 'none';
    artistPage.style.display = 'block';
    videoPage.style.display = 'none';
    musicVideo.pause();
});

// البحث عن المغنيين
searchBtn.addEventListener('click', searchArtists);
searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchArtists();
    }
});

function searchArtists() {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        displayArtists();
        return;
    }
    
    const filteredArtists = artists.filter(artist => 
        artist.name.toLowerCase().includes(searchTerm)
    );
    
    displayArtists(filteredArtists);
}

// إنشاء رموز موسيقية متحركة
function createMusicNotes() {
    const notes = ['♪', '♫', '♩', '♬', '♭', '♮', '♯'];
    
    setInterval(() => {
        const note = document.createElement('div');
        note.className = 'note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = Math.random() * 100 + 'vw';
        note.style.animationDuration = 3 + Math.random() * 7 + 's';
        musicNotes.appendChild(note);
        
        setTimeout(() => {
            note.remove();
        }, 10000);
    }, 500);
}

// تهيئة الصفحة
function init() {
    displayArtists();
    createMusicNotes();
}

// تشغيل التطبيق
init();




// إنشاء الرموز الموسيقية المتحركة
function createMusicNotes() {
    const notes = ['♪', '♫', '♩', '♬', '♭', '♮', '♯'];
    const colors = ['#fd79a8', '#a29bfe', '#00cec9', '#ffeaa7'];
    
    setInterval(() => {
        const note = document.createElement('div');
        note.className = 'music-note';
        note.textContent = notes[Math.floor(Math.random() * notes.length)];
        note.style.left = Math.random() * 100 + 'vw';
        note.style.animationDuration = 6 + Math.random() * 10 + 's';
        note.style.color = colors[Math.floor(Math.random() * colors.length)];
        note.style.fontSize = (20 + Math.random() * 15) + 'px';
        
        document.querySelector('.music-background').appendChild(note);
        
        // إزالة العنصر بعد انتهاء الحركة
        setTimeout(() => {
            note.remove();
        }, 8000);
    }, 800);
}

// استدعاء الوظيفة عند تحميل الصفحة
window.addEventListener('load', function() {
    // إنشاء عنصر الخلفية
    const bgDiv = document.createElement('div');
    bgDiv.className = 'music-background';
    document.body.prepend(bgDiv);
    
    // تشغيل الرموز الموسيقية
    createMusicNotes();
    
    // ضبط z-index للفيديو
    const videoContainers = document.querySelectorAll('.video-container');
    videoContainers.forEach(video => {
        video.style.zIndex = '1000';
    });
});



