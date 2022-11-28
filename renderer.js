
Bugfender.init({
  appKey: '<YOUR_API_KEY>',
})

const fetchUser = () => {
  const userName = document.getElementById('uname').value
  Bugfender.log(`Grabbed the username as ${userName}`)
  fetch(`https://api.github.com/users/${userName}`)
		.then(response => response.json()) //Converting the response to a JSON object
		.then( data => {
      if (data.name) {
        Bugfender.log(`Found the user ${data.name} by the user name!`)
        
        document.getElementById("error").innerText = ''
        document.getElementById('users').innerText = ''
        
        document.getElementById('users').classList.add('result')

        if(data['avatar_url']) {
          const img = document.createElement('img')
          img.src = data['avatar_url']
          img.alt = data.name
          document.getElementById("users").appendChild(img)
        } else {
          Bugfender.warn(`No avatar presents for the user ${userName}`)
        }
        
        addData('p', data.name)

        if(data.bio) {
          addData('p', data.bio)
        } else {
          Bugfender.warn(`No bio presents for the user ${userName}`)
        }
      } else {
        Bugfender.error(`A problem occured!!! We couldn't fetch the data for the user name ${userName}`)
        document.getElementById('users').classList.remove('result')
        document.getElementById("users").innerText = ''
        document.getElementById("error").innerText = `No information available for the user ${userName}`
      }
    })
		.catch( error => {
      console.error(error)
      Bugfender.error(error)
    })
}

const addData = (elem, value) => {
  const element = document.createElement(elem)
  element.innerText = value
  document.getElementById("users").appendChild(element)
}

document.getElementById('fetch-action').addEventListener('click', fetchUser)
