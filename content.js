function skipAd() {
    // "Skip Ad" normal button
    const skipBtn = document.querySelector('.ytp-ad-skip-button');
    
    if (skipBtn) {
        skipBtn.click();
        console.log("Auto-skip clicked!");
    }

    // "Skip Ads" (when 2 ads play)
    const skipBtn2 = document.querySelector('.ytp-ad-skip-button-modern');
    
    if (skipBtn2) {
        skipBtn2.click();
        console.log("Auto-skip clicked!");
    }
}

// run every 500ms
setInterval(skipAd, 500);
