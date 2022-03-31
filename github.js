class Github {
  constructor() {
    this.client_id = "ea01102862dbd67c2a1b"
    this.client_secret = "98f7761c088233d1321589a98cb87df209e4dae5"
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    )
    const profile = await profileResponse.json()
    return {
      profile,
    }
  }
}
