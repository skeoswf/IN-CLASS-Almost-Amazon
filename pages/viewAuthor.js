import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

// prettier-ignore
const viewAuthor = (obj) => {
  clearDom();

  let authorBooks = '';
  obj.authorBookObject.forEach((book) => {
    authorBooks += `
      <div class="card">
        <img class="card-img-top" src="${book.image}" alt="${book.title}" style="height: 400px;">
        <div class="card-body" style="height: 180px;">
          <h5 class="card-title">${book.title}</h5>
          <p class="card-text bold">${book.sale ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Sale</span> $${book.price}` : `$${book.price}`}</p>
          <hr>
          <i class="btn btn-success fas fa-eye" id="view-book-btn--${book.firebaseKey}">View</i>
          <i id="edit-book-btn--${book.firebaseKey}" class="fas fa-edit btn btn-info">Edit</i>
          <i id="delete-book-btn--${book.firebaseKey}" class="btn btn-danger fas fa-trash-alt">Delete</i>
        </div>
      </div>`;
  });

  const domString = `
  <div class="mt-5 d-flex flex-wrap">
   <div class="d-flex flex-column">
     
   </div>
   <div class="text-white ms-5 details">
     <h5>${obj.first_name} ${obj.last_name} ${obj.favorite ? '<span class="badge bg-danger"><i class="fa fa-heart" aria-hidden="true"></i></span>' : ''}</h5>
     Author Email: <a href="mailto:${obj.email}">${obj.email}</a>
     <p class="card-text bold" style="font-size: 30px; margin-left: -18px;">${obj.favorite ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> favorited</span> ${obj.ghettofix}` : ''}</p> 
       <i id="update-author-btn--${obj.firebaseKey}" class="fas fa-edit btn btn-info">edit</i>
       <i id="delete-author--${obj.firebaseKey}" class="btn btn-danger fas fa-trash-alt">delete</i>
     <hr>   
      </div>
      <div class="text-white ms-5 details">
      <h5>Books</h5>
      <div class="d-flex flex-wrap">
        ${authorBooks}
      </div>
    </div>
  </div>`;

  renderToDOM('#view', domString);
  console.warn(obj);
};

export default viewAuthor;
