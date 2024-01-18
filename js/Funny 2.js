if (confirm('This blog is only open for PC, mac, and ipad users. If you are any of these please press ok. If not press cancel. ')){
   console.log("user on pc");
}else{
   alert("Redirecting off the site.")
  location.href = 'http://www.google.com';
}
