import { getSingleBook } from './bookData';
import { getAuthorBooks, getSingleAuthor } from './authorData';

// prettier-ignore
const getBookDetails = async (firebaseKey) => { // the async keyword let's JS know this is asynchronous function (promise)
  const bookObject = await getSingleBook(firebaseKey); // await stops the code in this function and waits for the response. This is like using .then
  const authorObject = await getSingleAuthor(bookObject.author_id); // this function uses the data response from the bookObject

  return { ...bookObject, authorObject };
};

// prettier-ignore
const getAuthorDetails = (firebaseKey) => new Promise((resolve, reject) => {
  getSingleAuthor(firebaseKey).then((authorObject) => {
    getAuthorBooks(authorObject.firebaseKey)
      .then((authorBookObject) => resolve({ ...authorObject, authorBookObject }));
  }).catch(reject);
});

export { getBookDetails, getAuthorDetails };
