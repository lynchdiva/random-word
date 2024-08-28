console.log(randomWord());

function randomWord() {
  const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
  let word = '';
  let index = null;

  for (let i = 0; i < 4; i++) {
    index = Math.floor(Math.random() * alphabet.length);

    word += alphabet.slice(index, index + 1);
  }

  return word;
}
