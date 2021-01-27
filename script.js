console.log('hi');
const formEl = document.querySelector('.input');
const msgAreaEl = document.querySelector('.messagearea');
const inputTextEl = document.querySelector('.input-text');
const robotPrintEl = document.querySelector('.robot-print');

const answers = [
  'Ну фигня',
  'Витёк, бывет и хуже',
  'Класс, а расскажи еще!',
  'Нифига себе',
  'Кажется, тебе нужно выпить',
  'Да ладн'
]

formEl.addEventListener('submit', (e) => {
  e.preventDefault();
  const newMsg = document.createElement('div');
  newMsg.classList.add('message');
  newMsg.classList.add('message-user');
  newMsg.innerText = inputTextEl.value;
  msgAreaEl.appendChild(newMsg);
  msgAreaEl.lastChild.scrollIntoView();
  formEl.reset();
  robotResponse();
});

function robotResponse() {
  robotPrintEl.classList.remove('display-none');
  const randomTime = 3000 + 7000 * Math.random();
  setTimeout(()=> {
    const newMsg = document.createElement('div');
    newMsg.classList.add('message');
    newMsg.classList.add('message-robot');
    const answerNum = Math.floor(Math.random() * answers.length);
    newMsg.innerText = answers[answerNum];
    msgAreaEl.appendChild(newMsg);
    robotPrintEl.classList.add('display-none');
    msgAreaEl.lastChild.scrollIntoView();
  }, randomTime);
}