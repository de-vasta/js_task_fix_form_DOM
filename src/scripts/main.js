'use strict';

document.querySelectorAll('form .field').forEach((field) => {
  const inputEl = field.querySelector('input');
  const inputName = humanizeName(inputEl.name);

  field.insertAdjacentHTML(
    'afterbegin',
    `<label class="field-label" for="${inputEl.id}">${inputName}</label>`,
  );

  inputEl.placeholder = inputName[0].toUpperCase() + inputName.slice(1);
});

function humanizeName(str) {
  return str.replace(/([A-Z])/g, ' $1');
}
