const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};
let arrValues = [];
for (const key in obj) {
    console.log(obj[key])
    if(Array.isArray(obj[key])){
        for (let i = 0; i < obj[key].length; i++) {
            arrValues.push(obj[key][i])
        }
    }else {
        arrValues.push(obj[key])
    }
}
console.log(arrValues)