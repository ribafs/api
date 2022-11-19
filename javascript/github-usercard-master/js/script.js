function getGit() {
    const myFollowers = document.querySelector('#my-followers')
    const myName = document.querySelector('#my-name')
    const myBio = document.querySelector('#my-bio')
    const myPicture = document.querySelector('#my-picture')
    const followMe = document.querySelector('#following')
    const myRepos = document.querySelector('#my-repos')
    const inputUsername = document.querySelector('#input-username')

    inputUsername.addEventListener('change', handleInput)

    function handleInput(event) {
        inputValue = event.target.value 

        async function fethingUser() {
            const api = await (await fetch(`https://api.github.com/users/${inputValue}`)).json()
            const {name, bio, followers, avatar_url, following, public_repos} = api
            myFollowers.textContent = followers
            myBio.textContent = bio
            myName.textContent = name
            myPicture.innerHTML = `<img src="${avatar_url}" id="my-picture" />`
            followMe.textContent = following
            myRepos.textContent = public_repos
        }
        fethingUser()
    }
  };

function start() {
	getGit()
	preventFormSubscript()
}

start()

function preventFormSubscript() {
    function handleFormSubmit(event) {
        event.preventDefault() 
    }

    var form = document.querySelector('form')
    form.addEventListener('submit', handleFormSubmit)
}
