require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const jsonData={
  "login": "zohaib479",
  "id": 141903393,
  "node_id": "U_kgDOCHVGIQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/141903393?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/zohaib479",
  "html_url": "https://github.com/zohaib479",
  "followers_url": "https://api.github.com/users/zohaib479/followers",
  "following_url": "https://api.github.com/users/zohaib479/following{/other_user}",
  "gists_url": "https://api.github.com/users/zohaib479/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/zohaib479/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/zohaib479/subscriptions",
  "organizations_url": "https://api.github.com/users/zohaib479/orgs",
  "repos_url": "https://api.github.com/users/zohaib479/repos",
  "events_url": "https://api.github.com/users/zohaib479/events{/privacy}",
  "received_events_url": "https://api.github.com/users/zohaib479/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "ZOHAIB RAZA",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "Passionate developer with a keen interest in competitive programming and a drive to create impactful projects. 🚀",
  "twitter_username": null,
  "public_repos": 27,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2023-08-10T06:28:10Z",
  "updated_at": "2024-12-14T05:48:53Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/insta',(req,res)=>{
    res.send('<h1>You are Logged in via Insta<h1>')
})
app.get('/github',(req,res)=>{
  res.json(jsonData)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})