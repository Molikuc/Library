let myLibrary = [];
let arrayLength = myLibrary.length;
const addBook = document.querySelector('button');
const form = document.querySelector('form');
const ftitle = document.getElementById('ftitle');
const fauthor = document.getElementById('fauthor');
const fpages = document.getElementById('fpages');
const container = document.getElementById('library');
const fread = document.getElementById('fread');


addBook.addEventListener('click', () =>{
    displayForm();
})

function displayForm(){
    form.classList.toggle("active");
 }
 

/* Constructor */
function Book(){
    this.title = ftitle.value,
    this.author = fauthor.value,
    this.pages = fpages.value,
    this.read = fread.checked == true ? "read" : "not read";
}

Book.prototype.changeStatus = function(){
    (this.read == "read") ? (this.read = "not read"): (this.read = 'read');
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if(ftitle.value === "" ){
        alert('We need a full Book information');
    } else if(fauthor.value === ""){
        alert('We need a full Book information');
    } else if(fpages.value === ""){
        alert('We need a full Book information');
    } else {
        addBookToLibrary();
    }
});

function addBookToLibrary(){
    let newBook = new Book();
    myLibrary.push(newBook);
    refreshLibrary();
}

function renderLibrary(){
    for(i = 0; i < myLibrary.length; i++){
        renderCard(i);
     }

     const readBtn = document.getElementsByClassName('read-btn');
     for(let i = 0; i < readBtn.length; i++){
         readBtn[i].addEventListener('click', (e) => {
             let index = e.target.parentNode.getAttribute('data');
             myLibrary[index].changeStatus();
             refreshLibrary();
         });
     }

     const removeBtn = document.getElementsByClassName('remove');
     for (let j = 0; j < removeBtn.length; j++){
         removeBtn[j].addEventListener('click', removeBook);
     }
}

function renderCard(i){
        const card = document.createElement('div');
        card.classList.add('newBook');
        card.setAttribute('data', i);

        const newTitle = document.createElement('div');
        newTitle.classList.add('title');
        newTitle.textContent = myLibrary[i].title;

        const newAuthor = document.createElement('div');
        newAuthor.classList.add('author');
        newAuthor.textContent = myLibrary[i].author;

        const newPages = document.createElement('div');
        newPages.classList.add('pages');
        newPages.textContent = myLibrary[i].pages+' pages';

        const newRead = document.createElement('button');
        newRead.classList.add('read-btn');
        newRead.setAttribute('type', 'button');
        if(myLibrary[i].read == 'read'){
            newRead.style.backgroundColor="#43AD36";
        }else{
            newRead.style.backgroundColor="#AD3636";
        }
        newRead.textContent = myLibrary[i].read;

    
        container.appendChild(card);
        card.appendChild(newTitle);
        card.appendChild(newAuthor);
        card.appendChild(newPages);
        card.appendChild(newRead);
        

        const remove = document.createElement('button');
        remove.setAttribute('type', 'button');
        remove.classList.add('remove');
        remove.textContent = 'Remove';
        card.appendChild(remove);


        console.log("Form has been submitted");

}

function removeBook(e){
    let index = e.target.parentNode.getAttribute('data');
    myLibrary.splice(index, 1);
    refreshLibrary();
}

function removeCards(){
    const books = container.querySelectorAll('.newBook');

    books.forEach((book) => {
        container.removeChild(book);
    })
}

function refreshLibrary(){
    removeCards();
    renderLibrary()
}
