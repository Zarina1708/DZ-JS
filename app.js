document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

generate = () => {
  var quotes = {
        "- ZZ":
          '"Ясно только солнце, все остальное вообще не ясно."',
        "- ZZ":
          '"Любите искусство в себе, а не себя в искусстве."',
        "- ZZ":
          '"Сам себе патронус."',
        "- ZZ":
          '"И пусть все сложное станет простым."',
        "- ZZ":
          '"Люблю запах возможностей по утром."',
        "- ZZ":
          '"Даже если я ошибаюсь, дай мне ошибиться."',
        "- ZZ":
          '"Каждый бережет тебя настолько, насколько нуждается в тебе."',
        "- ZZ":
          '"В мире полном разочарований, оставайся моим светом."',
        "- ZZ": '"Не останавливайся, пока не будешь собой гордиться. "',
        "- ZZ":
          '"Цените свой покой больше, чем мнение людей."',
        "- ZZ":
          '"Пусть будет у вас человек из-за которого хочется меньше сидеть в телефоне."',
        "- ZZ":
          '"Где интерес, там и энергия."',
        "- ZZ":
          '"Порою нужен сбой в системе, и шаг на ощупь в темноте...  А иногда, побыть не с теми, чтобы, наконец, понять, кто те. "',

 };

  var authors = Object.keys(quotes);

  var author = authors[Math.floor(Math.random() * authors.length) ];

  var quote = quotes[author];

  document.querySelector("#quote").textContent = quote;
  document.querySelector("#author").textContent = author;
};










const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

let current = 0

generate = () => {
    var quotes;
    quotes = {
        "- ZZ":
          '"Ясно только солнце, все остальное вообще не ясно."',
        "- ZZ":
          '"Любите искусство в себе, а не себя в искусстве."',
        "- ZZ":
          '"Сам себе патронус."',
        "- ZZ":
          '"И пусть все сложное станет простым."',
        "- ZZ":
          '"Люблю запах возможностей по утром."',
        "- ZZ":
          '"Даже если я ошибаюсь, дай мне ошибиться."',
        "- ZZ":
          '"Каждый бережет тебя настолько, насколько нуждается в тебе."',
        "- ZZ":
          '"В мире полном разочарований, оставайся моим светом."',
        "- ZZ": '"Не останавливайся, пока не будешь собой гордиться. "',
        "- ZZ":
          '"Цените свой покой больше, чем мнение людей."',
        "- ZZ":
          '"Пусть будет у вас человек из-за которого хочется меньше сидеть в телефоне."',
        "- ZZ":
          '"Где интерес, там и энергия."',
        "- ZZ":
          '"Порою нужен сбой в системе, и шаг на ощупь в темноте...  А иногда, побыть не с теми, чтобы, наконец, понять, кто те. "',

 };

    var authors = Object.keys(quotes);

    var author = authors[current];

    var quote = quotes[author];

    document.querySelector("#quote").textContent = quote;
    document.querySelector("#author").textContent = author;
};

next.addEventListener('click', () => {
    current += 1
    if (current > 12){
        return false
    };
    generate()
 } );
prev.addEventListener('click', () => {
    current -= 1
    if (current < 0) {
        return false
    };
    generate()
 } );

