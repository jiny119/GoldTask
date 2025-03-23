function watchAds() {
    window.open("https://example.com/ads", "_blank");
}

function playGame() {
    window.open("https://www.gamee.com", "_blank");
}

function installApp() {
    window.open("https://play.google.com/store/apps/details?id=com.example.app", "_blank");
}

function openSurvey() {
    window.open("https://www.youtube.com/@YourChannel", "_blank");
}

function openSettings() {
    alert("Settings Page: Sound Change, Theme Change, Login, Logout.");
}

function checkReferrals() {
    alert("Referral System: You need 10 referrals & 5 clicks for withdrawal.");
}

function withdraw() {
    let coins = 15000;  
    let referrals = 10;  
    let clicks = 5;  

    if (coins >= 15000 && referrals >= 10 && clicks >= 5) {
        alert("Withdrawal Successful: Choose JazzCash, EasyPaisa, Payoneer, or PayPal.");
    } else {
        alert("You need at least 15,000 coins, 10 referrals, and 5 clicks.");
    }
}
