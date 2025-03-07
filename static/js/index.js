/**
 * @type NodeListOf<HTMLImageElement>
 */
const imgEls = document.querySelectorAll(".portal img");

let activeIdx = 0;

setInterval(() => {
    activeIdx = (activeIdx + 1) % imgEls.length;
    imgEls.forEach((el, idx) => {
        if (idx === activeIdx) el.classList.add("visible");
        else el.classList.remove("visible");
    });
}, 100); // every 100ms, change the portal image on screen
