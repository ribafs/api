const form = document.querySelector('.searchForm');
const input = document.querySelector('.searchForm-input')

form.addEventListener('input', handleSubmit);

function handleSubmit() {
    const searchInput = input.value
    const searchQuery = searchInput.trim();
    fetchResults(searchQuery);
}

function fetchResults(searchQuery) {
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;

    fetch(endpoint)
    .then(resp => resp.json())
    .then(data => {
        const results = data.query.search;
        displayResults(results);
    })
    .catch(() => console.log('An error has occured'));
}

function displayResults(results) {
    const searchResults = document.querySelector('.searchResults');

    searchResults.innerHTML = '';

    if(input.value === '') {
        searchResults.innerHTML = ''
    } else {
        results.forEach(result => {
            const url = encodeURI(`https://en.wikipedia.org/wiki/${result.title}`);
    
            searchResults.insertAdjacentHTML('beforeend',
            `<div class=resultItem>
                <h3 class="resultItem-title>
                    <a href="${url}" target="_blank" rel="noopener">${result.title}</a>
                </h3>
                <span class="resultItem-snippet">${result.snippet}</span><br/>
                <a href="${url}" class="resultItem-link" target="_blank" rel="noopener">${url}</a>
            </div>`
            );
        });
    }
}