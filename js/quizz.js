//Selection de mon formulaire dans le dom 
const form = document.querySelector("form");
console.log(form)

//création d'un objet contenant les bonnes réponses
const correctAnswers = {
    q1: "b", //Ethiopie
    q2: "b", //Kaldi
    q3: "b", //Yémen
    q4: "a", //Istanbu
    q5: "b", //Italie
}


//Creation d'un écouteur d'evenement sur mon formulaire 
form.addEventListener("submit", function (event) {
    event.preventDefault();

    //Obtenir un tableau contenant toutes les clés de l'objet.
    const questionKeys = Object.keys(correctAnswers);
    
    //Obtenir le nombre total de questions
    const totalQuestions = questionKeys.length;


    //Selection de tous les éléments ayant la classe question .
    const questions = document.querySelectorAll(".question");

    //Initialiser le score à 0 
    let score = 0

    //parcourir  chaque questions dans le tableau
    questions.forEach((question, index) => {
        console.log(index);

        //Trouver la réponse sélectionnée
        const selectedAnswer = question.querySelector("input:checked");

        //Vérifier si il y a deja un message sous la question et le supprimer
        const existingFeedback = question.querySelector(".feedback");
        if (existingFeedback) {
            existingFeedback.remove();
        }

        //Créer un élément <p> pour afficher le message 
        const answerFeedback = document.createElement("p");
        answerFeedback.classList.add("feedback");

        if (selectedAnswer) {
            // Récupérer la valeur de la réponse cochée
            let userAnswer = selectedAnswer.value;
            // Récupérer la bonne réponse
            let correctAnswer = correctAnswers[`q${index + 1}`];

            if (userAnswer === correctAnswer) {
                // Augmenter le score si c'est correct
                score++;
                answerFeedback.textContent = "✔ Bonne réponse !";
                answerFeedback.style.color = "green";
            } else {
                answerFeedback.textContent = `❌ Mauvaise réponse. La bonne réponse est : ${correctAnswer.toUpperCase()}`;
                answerFeedback.style.color = "red";
            }
        } else {
            answerFeedback.textContent = "⚠ Aucune réponse sélectionnée.";
            answerFeedback.style.color = "orange";
        }

        // Ajouter le message sous la question
        question.appendChild(answerFeedback);
    });

    // Vérifier si un message de score existe déjà et le supprimer
    const existingScoreMessage = document.querySelector(".score-message");
    if (existingScoreMessage) {
        existingScoreMessage.remove();
    }

    // Créer un élément <p> pour afficher le score final
    const scoreMessage = document.createElement("p");
    scoreMessage.classList.add("score-message"); 
    scoreMessage.style.fontWeight = "bold";
    scoreMessage.style.fontSize = "1.2em";

    // Personnalisation des messages en fonction du score
    if (score === totalQuestions) {
        scoreMessage.textContent = `🎉 Félicitations ! Tu as ${score}/${totalQuestions} bonnes réponses.`;
        scoreMessage.style.color = "green";
    } else if (score >= totalQuestions / 2) {
        scoreMessage.textContent = `👍 Pas mal ! Tu as ${score}/${totalQuestions} bonnes réponses. Encore un effort !`;
        scoreMessage.style.color = "blue";
    } else {
        scoreMessage.textContent = `😕 Dommage... Tu as seulement ${score}/${totalQuestions} bonnes réponses. Réessaie !`;
        scoreMessage.style.color = "red";
    }

    // Ajouter le message sous le formulaire
    form.appendChild(scoreMessage);
}
);


