function enter(containerId) {
    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container, .2pics-1word-container').forEach(container => {
        container.classList.remove('active');
    });

    document.getElementById(containerId).classList.add('active');
    document.getElementById('initial-entrance').style.display = 'none';
}

function goBack() {
    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container, .2pics-1word-container').forEach(container => {
        container.classList.remove('active');
    });

    document.getElementById('initial-entrance').style.display = 'flex';
}

function twoPicsOneWord(containerId) {
    document.querySelectorAll('.lecture-container, .hands-on-container, .activity-container').forEach(container => {
        container.classList.remove('active');
    });
    
    document.getElementById(containerId).classList.add('active');
    document.getElementById('initial-entrance').style.display = 'none';
}

window.onload = function() {
    document.getElementById('initial-entrance').style.display = 'block';
}
