window.addEventListener("load", registerEvents, false);

function registerEvents() {
    updateFooter();
    getAge();
}

function getAge() {
    var currentDate = new Date();
    var birthday = new Date("1998-07-04");

    var age = currentDate.getFullYear() - birthday.getFullYear();

    if ((currentDate.getDay() < birthday.getDay() && currentDate.getMonth() == birthday.getMonth()) || currentDate.getMonth() < birthday.getMonth())
        age--;

console.log(document.getElementById("age").innerHTML);
    document.getElementById("age").innerHTML = age;
}

function updateFooter() {
    var currentYear = new Date().getFullYear();

    document.getElementsByTagName("footer")[0].innerHTML = "&copy; Remco Vogelzang 2018 - " + currentYear;
}