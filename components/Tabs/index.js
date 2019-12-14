// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios
  .get("https://lambda-times-backend.herokuapp.com/topics")
  .then((res) => {
    const info = (res.data.topics);
    console.log(info);
    info.forEach((article) => {
        const newArticle = tabs(article);
        title.appendChild(newArticle);
    });
    
 })
  .catch((err) => {
    console.log('You hit an error: ', err);
 });



const title = document.querySelector('.title')

function tabs(obj){
    const tab = document.createElement('div');

    tab.classList.add('tab');

    tab.textContent = obj;

    return tab
}