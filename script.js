const container = document.querySelector("#container");

const drumkit = {
    clap: "a",
    hikat: "s",
    kick: "d",
    openhat: "f",
    ride: "g",
    snare: "h",
    tink: "j",
    tom: "k"
}


Object.keys(drumkit).foreach((instrument) => {
    console.log(instrument);
    const drumImg = document.createElement("img");
    drumImg.src = "./pics" + instrument + ".png";

    drumImg.addEventListener("click", () => {
        const drumAudio = new Audio("./sounds/" + instrument + ".wav");
        drumAudio.play();
    });

    container.appendChild(drumImg);

    const drumLabel = document.createElement("p");
    drumLabel.textContent = instrument[0];
    container.appendChild(drumLabel);
});
    












// TEST CODE ---------------------------------------------------------------

// for(const key in drumkit){
//     const htmlElement = document.createElement("div");
//     htmlElement.classList.add("drum"); 
//     htmlElement.style.color = "blue";
//     const image = document.createElement("img");
//     image.src = "./pics" + key + ".png";

//     image.addEventListener("click", () => {
//         const audio = new Audio("./sounds/" + key + ".wav");
//         audio.play(); 
//     })
//     htmlElement.appendChild(image);
//     const txt = document.createElement("p");
//     txt.textContent = key[0];
//     htmlElement.appendChild(txt);

//     container.appendChild(htmlElement);
//     document.body.appendChild(container);
// }

window.addEventListener("keydown", (e) => {
    for(key in drumkit) {
        if (drumkit[key] === e.key) {
            const audio = new Audio("./sounds/" + key + ".wav");
        audio.play();
        }
    }    
})