let myLibrary = [];
let arrayLength = myLibrary.length;
const addBook = document.querySelector('button');
const form = document.querySelector('form');

addBook.addEventListener('click', () =>{
    displayForm();
})


/* Constructor */
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    myLibrary.push(this);
    this.info = function(){
        return title + " by " + author + " " + pages + " pages " + read + " read yet"
    }
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295', 'not');
/* console.log(theHobbit.info()); */

const dune = new Book('Dune', 'Frank Herbert', '412', 'not');


function addBookToLibrary(){

}

function displayArray(){
    myLibrary.forEach(function(item){
        console.log(item);
    })
}

displayArray();

function displayForm(){
   form.classList.toggle("active");
}