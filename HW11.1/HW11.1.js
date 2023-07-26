document.addEventListener("DOMContentLoaded", () => {
    getArticles();
});

function getArticles() {
    let content = "";
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
            json.forEach((element) => {
                content += `
            <div class='article'>
                <h3>
                <span>${element.id}.</span>
                <span>${element.title}</span>
                </h3>
                <div>${element.body}</div>
            </div>
            `;
            });
            document.getElementById("articles").innerHTML = content;
        })
        .catch((err) => console.log(err));
}
