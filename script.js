const container = document.querySelector("#container");
const picContainer = document.querySelector("#picContainer");
const keyContainer = document.querySelector("#keyContainer");

const drumkit = {
    clap: "a",
    hihat: "s",
    kick: "d",
    openhat: "f",
    ride: "g",
    snare: "h",
    tink: "j",
    tom: "k"
}

for(let instrument in drumkit) {
    const drumImg = document.createElement("img");
    drumImg.classList.add("drumImg");
    drumImg.src = "./pics/" + instrument + ".png";

    drumImg.addEventListener("click", () => {
        const drumAudio = new Audio("./sounds/" + instrument + ".wav");
        drumAudio.play();
    });
    picContainer.appendChild(drumImg);

    const drumLabel = document.createElement("p");
    drumLabel.classList.add("drumLabel");
    drumLabel.textContent = drumkit[instrument];
    keyContainer.appendChild(drumLabel);
};

window.addEventListener("keydown", (e) => {
    for(key in drumkit) {
        if (drumkit[key] === e.key) {
            const audio = new Audio("./sounds/" + key + ".wav");
        audio.play();
        }
    }    
})