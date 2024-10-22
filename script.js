// Allow dropping blocks into the program area
function allowDrop(event) {
    event.preventDefault();
}

// Handle the drop event
function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");

    // Append the dragged block to the program area
    const block = document.getElementById(data).cloneNode(true);
    block.removeAttribute('id');  // Avoid duplicate IDs in the program area
    document.getElementById("program-area").appendChild(block);
}

// Handle the drag event
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Execute the program by running the blocks in the program area
function runProgram() {
    const programArea = document.getElementById("program-area");
    const blocks = programArea.querySelectorAll('.block');
    let programCode = '';

    // Concatenate the code from each block
    blocks.forEach(block => {
        programCode += block.dataset.code + '\n';
    });

    // Run the concatenated code
    try {
        eval(programCode);
    } catch (error) {
        console.error('Error in the program:', error);
    }
}
