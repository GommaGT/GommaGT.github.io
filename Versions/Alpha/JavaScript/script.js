document.addEventListener("DOMContentLoaded", () => {
    let username = localStorage.getItem("username");
    let profilePic = localStorage.getItem("profilePic");

    let usernameElement = document.getElementById("username");
    let profilePicElement = document.getElementById("profilePicture");

    if (username && usernameElement) {
        usernameElement.textContent = username;
    }

    if (profilePic && profilePicElement) {
        profilePicElement.src = profilePic;
    }
});


self.addEventListener("install", (event) => {
    console.log("Service Worker Installed");
    event.waitUntil(
        caches.open("static").then((cache) => {
            return cache.addAll([
                "/",
                "/index.html",
                "/style.css",
                "/script.js",
                "/media/icon-192.png",
                "/media/icon-512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith



// Werte aus Local Storage abrufen oder auf 0 setzen
let hourlyCount = parseInt(localStorage.getItem("hourlyCount")) || 0;
let weeklyCount = parseInt(localStorage.getItem("weeklyCount")) || 0;
let totalCount = parseInt(localStorage.getItem("totalCount")) || 0;

// HTML aktualisieren
document.getElementById("hourlyCount").textContent = hourlyCount;
document.getElementById("weeklyCount").textContent = weeklyCount;
document.getElementById("totalCount").textContent = totalCount;

// Funktion zum Erhöhen der Werte
function increaseCount() {
    hourlyCount++;
    weeklyCount++;
    totalCount++;

    // Werte speichern
    localStorage.setItem("hourlyCount", hourlyCount);
    localStorage.setItem("weeklyCount", weeklyCount);
    localStorage.setItem("totalCount", totalCount);

    // HTML aktualisieren
    document.getElementById("hourlyCount").textContent = hourlyCount;
    document.getElementById("weeklyCount").textContent = weeklyCount;
    document.getElementById("totalCount").textContent = totalCount;
}

// Funktion zum Zurücksetzen des Stundenzählers
function resetHourly() {
    hourlyCount = 0;
    localStorage.setItem("hourlyCount", hourlyCount);
    document.getElementById("hourlyCount").textContent = hourlyCount;
}

// Funktion zum automatischen Zurücksetzen des Wochenzählers (jeden Montag)
function resetWeekly() {
    let lastReset = localStorage.getItem("lastWeekReset");
    let today = new Date();
    let currentWeek = today.getFullYear() + "-" + today.getWeek(); // Woche als "YYYY-WW"

    if (lastReset !== currentWeek) {
        weeklyCount = 0;
        localStorage.setItem("weeklyCount", weeklyCount);
        localStorage.setItem("lastWeekReset", currentWeek);
        document.getElementById("weeklyCount").textContent = weeklyCount;
    }
}

// Hilfsfunktion: Aktuelle Kalenderwoche berechnen
Date.prototype.getWeek = function () {
    let date = new Date(this.getTime());
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
    let week1 = new Date(date.getFullYear(), 0, 4);
    return (
        date.getFullYear() +
        "-" +
        Math.round(((date - week1) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7 + 1)
    );
};

// Wöchentlicher Reset prüfen
resetWeekly();


document.addEventListener("DOMContentLoaded", function () {
    let profilePic = document.getElementById("profilePic");
    let usernameDisplay = document.getElementById("username");

    // Load saved username & profile pic from localStorage
    let savedUsername = localStorage.getItem("username");
    let savedProfilePic = localStorage.getItem("profilePic");

    if (savedUsername) usernameDisplay.textContent = savedUsername;
    if (savedProfilePic) profilePic.src = savedProfilePic;

    // Profile update logic (only on settings page)
    let usernameInput = document.getElementById("usernameInput");
    let profilePicInput = document.getElementById("profilePicInput");
    let saveProfileBtn = document.getElementById("saveProfile");

    if (saveProfileBtn) {
        saveProfileBtn.addEventListener("click", function () {
            let newUsername = usernameInput.value.trim();
            let newProfilePic = profilePicInput.files[0];

            // Update and save username
            if (newUsername !== "") {
                localStorage.setItem("username", newUsername);
                usernameDisplay.textContent = newUsername;
            }

            // Update and save profile picture
            if (newProfilePic) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    localStorage.setItem("profilePic", e.target.result);
                    profilePic.src = e.target.result;
                };
                reader.readAsDataURL(newProfilePic);
            }

            alert("Profile updated successfully!");
        });
    }
});

function saveUserData(username, profilePic) {
    localStorage.setItem("username", username);
    localStorage.setItem("profilePic", profilePic);
}

function loadUserData() {
    let username = localStorage.getItem("username") || "USER";
    let profilePic = localStorage.getItem("profilePic") || "/media/icon.png";

    document.getElementById("username").textContent = username;
    document.querySelector(".accountInformation img").src = profilePic;
}

document.addEventListener("DOMContentLoaded", loadUserData);


document.getElementById("saveProfile").addEventListener("click", () => {
    let username = document.getElementById("usernameInput").value;
    let profilePic = document.getElementById("profilePicInput").value;

    saveUserData(username, profilePic);
    loadUserData(); // Update immediately
});



document.addEventListener("DOMContentLoaded", () => {
    let username = localStorage.getItem("username");
    let profilePic = localStorage.getItem("profilePic");

    if (username) {
        document.getElementById("username").textContent = username;
    }

    if (profilePic) {
        document.getElementById("profilePicture").src = profilePic;
    }
});

