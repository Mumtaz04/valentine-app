onload = () =>{
    document.body.classList.remove("container");
};
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("backgroundMusic");

    // Pastikan audio bisa diputar setelah interaksi pengguna
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play().catch(error => console.log("Autoplay failed:", error));
        }
    });

    // Coba putar lagu saat bunga mulai bergerak
    const flowers = document.querySelector(".flowers");
    if (flowers) {
        flowers.classList.add("start-animation");
        setTimeout(() => {
            if (audio.paused) {
                audio.play().catch(error => console.log("Audio play error:", error));
            }
        }, 1000); // Sesuaikan waktu dengan animasi bunga
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("playAudio");
    const audio = document.getElementById("clickSound");

    button.addEventListener("click", function () {
        if (audio) {
            audio.play().then(() => {
                console.log("Audio berhasil diputar!");
            }).catch(error => {
                console.error("Gagal memutar audio:", error);
            });

            // Tunggu 500ms sebelum pindah halaman
            setTimeout(() => {
                window.location.href = "flower.html";
            }, 500);
        } else {
            console.error("Elemen audio tidak ditemukan!");
        }
    });
});
