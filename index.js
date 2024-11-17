const articleContainer = document.querySelector(".container")
const searchInput = document.querySelector("#searchInput")
let articleList = null
fetch('https://671e10601dfc429919812c56.mockapi.io/api/article/articles', {
        method: 'GET',
        headers: { 'content-type': 'application/json' },
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    })
    .then((articles) => {
        //update artical list
        articleList = articles
            // Do something with the list of tasks
        renderFunction(articles)
    })
    .catch((error) => {
        // handle error
    })

function searchFunction() {
    const searchValue = searchInput.value.toLowerCase();
    console.log(searchValue)
    const articlesFilter = articleList.filter(function(article) {
        return article.title.toLowerCase().includes(searchValue)
    })
    renderFunction(articlesFilter)
}

function renderFunction(articles) {
    articleContainer.innerHTML = ""
    for (let i = 0; i < articles.length; i++) {
        const articleElement = document.createElement("div");
        articleElement.innerHTML =
            `<p class="blue">${articles[i].title}</p>
            <img class="img" src=${articles[i].image}/>`;
        articleContainer.appendChild(articleElement);
    }
}