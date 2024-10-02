function enter(containerId) {
    console.log("Entering container: ", containerId); // Debugging log

    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container, .twoPics-oneWord-container').forEach(container => {
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

    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container, .twoPics-oneWord-container').forEach(container => {
        container.classList.remove('active');
    });

    document.getElementById('initial-entrance').style.display = 'flex';
}

function twoPicsOneWord(containerId) {
    console.log("Activating twoPicsOneWord for container: ", containerId); 

    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container').forEach(container => {
        container.classList.remove('active');
    });

    let twoPicsContainer = document.getElementById(containerId);
    if (twoPicsContainer) {
        twoPicsContainer.classList.add('active');
        console.log("twoPics-oneWord-container is now active"); 
    } else {
        console.error("twoPics-oneWord-container not found: ", containerId); 
    }

    document.getElementById('initial-entrance').style.display = 'none';
    showSpells();
}

function showSpells() {
    let spellContainer = document.querySelector('.spells');
    if (spellContainer) {
        spellContainer.classList.add('active'); 
        console.log("Spells container is now active"); 
    } else {
        console.error("Spells container not found!"); 
    }
}

window.onload = function() {
    console.log("Page loaded");

    document.getElementById('initial-entrance').style.display = 'block';

    let spellContainer = document.querySelector('.spells');
    if (spellContainer) {
        spellContainer.classList.remove('active');
    } else {
        console.error("Spells container not found on page load!");
    }
}
