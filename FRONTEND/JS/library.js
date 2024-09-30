function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
  }
  
  let spines = Object.values(document.getElementsByClassName("spine"));
  let covers = Object.values(document.getElementsByClassName("cover"));
  let tops = Object.values(document.getElementsByClassName("top"));
  
  let availablePatterns = [
    "--spine-pyramid",
    "--spine-stairs",
    "--spine-argyle",
    "--spine-tartan"
  ];
  
  let availableColors = [
    "maroon",
    "darkgreen",
    "darkolivegreen",
    "brown",
    "saddlebrown",
    "sienna",
    "midnightblue",
  ];

  spines.map(function (s, i) {
    let randomHeight = getRandomInt(220, 290);
    s.style.height = `${randomHeight}px`;
    s.style.top = `${280 - randomHeight}px`;
  
    let randomPattern = randomChoice(availablePatterns);
    s.style.backgroundImage = `var(${randomPattern})`;
  
    let randomColor = randomChoice(availableColors);
    s.style.backgroundColor = randomColor;
  
    covers[i].style.height = `${randomHeight}px`;
    covers[i].style.top = `${280 - randomHeight}px`;
  
    tops[i].style.top = `${280 - randomHeight}px`;
  });


  import { books } from "../../BACKEND/dataBase.js";

let subject;

function chooseEntrance(button) {
  subject = button.value;

  if (subject === "sci") {
    sciDisplay();
    openData(books.science, 'sci');
  } else if (subject === "tech") {
    techDisplay();
    openData(books.Mathematics, 'tech'); 
  } else if (subject === "hist") {
    histDisplay();
    openData(books.Literature, 'hist');
  }
}

function openData(data, sectionId) {
  const section = document.getElementById(sectionId);
  
  // Clear previous content
  section.innerHTML = "";

  data.forEach((book, index) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    const bookTitle = document.createElement('span');
    bookTitle.classList.add('spine-title');
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement('span');
    bookAuthor.classList.add('spine-author');
    bookAuthor.textContent = `by ${book.author}`;

    // Add event listener to open the book pages on click
    bookDiv.addEventListener('click', () => renderBookPages(book, sectionId));

    // Append title and author to the book div
    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);

    // Append book div to the section
    section.appendChild(bookDiv);
  });
}

function renderBookPages(book, sectionId) {
  const section = document.getElementById(sectionId);

  // Clear section and create the book layout
  section.innerHTML = "";
  
  const coverInner = document.createElement('div');
  coverInner.classList.add('cover-inner');

  const bookInner = document.createElement('div');
  bookInner.classList.add('book-inner');

  book.pages.forEach((pageContent, pageIndex) => {
    const label = document.createElement('label');
    label.setAttribute('for', `page-${pageIndex + 1}`);
    label.classList.add('book__page', `book__page--${pageIndex + 1}`);

    const pageDiv = document.createElement('div');
    pageDiv.classList.add('page__content');
    
    // Add content for each page
    const pageNumber = document.createElement('div');
    pageNumber.classList.add('page__number');
    pageNumber.textContent = pageIndex + 1;

    const pageText = document.createElement('p');
    pageText.textContent = pageContent; // Page content from book.pages array

    pageDiv.appendChild(pageText);
    pageDiv.appendChild(pageNumber);
    label.appendChild(pageDiv);

    // Append the label to the book inner
    bookInner.appendChild(label);

    // Add radio buttons to navigate between pages
    const input = document.createElement('input');
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'page');
    input.setAttribute('id', `page-${pageIndex + 1}`);

    coverInner.appendChild(input);
  });

  coverInner.appendChild(bookInner);
  section.appendChild(coverInner);
}

function histDisplay() {
  document.getElementById("hist").style.display = "block";
  document.getElementById("sci").style.display = "none";
  document.getElementById("tech").style.display = "none";
}

function sciDisplay() {
  document.getElementById("sci").style.display = "block";
  document.getElementById("hist").style.display = "none";
  document.getElementById("tech").style.display = "none";
}

function techDisplay() {
  document.getElementById("tech").style.display = "block";
  document.getElementById("sci").style.display = "none";
  document.getElementById("hist").style.display = "none";
}

function goBackToEntrances() {
  document.getElementById('library-section').style.display = 'none';
  document.getElementById('entrance-section').style.display = 'block';
}

function goBackToBookshelf() {
  document.getElementById('book-reader-section').style.display = 'none';
  document.getElementById('library-section').style.display = 'block';
}
