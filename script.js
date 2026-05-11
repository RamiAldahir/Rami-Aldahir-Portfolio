document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("themeToggle");

    if (!toggle) return;

    const isLight = document.documentElement.classList.contains("light");
    toggle.checked = isLight;

    toggle.addEventListener("change", () => {
        if (toggle.checked) {
            document.documentElement.classList.add("light");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.remove("light");
            localStorage.setItem("theme", "dark");
        }
    });
});