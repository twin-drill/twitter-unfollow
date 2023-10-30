let removed = 0;

makeButton();

function makeButton() {
    const but = document.createElement("button");
    but.style["position"] = "fixed";
    but.style["top"] = "15px";
    but.style["right"] = "15px";
    but.style["background-color"] = "white";
    but.style["color"] = "black";
    but.style["border-radius"] = "3px";
    but.style["border"] = "1px solid gray";
    but.style["padding"] = "4px";
    but.textContent = "Unfollow All"

    but.onclick = () => {
        unfollow();
    }

    document.body.appendChild(but);
}

function unfollow() {

    let divs = Array.from(document.getElementsByTagName("div"));
    let targets = divs.filter((b) => b.role === "button" && b.dataset.testid && b.dataset.testid.includes("unfollow"));

    if (targets.length === 0) {
        console.log(`Completed! ${removed} removed!`);
        return;
    }

    for (let target of targets) {
        target.click();
    }

    divs = Array.from(document.getElementsByTagName("div"));
    targets = divs.filter((b) => b.role === "button" && b.dataset.testid && b.dataset.testid === "confirmationSheetConfirm")
    for (let target of targets) {
        target.click();
        removed += 1;
    }

    window.scrollBy(window.innerHeight * 2, 0);

    setTimeout(unfollow, 1000);
}
