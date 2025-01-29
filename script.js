// Your code here.
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    let selected = null;
    let offsetX = 0, offsetY = 0;

    items.forEach(item => {
        item.addEventListener("mousedown", (e) => {
            selected = e.target;
            offsetX = e.clientX - selected.getBoundingClientRect().left;
            offsetY = e.clientY - selected.getBoundingClientRect().top;
            selected.style.position = "absolute";
            selected.style.zIndex = 1000;
        });
    });

    document.addEventListener("mousemove", (e) => {
        if (!selected) return;

        let container = document.querySelector(".items");
        let rect = container.getBoundingClientRect();

        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;

        // Constrain movement within the container
        let minX = rect.left;
        let minY = rect.top;
        let maxX = rect.right - selected.offsetWidth;
        let maxY = rect.bottom - selected.offsetHeight;

        if (newX < minX) newX = minX;
        if (newY < minY) newY = minY;
        if (newX > maxX) newX = maxX;
        if (newY > maxY) newY = maxY;

        selected.style.left = `${newX}px`;
        selected.style.top = `${newY}px`;
    });

    document.addEventListener("mouseup", () => {
        if (selected) {
            selected.style.zIndex = "";
            selected = null;
        }
    });
});
