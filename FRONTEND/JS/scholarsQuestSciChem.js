function enter(containerId) {
    console.log("check1")
    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container, .twoPics-oneWord-container').forEach(container => {
        container.classList.remove('active');
    });


    document.getElementById(containerId).classList.add('active');
    document.getElementById('initial-entrance').style.display = 'none';
}

function goBack() {
    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container, .twoPics-oneWord-container').forEach(container => {
        container.classList.remove('active');
    });

    document.getElementById('initial-entrance').style.display = 'flex';
}

function twoPicsOneWord(containerId) {
    console.log("check2")
    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container').forEach(container => {
        container.classList.remove('active');
    });

    document.getElementById(containerId).classList.add('active');
    document.getElementById('initial-entrance').style.display = 'none';

    showSpells();
}

function showSpells() {
    let spellContainer = document.querySelector('.spells');
    if (spellContainer) {
        spellContainer.style.display = 'block'; 
    }
}

window.onload = function() {
    document.getElementById('initial-entrance').style.display = 'block';

    let spellContainer = document.querySelector('.spells');
    if (spellContainer) {
        spellContainer.style.display = 'none';
    }
}
