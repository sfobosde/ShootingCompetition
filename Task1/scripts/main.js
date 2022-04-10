/// 220917.

/// Кнопка "Отправить".
var submitButton = document.getElementById("submit");

/// Форма регистрации. По умолчанию скрыта.
var registration = document.getElementById("registration");

/// Кнопка "Оставить заявку".
var joinToCompButton = document.getElementById("joinToCompButton");

/// Кнопка "О мероприятии".
var aboutCompButton = document.getElementById("competitionInfo");

/// Список городов.
var cityList = document.getElementById("cityList");

/// Кнопка ""Протоколы соревнований.
var protocolesButton = document.getElementById("competitionProtocoles");

/// Таблица результатов.
var resultsTable = document.getElementById("compResults");

/// Нажатие кнопки "Отправить".
submitButton.onclick = function(){
    var surname = document.getElementById("surname").value;
    var firstName = document.getElementById("firstName").value;
    var patronic = document.getElementById("patronic").value;
    var email = document.getElementById("email").value;

    /// Можно сделать запрос к сервису из задания по C#.
}

registration.style.visibility = "hidden";

/// Нажатие кнопки "Оставить заявку".
/// Скрол до формы регистрации.
joinToCompButton.onclick = function(){
    var registrationForm = document.getElementById("registration");
    registrationForm.scrollIntoView({block: "center", behavior: "smooth"});
    registration.style.visibility = "visible";
}

cityList.style.visibility = "hidden";

/// При нажатии появится список городов.
aboutCompButton.onclick = function() {
    cityList.scrollIntoView({block: "center", behavior: "smooth"});
    cityList.style.visibility = "visible";
}

resultsTable.style.visibility = "hidden";

/// При нажатии скролл и показ таблицы.
protocolesButton.onclick = function() {
    resultsTable.scrollIntoView({block: "center", behavior: "smooth"});
    resultsTable.style.visibility = "visible";
}

