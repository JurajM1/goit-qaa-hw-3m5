function myFunction() {
    const element = document.getElementById("id01");
    element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
    const element = document.getElementById("id01");
    element.style.color = "red";
}

// Zadanie czesc 1 tablice podwojona liczby
// Funkcja podwajająca liczby w tablicy za pomocą map()

// const doubleNumbers = (numbers) => {
//   return numbers.map(number => number * 2);
// };

// Testowanie funkcji doubleNumbers

// const numbersArray = [1, 2, 3, 4, 5];
// console.log("Oryginalna tablica liczb:", numbersArray);
// console.log("Tablica liczb podwojonych:", doubleNumbers(numbersArray));


//------------------------------------------------------------------------
// Zadanie czesc 2 Tablice imion
// Funkcja zwracająca tablicę imion studentów z tablicy obiektów

// const getStudentNames = (students) => {
//   return students.map(student => student.name);
// };

// Testowanie funkcji getStudentNames
// const studentsArray = [
//   { id: 1, name: "Tom" },
//   { id: 2, name: "Klara" },
//   { id: 3, name: "Juraj" },
//   { id: 4, name: "Zenek" }
// ];
// console.log("Oryginalna tablica obiektów studentów:", studentsArray);
// console.log("Tablica imion studentów:", getStudentNames(studentsArray));