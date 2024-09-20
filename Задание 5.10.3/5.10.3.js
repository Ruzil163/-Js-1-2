let name;
    name = prompt(`введите имя`);
let data;
    data = prompt("введите год рождения");
    sum = 2024 - data
    alert(`${name}: ${sum}`);
if (isNaN(data)) {
    alert("Год должен быть числом!");
}
