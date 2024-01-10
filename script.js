//upsplash api key
const accessKey = "BvJlmezBPe-qNsBhsQnVriisdixMNTR_-o9dAlz5tYI";

//getting all the elements that im going to need to make my app functional.
const formEl = document.querySelector("form");
const inputEl = document.getElementById("search-input");
const searchResults = document.querySelector(".search-Results");
const showMore = document.getElementById("show-more-button");

//variables for search input
let inputData = "";
let page = 1; 

//function that allows api to fetch image that has been searched by user.
async function searchImages(){
    inputData = inputEl.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);
    const data = await response.json();

    const results = data.results;

    if (page === 1){
        searchResults.innerHTML = "";
    }
    results.map((result) =>{
        const imageWrapper = document.createElement('div')
        imageWrapper.classList.add("search-result")
        const image = document.createElement('img')
        image.src = result.urls.small
        image.alt = result.alt_description
        const imageLink = document.createElement('a')
        imageLink.heref= result.links.html
        imageLink.target = "_blank"
        imageLink.textContent = result.alt_description

        imageWrapper.appendChild(image)
        imageWrapper.appendChild(imageLink)
        imageWrapper.appendChild(imageWrapper)



    });
    page++
    if(page > 1){
        showMore.style.display = "block"
    }

}

formEl.addEventListener("submit", (event) =>{
    event.preventDefault()
    page = 1;
    searchImages()
})
showMore.addEventListener("click", (event) =>{
    event.preventDefault()
    page = 1;
    searchImages()
})