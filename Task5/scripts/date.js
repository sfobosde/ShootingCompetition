// 220917

document.title = new Date();

var compCities = [
    "Йошкар-Ола",
    "Ижевск",
    "Казань",
    "Нижний Новгород",
    "Уфа",
    "Чебоксары"
];

/// Использование forEach.
/// Вывод нумерованного списка.
compCities.forEach(compCity => {
    document.getElementById("compCity").innerHTML += '<li>' + compCity + '</li>';
});

