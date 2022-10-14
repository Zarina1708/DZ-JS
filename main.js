// задача 1
// напишите поведение кнопки по нажатию на нее (она выводит алертом содержимое инпута)
function effect() {
    var input = document.getElementById("but");
    alert(input.value);
}

// задача 2
// Повторите поведение кнопки по нажатию на нее (она осуществляет обмен содержимым между двумя инпутами, можете понажимать на нее несколько раз или вручную сменить содержимое инпутов)
function buttonClick() {
    var input1 = document.getElementById("input1");
    var input2 = document.getElementById("input2");

    var item1 = input1.value;
    var item2 = input2.value;
    
    input1.value = item2;
    input2.value = item1;
}