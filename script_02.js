const books = [
    { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
    { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
    { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
    { title: 'Les frères Karamazov', id: 450911, rented: 55 },
    { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
    { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
    { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
    { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
    { title: 'La disparition', id: 364445, rented: 33 },
    { title: 'La lune seule le sait', id: 63541, rented: 43 },
    { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
    { title: 'Guerre et Paix', id: 748147, rented: 19 }
  ];

//   copiedEntrepreneurs = structuredClone(entrepreneurs);


 // Question 2.1
console.log("Sors-moi la liste des titres des livres du CDI")

let bookList = []

books.forEach(book => {
    bookList.push(` ${book.title} `)
})

console.log(bookList)

// Question 2.2
console.log("Est-ce que tous les livres ont été empruntés au moins une fois ?")

// books.forEach(book => {
//     if (book.rented === 0) {

//         console.log('non')
//     }
//     else console.log("oui") 
// ------  sauf que ça affiche "12 oui" ------
// })

never = 0
books.forEach(book => {
    if (book.rented === 0) {
        never = 1
    }
})

if (never !==1 ){
    console.log("oui")

}
else console.log("non")

// Question 2.3

console.log("Quel est livre le plus emprunté ?")

copiedBooksRmax = structuredClone(books);

function compareMax( a, b ) {
    if ( a.rented < b.rented ){
      return 1;
    }
    if ( a.rented > b.rented ){
      return -1;
    }
    return 0;
  }
// Soumettre l'array à la méthode de comparaison
    copiedBooksRmax.sort( compareMax );
  
// console.log(copiedBooksRmax[0])
console.log(`-> ${copiedBooksRmax[0].title}`)

// Question 2.4

console.log("Quel est livre le moins emprunté ?")

copiedBooksRmin = structuredClone(books);

function compareMin( a, b ) {
    if ( a.rented < b.rented ){
      return -1;
    }
    if ( a.rented > b.rented ){
      return 1;
    }
    return 0;
  }
// Soumettre l'array à la méthode de comparaison
    copiedBooksRmin.sort( compareMin );
  
// console.log(copiedBooksRmin[0])
console.log(`-> ${copiedBooksRmin[0].title}`)

// Question 2.5

console.log("Supprime le livre avec l'ID 133712")

// books.filter(book => {
//     if (book.id === 133712
//         ) {
//         console.log(`Le livre : ** ${book.title} ** à été supprimé avec succès`)
//     }
// })
// console.log(books)

nBooks = books.filter((book) => book.id !== 133712);
console.log(nBooks);






