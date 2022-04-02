class UI {
  constructor() {
    this.profile = document.querySelector(".githubProfile")
  }

  showProfile(user) {
    this.newDate = new Date(`${user.created_at}`).toLocaleString()
    this.profile.innerHTML = `
     <section class="profileSection">
        <article class="profile">
          <figure>
            <img class="avatarUrl" src="${user.avatar_url}"/>
          </figure>
          <div class="profileData">
            <h4>${user.name}</h4>
            <p class="userName">${user.login}</p>
            <p class="dateJoin">${this.newDate}</p>
          </div>
        </article>
        <article class="profileBio">
          ${user.bio}
        </article>
        <section class="overview">
          <article class="profileHistory">
            <h5>Repos</h5>
            <p>${user.public_repos}</p>
          </article>
          <article>
            <h5>Followers</h5>
            <p>${user.followers}</p>
          </article>
          <article>
            <h5>Following</h5>
            <p>${user.following}</p>
          </article>
        </section>
        <section class="profileLinks">
          <ul id="profileInfo">
            <li class="profileInfoItem">
              <i class="fa-solid fa-location-dot"></i>
              <a>${user.location}</a>
            </li>
            <li class="profileInfoItem">
              <i class="fa-solid fa-link"></i>
              <a href="${user.html_url}" target="_blank">${user.html_url}</a>
            </li>
            <li class="profileInfoItem">
              <i class="fa-brands fa-twitter"></i>
              <a href="http://twitter.com/${user.twitter_username}">${user.twitter_username}</a>
            </li>
            <li class="profileInfoItem">
              <i class="fa-brands fa-github-alt"></i>
              <a href="${user.html_url}" target="_blank">${user.html_url}</a>
            </li>
          </ul>
        </section>    
     </section>
 
  `
  }
  //Show Alert

  // Clear Profile
  // clearProfile() {
  //   this.profile.innerHTML = ""
  // }
}
