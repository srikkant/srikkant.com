import { initializeApp } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.5.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyBFJbVqGYB-CgDzfefT3ALFCDmHGRAjdDM",
    authDomain: "srikkant.firebaseapp.com",
    databaseURL: "https://srikkant.firebaseio.com",
    projectId: "srikkant",
    storageBucket: "srikkant.appspot.com",
    messagingSenderId: "988675320014",
    appId: "1:988675320014:web:27f383dc1e98ba081a089f",
    measurementId: "G-JP3J1L17Z4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
