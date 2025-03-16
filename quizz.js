//Selection de mon formulaire dans le dom 
const form = document.querySelector("form");
console.log(form)

//création d'un objet contenant les bonnes réponses
const correctAnswers = {
    q1: "b", //Ethiopie
    q2: "b", //Kaldi
    q3: "b", //Yémen
    q4: "a", //Istanbul
}
console.log(correctAnswers)

//Creation d'un écouteur d'evenement sur mon formulaire 
form.addEventListener("submit", (event) => { //!! PROBLEME
    event.preventDefault();

    //Obtenir un tableau contenant toutes les clés de l'objet.
    const questionKeys = Object.Keys(correctAnswers);
    //Obtenir le nombre d'éléments dans le tableau en question 
    const totalQuestions = questionKeys.lenght;
    console.log(totalQuestions);

    //Selection de tous les éléments ayant la classe question .
    const question = document.querySelectorAll(".question");
    console.log(question)
});