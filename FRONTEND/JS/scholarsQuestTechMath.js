function enter(containerId) {
    console.log("Entering container: ", containerId); // Debugging log

    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container').forEach(container => {
        container.classList.remove('active');
    });

    // Show the selected container
    let selectedContainer = document.getElementById(containerId);
    if (selectedContainer) {
        selectedContainer.classList.add('active');
    } else {
        console.error("Container not found: ", containerId); 
    }

    document.getElementById('initial-entrance').style.display = 'none';
}

function goBack() {
    console.log("Going back to initial entrance");

    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container').forEach(container => {
        container.classList.remove('active');
    });

    document.getElementById('initial-entrance').style.display = 'flex';
}

function problemSolving(containerId) {
    console.log("Activating problem-solving-container for container: ", containerId); 

    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container').forEach(container => {
        container.classList.remove('active');
    });

    let problemSolving = document.getElementById(containerId);
    if (problemSolving) {
        problemSolving.classList.add('active');
        console.log("problem-solving-container is now active"); 
    } else {
        console.error("problem-solving-container not found: ", containerId); 
    }

    document.getElementById('initial-entrance').style.display = 'none';
    showSpells();
}


window.onload = function() {
    console.log("Page loaded");

    document.getElementById('initial-entrance').style.display = 'block';
}
