// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const cardContainer = document.querySelector('.cards-container')

axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((res) => {
    //   console.log(res.data.articles.javascript);
    const articleInfo = res.data.articles;
    // console.log(Object.keys(articleInfo).map(i => articleInfo[i]))
    const articleArray = Object.keys(articleInfo).map(i => articleInfo[i]);
    // console.log(articleArray);
    articleArray.forEach((array) => {
        const insideArray = array;
        insideArray.map((object) => {
            const newArticles = createArticle(object);
            console.log(newArticles);
            cardContainer.appendChild(newArticles);

        });
        
    })
    
    
    
 })
  .catch((err) => {
    console.log('You hit an error: ', err);
 });

 function createArticle(obj){
     console.log(obj);
     const card = document.createElement('div');
     const headline = document.createElement('div');
     const author = document.createElement('div');
     const imgContainer = document.createElement('div');
     const authorImg = document.createElement('img');
     const authorName = document.createElement('span');

     card.classList.add('card');
     headline.classList.add('headline');
     author.classList.add('author');
     imgContainer.classList.add('img-container');


     headline.textContent = obj.headline;
     authorImg.textContent = obj.authorPhoto;
     authorName.textContent = 'By ' + obj.authorName;

     card.appendChild(headline);
     card.appendChild(author);
     author.appendChild(imgContainer);
     imgContainer.appendChild(authorImg);
     authorName.appendChild(imgContainer);

     return card;

 }