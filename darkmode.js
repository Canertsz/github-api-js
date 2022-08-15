const darkModeElement = document.getElementById("dark-mode-toggle")

darkModeElement.addEventListener("change", darkMode)

function darkMode (e) {
    const bodyElement = document.getElementsByTagName("body")
    const errorField = document.getElementById("error-field")
    const searchUsernameTitle = document.getElementById("search-username-title")
    const searchDescription = document.getElementById("search-description")
    const githubName = document.getElementById("githubname")
    const lastRepoTitle = document.getElementById("last-repo-title")
    const lastRepoDescription = document.getElementById("last-repo-description")
    const recentSearchTitle = document.getElementById("recent-search-title")

    bodyElement[0].classList.toggle("dark")
    errorField.classList.toggle("dark-card")
    searchUsernameTitle.classList.toggle("dark-text")
    searchDescription.classList.toggle("dark-text")
    githubName.classList.toggle("dark-input dark-text")
    lastRepoTitle.classList.toggle("dark-text")
    lastRepoDescription.classList.toggle("dark-card dark-text")
    recentSearchTitle.classList.toggle("dark-text")

    e.preventDefault()
}