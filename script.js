function checkTrafficLight() {
    var color = document.getElementById("color-input").value.trim().toLowerCase();
    var resultBox = document.getElementById("result-box");
    var img = document.getElementById("traffic-light-img");

    // Hide the result box and image initially
    resultBox.style.display = "none";
    img.style.display = "none";

    // Check the color and respond
    if (color === "red") {
        alert("Must Stop!");
        resultBox.innerHTML = "<p>The traffic light is red. You must stop!</p>";
        img.src = "https://via.placeholder.com/150/ff0000/ffffff?text=Red";
        img.style.display = "block";
        resultBox.style.display = "block";
    }
    else if (color === "yellow") {
        alert("Ready to Move...");
        resultBox.innerHTML = "<p>The traffic light is yellow. Get ready to move!</p>";
        img.src = "https://via.placeholder.com/150/ffcc00/ffffff?text=Yellow";
        img.style.display = "block";
        resultBox.style.display = "block";
    }
    else if (color === "green") {
        alert("Move Now!");
        resultBox.innerHTML = "<p>The traffic light is green. You can move now!</p>";
        img.src = "https://via.placeholder.com/150/00ff00/ffffff?text=Green";
        img.style.display = "block";
        resultBox.style.display = "block";
    }
    else {
        alert("Invalid color! Please enter 'red', 'yellow', or 'green'.");
    }
}
