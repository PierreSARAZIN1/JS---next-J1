const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
  ];

  console.log(entrepreneurs)
  copiedEntrepreneurs = structuredClone(entrepreneurs);
  console.log(copiedEntrepreneurs)


// Question 1.1
console.log("Sors une array qui ne contient que le prénom et le nom des entrepreneurs")

let arrayName = []

entrepreneurs.forEach(person => {
    arrayName.push(`${person.first} ${person.last}`)
})

console.log(arrayName)

// Question 1.2
console.log("Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui. Le résultat final devrait ressembler à ceci")

const arrayAge = entrepreneurs

arrayAge.forEach(person => {
    //calcul de l'age en fonction de l'année de naissance et ajout de la valeur
    person.age = 2022 - person.year;
    delete person.year ; 
})

// Affichage de l'array
console.log(arrayAge)

// Question 1.3
console.log("Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName")


arrayAge.forEach(person => {
    // Option 1 
    // person['firstName'] = person['first'];
    // person['lastName'] = person['last'];
    // delete person['first'];
    // delete person['last'];
    //________________________________________
    // Option 2 
    // person.firstName = person.first;
    // person.lastName = person.last;
    // delete person.first;
    // delete person.last;
    //________________________________________
    // Option 3 
     delete Object.assign(person, {firstName: person.first})['first'];
     delete Object.assign(person, {lastName: person.last})['last'];
})
    
// Affichage de l'array
console.log(arrayAge)

// Question 1.4
console.log("Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70")

const result = copiedEntrepreneurs.filter(person => person.year >= 1970 && person.year < 1980);
console.log(result)
