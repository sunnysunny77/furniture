import { events } from "./utillites.js"

export const slider_6 = () => {

    let previous;
    let count;
    let inter_id;

    const button_group = document.querySelectorAll(".button-group");
    const action_aside = document.querySelectorAll(".action-aside");

    const disabled = (bool) => {
    for (const index of button_group) {
        index.disabled = bool;
    }
    };

    const interval = () => {
    count--;

    if (count === 0) {
        clearInterval(inter_id);
        action_aside[previous].style.transition =
        "opacity 0.75s, top 0.75s, right 0.75s, bottom 0.75s, left 0.75s";
        action_aside[previous].classList.remove("has-animation");
        setTimeout(() => {
        action_aside[previous].style.transition = "none";
        }, 750);
    }
    };

    for (const [i, index] of button_group.entries()) {
        events(index, "click", function() {
        count = 12;
        clearInterval(inter_id);
        inter_id = setInterval(interval, 1000);
        disabled(true);
        setTimeout(() => {
            disabled(false);
        }, 3000);
        if (previous === undefined) {
            previous = i;
            action_aside[i].style.transition =
            "opacity 0.75s, top 0.75s, right 0.75s, bottom 0.75s, left 0.75s";
            action_aside[i].classList.add("has-animation");
            setTimeout(() => {
            action_aside[i].style.transition = "none";
            }, 750);
            return;
        }
        action_aside[previous].style.transition =
            "opacity 0.75s, top 0.75s, right 0.75s, bottom 0.75s, left 0.75s";
        action_aside[previous].classList.remove("has-animation");
        setTimeout(() => {
            action_aside[previous].style.transition = "none";
            action_aside[i].style.transition =
            "opacity 0.75s, top 0.75s, right 0.75s, bottom 0.75s, left 0.75s";
            action_aside[i].classList.add("has-animation");
            setTimeout(() => {
            action_aside[i].style.transition = "none";
            previous = i;
            }, 750);
        }, 750);
        });
    }
};