import { getGreeting } from './getGreeting';

const $name = document.body.querySelector('.name');
const $message = document.body.querySelector('.message');

$name.addEventListener('input', function () {
  const name = this.value;
  const message = name ? getGreeting(name) : '';
  $message.textContent = message;
});
