const library2 = [
  {
    title: 'the adventures of kid danger',
    author: 'captain man',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'the beauty and the beast',
    author: 'disney',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'haunted house in halloween',
    author: 'scary hours',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library2[0].status.read = true;
library2[1].status.read = true;
library2[2].status.read = true;

const { title:firstbook } = library2[0];

const str2 = JSON.stringify(library2);

console.log(str2);

