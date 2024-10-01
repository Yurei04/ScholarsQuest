function enter(containerId) {
    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container, .typing-game-container').forEach(container => {
        container.classList.remove('active');
    });

    document.getElementById(containerId).classList.add('active');
    document.getElementById('initial-entrance').style.display = 'none';
}

function goBack() {
    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container, .typing-game-container').forEach(container => {
        container.classList.remove('active');
    });

    document.getElementById('initial-entrance').style.display = 'flex';
}

function typingGame(containerId) {
    // Hide all other containers
    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container').forEach(container => {
        container.classList.remove('active');
    });

    // Show the typing game container
    document.getElementById(containerId).classList.add('active');
    
    // Hide the initial buttons
    document.getElementById('initial-entrance').style.display = 'none';
}

window.onload = function() {
    document.getElementById('initial-entrance').style.display = 'block';
}
