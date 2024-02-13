// Define your Book class here:

class Book{
    constructor(title, author, copyright,isbn, pages, timesCheckedOut, discarded)
    {
        this.title = title;
        this.author = author;
        this.copyright = copyright;
        this.isbn = isbn;
        this.pages=pages;
        this.timesCheckedOut=timesCheckedOut;
        this.discarded=discarded;
    }
    checkOut(uses=1)
    {
        this.timesCheckedOut += uses;
    }
}

// Define your Manual and Novel classes here:

class Manual extends Book{
    constructor(title, author, copyright,isbn, pages, timesCheckedOut, discarded)
    {
        super(title, author, copyright,isbn, pages, timesCheckedOut, discarded);
    }
    dispose(currentYear)
    {
        if(currentYear-this.copyright>5)
        {
            this.discarded='Yes';
        }
    }
}
class Novels extends Book{
    constructor(title, author, copyright,isbn, pages, timesCheckedOut, discarded)
    {
        super(title, author, copyright,isbn, pages, timesCheckedOut, discarded);
    }
    dispose()
    {
        if(this.timesCheckedOut>100)
        {
            this.discarded='Yes';
        }
    }
}


// Declare the objects for exercises 2 and 3 here:

let Book1 = new Novels('Pride and Prejudice','Jane Austen',1813,'1111111111111',432,32,'No');
let Book2 = new Manual('Top Secret Shuttle Building Manual','Redacted',2013,'0000000000000',1147,1,'No')
// Code exercises 4 & 5 here:
Book2.checkOut(5);
Book2.dispose();
console.log(Book2);
console.log(Book1);