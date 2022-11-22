
Bugfender.init({
  appKey: 'VocUSyztliDe9H98ZowwQEoOfqObXfRR',
});

const fetchUser = () => {
  const userName = document.getElementById('uname').value;
  Bugfender.log(`Grabbed the username as ${userName}`)
  fetch(`https://api.github.com/users/${userName}`)
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => {
      Bugfender.log(`Found the user ${data.name} by the user name!`)
      document.getElementById("users").innerText = data.name
    })
		.catch( error => {
      console.error(error)
      Bugfender.error(error)
    });
  ;
}

document.getElementById('fetch-action').addEventListener('click', fetchUser);
