/// Использование jquery
var protocoles = [];

protocoles[0] = new Object({
    name: "Сидоров А.М.",
    arbalet: 45,
    pistol: 30,
    position: 1
});

protocoles[1] = new Object({
    name: "Иванов И.И.",
    arbalet: 40,
    pistol: 25,
    position: 2
});

protocoles[2] = new Object({
    name: "Петров П.П.",
    arbalet: 35,
    pistol: 20,
    position: 3
});

$('.participantRes').css('text-shadow',  '#95aeff 5px 0 20px');  

protocoles.forEach(participant => {
    setTimeout(insertPartisipant, 2000, participant);
})

function insertPartisipant(participant){
    document.getElementById("compResults").innerHTML +=
    '<tr>' + '<td>' + participant.name + '</td>' +
    '<td>' + participant.arbalet + '</td>' + 
    '<td>' + participant.pistol + '</td>' + 
    '<td>' + participant.position + '</td>' + '</tr>';
}