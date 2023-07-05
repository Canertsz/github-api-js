const nameInput = document.getElementById("githubname")
const userForm = document.getElementById("github-form")
const deleteSearchesItem = document.getElementById("clear-last-users")

// event listeners
userForm.addEventListener("submit", searchUser)
deleteSearchesItem.addEventListener("click", deleteSearchedUsers)

function deleteSearchedUsers () {
    localStorage.removeItem("users")

    const innerdiv = document.getElementById("innerdiv")
    innerdiv.parentNode.removeChild(innerdiv);
}

const request = new Github

function searchUser (e) {
    request.userRequest(nameInput.value)
    request.repoRequest(nameInput.value)
    request.clearLastRepos()
    request.handleStorage(nameInput.value)
    request.lastSearch(localStorage.getItem("users"))    
    request.clearInput()

    e.preventDefault()
}

window.onload = () => request.lastSearch(localStorage.getItem("users"))