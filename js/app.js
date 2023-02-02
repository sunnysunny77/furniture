function remove () {
    
    const disabled = document.getElementsByClassName("disabled");
    document.getElementById("href").scrollIntoView({block: "center"});
    for (let x in disabled) {
        disabled[x].disabled = true; 
        setTimeout(function () {
            disabled[x].disabled = false;
        },15000)
    }
}

function events (obj,typ,callback,opts) {
    if (obj) {
        obj.addEventListener(typ,callback,opts);
    }
}

window.onload = function () {

    events(document.getElementById('paragraphone'),"click",function () {
        
        const buttonone = document.getElementById("buttonone");
        buttonone.classList = "animation";
        setTimeout(function () {
            buttonone.classList = "animationout";
        },15000)
        remove();
    },null);

    events(document.getElementById('paragraphtwo'),"click",function () {

        const buttonone = document.getElementById("buttontwo");
        buttonone.classList = "animation";
        setTimeout(function () {
            buttonone.classList = "animationout";
        },15000)
        remove();
    },null);

    events(document.getElementById('paragraphthree'),"click",function () {

        const buttonone = document.getElementById("buttonthree");
        buttonone.classList = "animation";
        setTimeout(function () {
            buttonone.classList = "animationout";
        },15000)
        remove();
    },null);

    events(document.getElementById('paragraphfour'),"click",function () {

        const buttonone = document.getElementById("buttonfour");
        buttonone.classList = "animation";
        setTimeout(function () {
            buttonone.classList = "animationout";
        },15000)
        remove(); 
    },null);
}