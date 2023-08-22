const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.info = function () {
    return `${title}, ${author}, ${pages} pages, ${read}.`
  }

}

function addBookToLibrary(book) {
  myLibrary.push(book)
  console.log(myLibrary)
}



const myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // Handle form submission here
  title = document.getElementById("title").value;
  author = document.getElementById("author").value;
  pages = document.getElementById("pages").value;
  read = document.getElementById("read");

  if (read.checked == true) {
    box = true;
  } else {
    box = false;
  }

  // After handling submission, you might want to close the popup
  popupForm.style.display = "none";
  document.getElementById("myForm").reset();
  const bookTitle = new Book(title, author, pages, box);
  addBookToLibrary(bookTitle)
  listBooks()
});

function listBooks() {
  for (let i = 0; i <= myLibrary.length; i++) {
    if (myLibrary[i]) {
      currentBook = document.getElementsByClassName(`book${i + 1}`)
      let title = myLibrary[i].title;
      let author = myLibrary[i].author;
      let pages = myLibrary[i].pages;
      let read = myLibrary[i].read;
      titleElement = document.getElementById(`book${i + 1}-title`);
      console.log(titleElement)
      titleElement.textContent = title;
      console.log(read)
      authorElement = document.getElementById(`book${i + 1}-author`);
      authorElement.textContent = author;

      pagesElement = document.getElementById(`book${i + 1}-pages`);
      pagesElement.textContent = pages;

      if (read == true) {
        pagesElement = document.getElementById(`book${i + 1}-read`);
        pagesElement.textContent = "I have read.";
      } else {
        pagesElement = document.getElementById(`book${i + 1}-read`);
        pagesElement.textContent = "I have not read.";
      }

      document.getElementById(`book${i + 1}`).style.display = "flex";
    }

  }
}

// const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 266, "I have not read")

// const bible = new Book("The Bible", "God", "1000", "I mostly read")

// console.log(theHobbit.info())

// addBookToLibrary(theHobbit)
// addBookToLibrary(bible)
// console.log(myLibrary)




function openForm() {
  console.log("opened")
  document.getElementById("popupForm").style.display = "block";
}

function closeForm() {
  document.getElementById("popupForm").style.display = "none";
}

function toggleRead(number) {
  book = `book${number}-read`
  bookLocation = document.getElementById(book)
  if (bookLocation.textContent != "I have not read.") {
    bookLocation.textContent = "I have not read."
  } else {
    bookLocation.textContent = "I have read."
  }
}