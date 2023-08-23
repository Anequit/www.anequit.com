let table: HTMLTableElement;
let depth: HTMLInputElement;

window.onload = function () {
    table = document.getElementById("table") as HTMLTableElement;
    depth = document.getElementById("depth") as HTMLInputElement;

    // Execute a function when the user presses a key on the keyboard
    depth.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            (document.getElementById("generate") as HTMLButtonElement).click();
        }
    });

    let depthParameter: number | null = getURLParameter("depth");

    if (depthParameter != null) {
        if (validateDepth(depthParameter)) {
            depth.value = String(depthParameter);
            updateTable(depthParameter);
        } else {
            window.location.replace(window.location.href.split('?')[0]);
        }
    } else {
        depth.value = "12";
        updateTable(12);
    }
}

function getURLParameter(param: string) {
    let queryString = window.location.search.substring(1); // remove the "?" character
    let params = queryString.split('&'); // split by "&"

    for (let i = 0; i < params.length; i++) {
        let pair = params[i].split('='); // split by "="
        if (pair[0] == param) {
            return Number(pair[1]); // return the value of the parameter
        }
    }

    return null; // parameter not found
}

function validateDepth(value: number) {
    if (value > Number(depth.max) || value < Number(depth.min)) {
        console.log("false");
        return false;
    }

    return true;
}

function updateTable(value: number) {
    // Clear table
    table.innerHTML = "";

    for (let i = 1; i <= value; i++) {
        let row: HTMLTableRowElement = table.insertRow(i - 1);

        for (let j = 1; j <= value; j++) {
            row.insertCell(j - 1).innerHTML = (j * i).toString();
        }
    }
}