let table;
let depth;

window.onload = function () {
    table = document.getElementById("table");
    depth = document.getElementById("depth");

    // Execute a function when the user presses a key on the keyboard
    depth.addEventListener("keypress", function (event) {
        // If the user presses the "Enter" key on the keyboard
        if (event.key === "Enter") {
            // Cancel the default action, if needed
            event.preventDefault();
            // Trigger the button element with a click
            document.getElementById("generate").click();
        }
    });

    let depthParameter = getURLParameter("depth");

    if (depthParameter != null) {
        if (validateDepth(depthParameter)) {
            depth.value = depthParameter;
            updateTable(depthParameter);
        } else {
            window.location = window.location.href.split('?')[0];
        }

    }
}

function getURLParameter(param) {
    let queryString = window.location.search.substring(1); // remove the "?" character
    let params = queryString.split('&'); // split by "&"

    for (let i = 0; i < params.length; i++) {
        let pair = params[i].split('='); // split by "="
        if (pair[0] == param) {
            return pair[1]; // return the value of the parameter
        }
    }

    return null; // parameter not found
}

function centerStr(str, maxLength) {
    return str.padStart(Math.ceil((str.length + maxLength) / 2), " ").padEnd(maxLength, " ");
}

function validateDepth(value) {
    if (value > Number(depth.max) || value < Number(depth.min)) {
        console.log("false");
        return false;
    }

    return true;
}

function updateTable(value) {
    // clear previous table
    table.innerHTML = "";

    for (let i = 1; i <= value; i++) {
        let line = "";

        for (let j = 1; j <= value; j++) {
            line += centerStr((j * i).toString(), 5);
        }

        table.textContent += line + "\n";
    }
}