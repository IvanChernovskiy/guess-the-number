let name = "";
let guesses = 0;
let unknownNumber = Math.floor(Math.random() * 100);

const output = document.querySelector("#output");
const form = document.querySelector("#form");
const input = document.querySelector("#form input");
const button = document.querySelector("#button");

input.focus();

const showMessage = (message) => {
  let li = document.createElement("li");
  li.textContent = message;

  output.appendChild(li);
};

showMessage("Введите имя игрока");

const processInput = (inputValue) => {
  if (!inputValue) return;

  if (!name) {
    name = inputValue;
    clearOutput();
    showMessage(
      `${name}, загадано число от 0 до 100. Попробуй отгадать его за наименьшее количество попыток. 
      После каждой попытки я скажу "мало", "много" или "верно".`
    );
    return;
  }

  showMessage(inputValue);

  let guess = Number.parseInt(inputValue);

  if (Number.isNaN(Number(guess))) return showMessage("Введите число");
  guesses += 1;

  if (guess > unknownNumber) return showMessage("Много давай еще раз");
  if (guess < unknownNumber) return showMessage("Мало давай еще раз");
  else {
    showMessage(`
    Верно задуманное число было ${guess}. 
    Количество попыток: ${guesses}.
    GAME OVER`);
  }

  form.remove();
};

const handleSubmit = (event) => {
  event.preventDefault();
  processInput(input.value);

  input.value = "";
};

const clearOutput = () => {
  for (let i = 0; i < output.children.length; i++)
    output.removeChild(output.children[i]);
};

form.addEventListener("submit", handleSubmit);
button.addEventListener("click", handleSubmit);
