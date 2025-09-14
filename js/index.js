document.addEventListener("DOMContentLoaded", () => {
    // Tab switching
    const tabs = ["home", "about", "contact"];
    const topBtns = document.querySelectorAll(".top-btn");

    topBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const tabId = btn.getAttribute("data-tab");
            tabs.forEach(id => {
                document.getElementById(id).style.display = (id === tabId) ? "block" : "none";
            });
            topBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });

    // Entire box toggle
    const boxes = document.querySelectorAll(".info-box");
    boxes.forEach(box => {
        box.addEventListener("click", () => {
            box.classList.toggle("open");
        });
    });

    // Separator gradient following mouse
    const separator = document.querySelector(".separator");
    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const width = window.innerWidth;
        const percent = (mouseX / width) * 100;
        separator.style.background = `linear-gradient(to right, #111 0%, #fff ${percent}%, #111 100%)`;
    });

    // Radial gradient effect
    function updateSeparator() {
        const activeBtn = document.querySelector(".top-btn.active");
        if (!separator || !activeBtn) return;

        applyRadialGradient(separator, {
            centerEl: activeBtn,
            innerColor: "#fff",
            outerColor: "#111",
            innerRadius: 0,
            outerRadius: 25
        });
    }

    updateSeparator();
    topBtns.forEach(btn => btn.addEventListener("click", updateSeparator));
    window.addEventListener("resize", updateSeparator);
});
