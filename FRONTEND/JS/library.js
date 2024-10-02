function chooseEntrance(section) {
  document.querySelector('.hist-section').style.display = 'none';
  document.querySelector('.math-section').style.display = 'none';
  document.querySelector('.sci-section').style.display = 'none';
  document.querySelector('.library-entrance').style.display = 'none';  // Hide entrance buttons

  if (section === 'hist') {
      document.querySelector('.hist-section').style.display = 'block';
  } else if (section === 'math') {
      document.querySelector('.math-section').style.display = 'block';
  } else if (section === 'sci') {
      document.querySelector('.sci-section').style.display = 'block';
  }
}

function goBack() {
  document.querySelector('.hist-section').style.display = 'none';
  document.querySelector('.math-section').style.display = 'none';
  document.querySelector('.sci-section').style.display = 'none';

  document.querySelector('.library-entrance').style.display = 'flex';
}
