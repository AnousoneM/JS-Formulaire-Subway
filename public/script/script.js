const { ok } = require("assert");

// Fonction permettant de vérifier mes données entrées
function verifyInputs() {
    // déclaration des éléments de mon dom
    let lastname = document.getElementById('lastname');
    let firstname = document.getElementById('firstname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    let cgu = document.getElementById('cgu');

    // nous allons créer une variable nous permettant de déclencher une action quand tous les champs sont remplis
    // je le déclare en true
    let validForm = true;

    // verification du nom
    // ATTENTION il s'agit d'un input, pour récupérer valeur on utilise .value
    if (lastname.value == '') {
        let lastnameError = document.getElementById('lastnameError');
        lastnameError.innerHTML = 'Veuillez saisir un nom';

        validForm = false; // changer l'état de la variable de validation
    }

    // verification du prénom
    if (firstname.value == '') {
        let firstnameError = document.getElementById('firstnameError');
        firstnameError.innerHTML = 'Veuillez saisir un prénom';
        validForm = false;
    }

    // verification du email
    if (email.value == '') {
        let emailError = document.getElementById('emailError');
        emailError.innerHTML = 'Veuillez saisir un email';
        validForm = false;
    }

    // verification du password et du confirmPassword
    let passwordError = document.getElementById('passwordError');
    if (password.value == '') {
        passwordError.innerHTML = 'Veuillez saisir un mot de passe';
        validForm = false;
    } else if (confirmPassword.value == '') {
        passwordError.innerHTML = 'Veuillez confirmer votre mot de passe';
        validForm = false;
    } else if (password.value != confirmPassword.value) {
        passwordError.innerHTML = 'les mots de passes sont différents';
        validForm = false;
    }

    //verification de la checkBox
    // ATTENTION pour vérifier une checkbox, nous utilisons '.checked'
    if (cgu.checked == false) {
        let cguError = document.getElementById('cguError');
        cguError.innerHTML = 'Veuillez valider les CGU';
        validForm = false;
    }

    // si tout est ok, nous allons effacer le formulaire pour faire apparaitre un message de confirmation
    if (validForm != false) {
        let myForm = document.getElementById('myForm') // tout le formulaire
        myForm.style.display = 'none'
        let header = document.getElementById('header') // le titre du site
        header.style.display = 'none'
        let confirmMessage = document.getElementById('confirmMessage')
        confirmMessage.innerHTML = `
            <p class="h3 text-center">Merci <b>${firstname.value}</b>, un mail de validation a été envoyé à l'adresse <b>${email.value}</b></p>
            <a href="index.html" class="btn btn-light m-3">Retour</>
        `
    }
} // fin de ma function


// Je fais une fonction pour effacer le message d'erreur aux inputs respectifs
// exemple avec spanError = 'lastnameError'
function deleteMessageError(spanError) {
    // je cible l'id spanError respectif
    let messageError = document.getElementById(spanError) // let messageError = document.getElementById('lastnameError')
    messageError.innerHTML = '';
}
