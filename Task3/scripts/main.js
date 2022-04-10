/// 220917.

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

