document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".item");
    const container = document.querySelector(".items");

    items.forEach(item => {
        item.setAttribute("draggable", true);

        item.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.id);
            e.target.classList.add("dragging");
        });

        item.addEventListener("dragend", (e) => {
            e.target.classList.remove("dragging");
        });
    });

    container.addEventListener("dragover", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        if (dragging) {
            dragging.style.left = `${e.clientX}px`;
            dragging.style.top = `${e.clientY}px`;
        }
    });

    container.addEventListener("drop", (e) => {
        e.preventDefault();
        const dragging = document.querySelector(".dragging");
        if (dragging) {
            dragging.style.position = "absolute";
            dragging.style.left = `${e.clientX - container.offsetLeft}px`;
            dragging.style.top = `${e.clientY - container.offsetTop}px`;
            dragging.classList.remove("dragging");
        }
    });
});
