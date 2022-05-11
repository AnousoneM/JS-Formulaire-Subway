
// Fonction permettant de vérifier mes données entrées
function verifyInputs() {
    // déclaration des éléments
    let lastname = document.getElementById('lastname');
    let firstname = document.getElementById('firstname');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');


    // verification du nom
    // attention il s'agit d'un input, pour récupérer valeur on utilise .value
    if (lastname.value == '') {
        let lastnameError = document.getElementById('lastnameError');
        lastnameError.innerHTML = 'Veuillez saisir un nom';

    }

    // verification du prénom
    if (firstname.value == '') {
        let firstnameError = document.getElementById('firstnameError');
        firstnameError.innerHTML = 'Veuillez saisir un prénom';
    }

    // verification du email
    if (email.value == '') {
        let emailError = document.getElementById('emailError');
        emailError.innerHTML = 'Veuillez saisir un email';
    }

    // verification du password et du confirmPassword
    let passwordError = document.getElementById('passwordError');
    if (password.value == '') {
        passwordError.innerHTML = 'Veuillez saisir un mot de passe';
    } else if (confirmPassword.value == '') {
        passwordError.innerHTML = 'Veuillez confirmer votre mot de passe';
    } else if (password.value != confirmPassword.value){
        passwordError.innerHTML = 'les mots de passes sont différents';
    }











}