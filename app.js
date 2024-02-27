
// Funktion für Darkmode
function toggleDarkMode() {
    // ändert CSS zu Darkmode 
    document.querySelector('body').classList.toggle("dark-theme");

    // ändert das Darkmode Icon aus dem HTML
    var darkThemeIcon = document.getElementById('darktheme');
    if (darkThemeIcon.src.endsWith('darktheme_icon.svg')) {
      darkThemeIcon.src = './assets/darktheme_icon_reversed.svg'; // Change to the reversed icon
    } 
    else {
      darkThemeIcon.src = './assets/darktheme_icon.svg'; // Change back to the original icon
    }

}
