// My solution

let x;

const library = [
  {
    title: {
      BookTitle: 'Dongabes The Champ',
    },
  },
  {
    author: 'Dongabes',
  },
  {
    status: {
      own: true,
      reading: false,
      read: false,
    },
 }
]

x = library[2].own;

library[2].read = true;

// x = typeof library[2].read;
// const { BookTitle } = title;

const str = JSON.stringify(library);

console.log(str);

