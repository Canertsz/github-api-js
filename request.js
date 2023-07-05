class Github {
  userRequest(userName) {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => {

       if (data.message === "Not Found" || userName == "") {
        const errorField = document.getElementById("error-field")
        errorField.innerHTML += `<br> <div class="alert alert-danger" role="alert">
        User not found or invalid entry
      </div>`
       }
       else {
        const profile = document.getElementById("profile");

        profile.innerHTML += 
        `
            <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-4">
                    <a href="" target = "_blank">
                    <img class="img-fluid mb-2" src="${data.avatar_url}"> </a>
                    <hr>
                    <div id="fullName"><strong>${data.login}</strong></div>
                    <hr>
                    <div id="bio">${data.bio}</div>
                </div>
                <div class="col-md-8">
                    <button class="btn btn-dark ml-2">
                    Followers  <span class="badge badge-light">${data.followers}</span>
                    </button>
                    <button class="btn ml-2" style="background-color: #FFC23C">
                    Following  <span class="badge badge-light">${data.following}</span>
                    </button>
                    <button class="btn ml-2" style="background-color: #F7CCAC">
                    Repos  <span class="badge badge-light">${data.public_repos}</span>
                    </button>
                    <hr>
                    <div>
                        <li class="list-group-item borderzero">
                            <i class="fa-solid fa-building fa-lg"></i>
                            <span class="ml-1" id="company">${data.company}</span>  
                        </li>
                        <li class="list-group-item borderzero">
                            <i class="fa-solid fa-location-dot fa-lg"></i>
                            <span class="ml-1" id="company">${data.company}</span>
                        </li>
                    </div>
                </div>
        `
       }
      });
  }

  repoRequest(userName){
    fetch(`https://api.github.com/users/${userName}/repos`)
    .then(response => response.json())
    .then((data) => {

        const repos = document.getElementById("repos")

        for(let i = 0; i < data.length; i++){
            repos.innerHTML +=
        `<div class="mb-2 card-body">
        <div class="row">
            <div class="col-md-2 p-0">
            <a href="${data[i].clone_url}" target = "_blank" id = "repoName">${data[i].name}</a>
            </div>
            <div class="col-md-6">
                <button class="btn btn-dark">
                    Star  <span class="badge badge-light" id="repoStar">${data[i].stargazers_count}</span>
                </button>

                <button class="btn ml-2" style="background-color: #FFC23C">
                    Fork  <span class="badge badge-light" id ="repoFork">${data[i].forks_count}</span>
                </button>
        
            </div>
    </div>

    </div>`
        }
    })
  }

  clearLastRepos(){
    repos.innerHTML = ""
  }

//   handleStorage(username) {
//     let usernameArray;

//     if(localStorage.getItem("users") === null ) {
//         usernameArray = []
//         usernameArray.push(username)
//         localStorage.setItem("users", usernameArray)
//     }
//     else {
//         var x = localStorage.getItem("users")
//         // localStorage.setItem("users", x)
//         console.log(typeof x)
//     }
//   }

  handleStorage(username) {
    let usernameArray;

    if(localStorage.getItem("users") === null ) {
        usernameArray = []
        usernameArray.push(username)
        localStorage.setItem("users", usernameArray)
    }
    else {
        const arrayList = localStorage.getItem("users").split()
        arrayList.push(username)
        localStorage.setItem("users", arrayList)
    }
  }

  lastSearch(searches){
    let names = []

    var word = ""

    for (let i = 0; i < searches.length; i++) {

        let char = searches[i]

        if (char != ",") {
            word = word + char
        }
        else {
            names.push(word)
            word = ""
        }
      }
    
      const lastUser = document.getElementById("last-users")

      for (let i = 0; i < names.length; i++) {
        lastUser.innerHTML += `<li class="dark-card dark-text list-group-item">${names[i]}</li>`
      }

  }

  clearInput () {
    nameInput.value = ""
  }

}