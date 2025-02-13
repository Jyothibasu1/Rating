// // To access the stars
// let stars = document.getElementsByClassName("star");
// let output = document.getElementById("output");

// // Function to update rating
// function bjb(n){
//    remove();
//    for (let i = 0; i < n; i++){
//     if (n == 1) cls = "one";
//     else if (n == 2) cls = "two";
//     else if (n == 3) cls = "three";
//     else if (n == 4) cls = "four";
//     else if (n == 5) cls = "five";
//     else if (n == 6) cls = "six";
//     stars[i].className = "star" + cls;
//    }
//    output.innerHTML = "Rating is: "+ n + "/5";
// }
// // To remove the pre-applied styling
// function remove(){
//     let i = 0;
//     while (i < 5){
//         stars[i].className = "star";
//         i++;
//     }
// }


// To access the stars
let stars = document.getElementsByClassName("star");
let output = document.getElementById("output");

// Function to update rating
function bjb(n) {
    remove();  // Clear previous styles
    
    // Iterate over the stars
    for (let i = 0; i < n; i++) {
        let cls = "";
        
        // Fixed mistake: The class should depend on the index (i) rather than n.
        if (i === 0) cls = "one";        // First star gets "one"
        else if (i === 1) cls = "two";   // Second star gets "two"
        else if (i === 2) cls = "three"; // Third star gets "three"
        else if (i === 3) cls = "four";  // Fourth star gets "four"
        else if (i === 4) cls = "five";  // Fifth star gets "five"
        
        stars[i].classList.add(cls); // Use classList to add the color class
    }

    output.innerHTML = "Rating is: " + n + "/5";  // Update the displayed rating
}

// To remove the pre-applied styling
function remove() {
    // Loop through all stars and remove the color classes
    for (let i = 0; i < 5; i++) {
        stars[i].classList.remove("one", "two", "three", "four", "five"); // Clear color classes
    }
}
