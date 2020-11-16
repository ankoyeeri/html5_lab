function showInfo(){
    let outpJs = document.getElementById("outpJs3");
    let form = document.forms.data;
    let email = form.elements.email.value;
    let phone = form.elements.tel.value;

    outpJs.innerHTML += "Email: " + email + "</br>";
    outpJs.innerHTML += "Телефон: " + phone  + "</br>";
}