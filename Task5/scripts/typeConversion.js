// 220953.

let participantPhone = 89530183465;
let phone = String(participantPhone);

console.log(typeof participantPhone);
console.log(typeof phone);

/// Пример приведения к числу.
let participantAge = "24";
let age = Number(participantAge);

console.log(typeof participantAge);
console.log(typeof age);

/// Пример использования null и undefined.
console.log(typeof participant);

participant = null;

console.log(participant);

/// Пример с bool.
let isUserConnected = true;

let isInstagramAvailable = false;

let contactsUrl;

let contactsButton = document.getElementById("contacts");

contactsButton.onclick = () => openContacts('https://www.instagram.com', 'https://vk.com');

/// Function Expression.
/// Цикл while, for.
/// Прерывание цикла.
/// Использование switch.
function openContacts(instUrl, vkUrl){
    while(isUserConnected) {
        let timeintervalId = setInterval(() => {
            switch (isInstagramAvailable)
                {
                    case true: {
                        contactsUrl = instUrl;
                        break;
                    }

                    case false: {
                        contactsUrl = vkUrl;
                        break;
                    }
                }
        }, 1000);

        setTimeout(() => timeintervalId(timeintervalId), 5000);

        window.open(contactsUrl, '_blank');
        break;
    }
    
}

/// Немедленно вызываемая функция.
(() => {
    console.log("Запуск программы.");
})();
