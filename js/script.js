function modalConfirmation() {
    // var
    var errorMail, regexMail, email, errorPhone1, errorPhone2, tel1, tel2, regexTel, zip, errorZip, regexZip, modale, cards;

    // test mail
    errorMail = document.querySelector('.email');
    regexMail = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
    email = document.querySelector('#email').value.toLowerCase();
    if (regexMail.test(email)) {
        errorMail.parentNode.removeChild(errorMail);
    } else return;
    //test phone number
    errorPhone1 = document.querySelector('.tel1');
    errorPhone2 = document.querySelector('.tel2');
    tel1 = document.querySelector('#tel1').value;
    tel2 = document.querySelector('#tel2').value;
    regexTel = RegExp(/^[0-9]{10}$/);
    if (regexTel.test(tel1)) {
        errorPhone1.parentNode.removeChild(errorPhone1);
    } else return
    if (regexTel.test(tel2)) {
        errorPhone2.parentNode.removeChild(errorPhone2);
    } else return
    // test zip code
    zip = document.querySelector('#zip').value;
    errorZip = document.querySelector('.zip');
    regexZip = RegExp(/(?:0[1-9]|[13-8][0-9]|2[ab1-9]|9[0-5])(?:[0-9]{3})?|9[78][1-9](?:[0-9]{2})?/);
    if (regexZip.test(zip)) {
        errorZip.parentNode.removeChild(errorZip);
    } else return
    // If all responses are OK


    modale = document.querySelector('#modaleConfimationInformationReferent');
    cards = document.querySelector('.mainsCard');
    modale.style.visibility = (modale.style.visibility == "visible") ? "hidden" : "visible";
    cards.style.visibility = (cards.style.visibility == "hidden") ? "visible" : "hidden";
}