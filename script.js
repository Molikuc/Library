let myLibrary = [];
let arrayLength = myLibrary.length;
const addBook = document.querySelector('button');
const form = document.querySelector('form');
const title = document.getElementById('ftitle');
const author = document.getElementById('fauthor');
const pages = document.getElementById('fpages');
const newBook = document.getElementById('library');
const read = document.getElementById('fread');


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

        const test = new Book(title.value, author.value, pages.value, );

        const div = document.createElement('div');
        div.classList.add('newBook');
        const newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.textContent = title.value;

        const newAuthor = document.createElement('div');
        newAuthor.classList.add('author');
        newAuthor.textContent = author.value;

        const newPages = document.createElement('div');
        newPages.classList.add('pages');
        newPages.textContent = pages.value+' pages';
    
        newBook.appendChild(div);
        div.appendChild(newTitle);
        div.appendChild(newAuthor);
        div.appendChild(newPages);

        if(read.checked){
            const newRead = document.createElement('div');
            newRead.classList.add('read');
            newRead.textContent = read.value;
            newPages.appendChild(newRead);
        }

        const remove = document.createElement('button');
        remove.classList.add('remove');
        remove.textContent = 'Remove';
        div.appendChild(remove);
        const removeNew = document.querySelector('.remove');
        removeNew.addEventListener('click', () => {
            removeBook();
            newBook.removeChild(div);
        })


        console.log("Form has been submitted");
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

form.addEventListener("submit", (e) => {
    e.preventDefault();
    addBookToLibrary();
    console.log(myLibrary);
});

function removeBook(){
    myLibrary.pop();
    console.log(myLibrary);
}


