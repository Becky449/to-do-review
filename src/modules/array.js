import { saveLocal } from './crud.js';

export function add(list) {
  list.push({ description: document.querySelector('#input-field').value, isCompleted: false, index: list.length + 1 });
  document.querySelector('#input-field').value = '';
  saveLocal(list);
}

export function updateIndex(list) {
  let i = 1;
  list.forEach((elem) => {
    elem.index = i;
    i += 1;
  });
}

export function removeDone(list) {
  list = list.filter((elem) => elem.isCompleted === false);
  updateIndex(list);
  saveLocal(list);
}