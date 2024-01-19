if (confirm('This blog is only open for PC, mac, and ipad users. If you are any of these please press ok. If not press cancel. ')){
   console.log("user on pc");
}else{
   alert("Redirecting off the site.")
  location.href = 'http://www.google.com';
}
const headers = new Headers()
headers.append("Content-Type", "application/json")

const body = {
  "test": "event"
}

const options = {
  method: "POST",
  headers,
  mode: "cors",
  body: JSON.stringify(body),
}

fetch("https://eo2ivnqbkx7n9q.m.pipedream.net", options)
