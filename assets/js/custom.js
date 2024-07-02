function getCurrentYear() {
    return new Date().getFullYear(); // Output: 2024
    
    }
    document.getElementById('current-year').textContent = getCurrentYear();