// --- Data Kamus & Kuis ---

const dictionary = {
    // Kata 'kasar' Arekan & Gaul
    "Jancuk": "Kata umpatan paling ikonik, bisa berarti makian, kejutan, atau ungkapan kekaguman (tergantung konteks dan intonasi).",
    "Cuk": "Singkatan dari Jancuk.",
    "Cok": "Varian lain dari Cuk/Jancuk, sering dipakai di Surabaya.",
    "Goblok": "Bodoh.",
    "Pe'a": "Gila, idiot (varian lebih halus dari Goblok).",
    "Asu": "Anjing (digunakan sebagai makian).",
    "Kirik": "Anak anjing (lebih halus dari Asu, tapi tetap makian).",

    // Kosakata tambahan
    "Gilani": "Menjijikkan atau menjengkelkan (misalnya: 'Kelakuanmu gilani!' = Kelakuanmu menjijikkan!).",
    "Mlete": "Sok jagoan, sombong, atau terlalu percaya diri dengan cara yang mengesalkan.",
    "Aleman": "Manja, suka minta perhatian, atau gampang ngambek (biasanya untuk anak-anak).",
    "Megilan": "Keren banget, hebat, atau luar biasa (kata pujian khas arek Suroboyo).",
    "Kopros": "Jorok, kotor, atau tidak higienis (bisa juga untuk sifat buruk).",
    "Modiar": "Mati (sering diucapkan sebagai makian kasar atau sumpah serapah).",
    "Medok": "Kental atau pekat (sering untuk logat bicara yang sangat khas Jawa Timuran).",
    "Wedi": "Takut.",
    "Ngalay": "Berlebihan atau norak dalam berpakaian/bertingkah (serapan dari 'alay').",
    "Semeru": "Nama gunung tertinggi di Jawa.",
    "Mosok": "Masa sih? atau Beneran? (Ungkapan terkejut atau tidak percaya).", // Menambahkan kata 'Mosok' agar bisa dicari

    // Kata-kata gaul/sehari-hari Arekan
    "Rek": "Panggilan akrab untuk teman (biasanya laki-laki), singkatan dari 'Arek'.",
    "Kate": "Mau/Akan (misalnya: Kate nang endi? = Mau ke mana?)",
    "Gak": "Tidak.",
    "Iki": "Ini.",
    "Iku": "Itu.",
    "Lek": "Kalau (misalnya: Lek gak gelem, yo wes = Kalau tidak mau, ya sudah).",
    "Cokot": "Gigit.",
    "Pisan": "Sekali (sering digunakan sebagai penegas, misal: Apik pisan! = Bagus banget!).",
    "Mangan": "Makan.",
    "Nang": "Ke/Di (misalnya: Nang warung = Ke warung).",
    "Ndasku": "Kepalaku.",
    
};

const quizQuestions = [
    {
        question: "Apa arti dari kata 'Rek' dalam Boso Arekan?",
        options: ["Kamu", "Saya", "Panggilan akrab untuk teman", "Kakek"],
        answer: "Panggilan akrab untuk teman"
    },
    {
        question: "Jika Anda mendengar 'Kate nang endi?', apa artinya?",
        options: ["Apa yang kamu lakukan?", "Mau ke mana?", "Di mana rumahmu?", "Ayo pergi sekarang!"],
        answer: "Mau ke mana?"
    },
    {
        question: "Kata mana yang merupakan varian singkat dari 'Jancuk'?",
        options: ["Yok", "Cak", "Cuk", "Woy"],
        answer: "Cuk"
    },
    {
        question: "Apa arti dari 'Gak'?",
        options: ["Ya", "Tidak", "Mungkin", "Sangat"],
        answer: "Tidak"
    },
    {
        question: "Ungkapan 'Apik pisan!' berarti...",
        options: ["Sangat buruk!", "Bagus sekali!", "Biasa saja.", "Mari kita coba!"],
        answer: "Bagus sekali!"
    },
    {
        question: "Jika seseorang dibilang 'Alah, mlete koen!', apa maksud dari kata 'mlete'?",
        options: ["Pendiam", "Sok jagoan/sombong", "Bodoh", "Malas"],
        answer: "Sok jagoan/sombong"
    },
    {
        question: "Apa padanan kata 'Megilan' dalam bahasa Indonesia?",
        options: ["Biasa saja", "Menyebalkan", "Keren/Hebat", "Jelek"],
        answer: "Keren/Hebat"
    }
];

// --- FUNGSI KAMUS (HANYA STATIS) ---

function searchWord() {
    const input = document.getElementById('searchInput').value.trim();
    const resultContainer = document.getElementById('resultContainer');
    const searchTerm = input.toLowerCase();
    
    // Bersihkan hasil sebelumnya
    resultContainer.innerHTML = '';

    if (!input) {
         resultContainer.innerHTML = '<p class="placeholder">Ayo, coba nggolek kata nang dhuwur!</p>';
         return;
    }

    // Periksa apakah kata ada di kamus (case-insensitive)
    let found = false;
    for (const key in dictionary) {
        if (key.toLowerCase() === searchTerm) {
            const definition = dictionary[key];
            resultContainer.innerHTML = `
                <h3>Kata: ${key}</h3>
                <p><strong>Artinya:</strong> ${definition}</p>
                <p style="margin-top: 10px; font-size: 0.9em;">(Eling-elingen, rek! Kata-kata ini *keras* dan harus hati-hati digunakannya!)</p>
            `;
            found = true;
            break;
        }
    }

    if (!found) {
        resultContainer.innerHTML = `
            <h3>Waduh, Gak Ketemu!</h3>
            <p>Kata <strong>"${input}"</strong> gak ada nang Kamus Boso Arekan iki. Coba golek liyane!</p>
        `;
    }
}

// --- FUNGSI TABS ---

function showTab(tabId) {
    // Sembunyikan semua konten tab
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Hapus status 'active' dari semua tombol
    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove('active');
    });

    // Tampilkan tab yang dipilih
    document.getElementById(tabId).classList.add('active');

    // Berikan status 'active' pada tombol yang diklik
    document.querySelector(`.tab-button[onclick="showTab('${tabId}')"]`).classList.add('active');

    // Reset kuis setiap kali kembali ke tab kuis
    if (tabId === 'kuis') {
        currentQuestionIndex = 0;
        score = 0;
        loadQuestion();
    }
}


// --- FUNGSI KUIS ---

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    const nextButton = document.getElementById('nextQuestionButton');
    const resultDiv = document.getElementById('quizResult');

    // Reset tampilan
    quizContainer.innerHTML = '';
    nextButton.style.display = 'none';
    resultDiv.style.display = 'none';
    resultDiv.innerHTML = '';

    if (currentQuestionIndex >= quizQuestions.length) {
        // Kuis Selesai
        quizContainer.innerHTML = `
            <div class="result-container">
                <h3>Kuis Selesai! 🎉</h3>
                <p>Skor Akhirmu: <strong>${score} dari ${quizQuestions.length}</strong></p>
                <p>${score >= quizQuestions.length / 2 ? 'Wih, jos gandos! Koen wes dadi Arek Suroboyo asli!' : 'Duh, kurang sitik rek! Ayo sinau maneh!'}</p>
                <button onclick="restartQuiz()">Coba Maneh (Coba Lagi)</button>
            </div>
        `;
        return;
    }

    const currentQ = quizQuestions[currentQuestionIndex];
    
    // Buat tampilan soal
    const questionHTML = `
        <div class="question-card">
            <p><strong>Soal ${currentQuestionIndex + 1} / ${quizQuestions.length}</strong></p>
            <h3>${currentQ.question}</h3>
            <div class="options-container" id="optionsContainer">
                ${currentQ.options.map((option, index) => `
                    <button class="option-button" data-option="${option}" onclick="checkAnswer(this, '${currentQ.answer}')">${option}</button>
                `).join('')}
            </div>
        </div>
    `;

    quizContainer.innerHTML = questionHTML;
}

function checkAnswer(selectedButton, correctAnswer) {
    const optionsContainer = document.getElementById('optionsContainer');
    const buttons = optionsContainer.querySelectorAll('.option-button');
    const nextButton = document.getElementById('nextQuestionButton');

    // Non-aktifkan semua tombol setelah memilih
    buttons.forEach(button => {
        button.disabled = true;
        // Tampilkan jawaban yang benar
        if (button.dataset.option === correctAnswer) {
            button.classList.add('correct');
        }
    });

    // Periksa jawaban
    if (selectedButton.dataset.option === correctAnswer) {
        selectedButton.classList.add('correct');
        score++;
        document.getElementById('quizResult').innerHTML = '<p style="color: green; font-weight: bold;">Joss, bener!</p>';
    } else {
        selectedButton.classList.add('wrong');
        document.getElementById('quizResult').innerHTML = `<p style="color: red; font-weight: bold;">Salah, rek! Jawaban sing bener iku: ${correctAnswer}</p>`;
    }

    // Tampilkan tombol Lanjut
    document.getElementById('quizResult').style.display = 'block';
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    loadQuestion();
});