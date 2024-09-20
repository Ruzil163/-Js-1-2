let name;
    name = prompt(`введите имя`);
let ageInput;
    ageInput = prompt("введите год рождения");
if (isNaN(ageInput)){
    alert("Год должен быть числом!");
}
    age = 2024 - ageInput;
    count = age % 100;
if (count >= 5 && count <= 20) {
    alert(`${name}: ${age} лет`);
}
else {
    count = count % 10;
    if (count == 1) {
        alert(`${name}: ${age} год`);
    }
    else if (count >= 2 && count <= 4) {
        alert(`${name}: ${age} года`);
    }
    else {
        alert(`${name}: ${age} лет`);
    }
}
