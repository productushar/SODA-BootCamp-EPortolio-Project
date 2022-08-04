/* This is the Javascript file responsible for displaying the GITHUB projects on the projects.html webpage */

const GITHUB_USERNAME = "prouductushar"
fetch('https://api.github.com/users/prouductushar/repos')
    .then(response => response.json())
    .then(repos => {
        for (const repo of repos) {
            const repoName = repo.name
            const repoDescription = repo.description
            const repoURL = repo.html_url
            const repoLanguage = repo.language

            const cardContainer = document.createElement('div')
            cardContainer.className = "card center"
            const cardImage = document.createElement('img')
            cardImage.src = "generic_code_bgrnd.jpg"
            cardImage.className = "project-image"

            cardContainer.appendChild(cardImage)

            const projectInfoContainer = document.createElement('div')
            projectInforContainer = "project-info-container"

            const projectTitle = document.createElement('h3')
            projectTitle.textContent = repoName

            const projectDescription = document.createElement('p')
            projectDescription.textContent = repoDescription

            const projectURL = document.createElement('a')
            projectURL.href = repoURL
            projectURL.target = "_blank"
            projectURL.appendChild(projectTitle)

            const projectLanguage = document.createElement('p')
            projectLanguage.textContent = repoLanguage

            projectInfoContainer.appendChild(projectURL)
            projectInfoContainer.appendChild(projectDescription)
            projectInfoContainer.appendChild(projectLanguage)

            cardContainer.appendChild(projectInfoContainer)

            const projectsContainer = document.getElementById('projects_container')
            projectsContainer.appendChild(cardContainer)
        }
    })