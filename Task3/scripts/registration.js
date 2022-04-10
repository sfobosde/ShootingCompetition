/// 220935.

var existenceSurname = "Иванов";

/// Кнопка отправить данные на форме регистрации.
var registerButton = document.getElementById("submit");

let participant;

registerButton.onclick = function() {
    var surname = document.getElementById("surname").value;
    var firstName = document.getElementById("firstName").value;
    var patronic = document.getElementById("patronic").value;
    var email = document.getElementById("email").value;
    var birthDate = document.getElementById("birthDate");

    if (!birthDate.value) {
        alert("Не введена дата рождения!");
            return;
    }

    console.log(existenceSurname == surname);

    console.log((calculate_age(new Date(birthDate)) < 18)
        ? "Зарегистрировался несовершеннолетний участник!"
        : "Регистрация совершеннолетнего участника.");

    this.participant = new Participant(surname, 
        firstName, 
        patronic, 
        email, 
        birthDate)

    console.log(typeof participant);
}

/// Объект - участник.
function Participant(surname, 
    firstName, 
    patronic, 
    email, 
    birthDate) {
    this.surname = surname;
    this.firstName = firstName;
    this.patronic = patronic;
    this.birthDate = birthDate;
    this.email = email;
}

/// Вычисление возраста участника.
/// Пример объявления функции с возвратом значения.
function calculate_age(birthDate) { 
    var diff_ms = Date.now() - birthDate;
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}