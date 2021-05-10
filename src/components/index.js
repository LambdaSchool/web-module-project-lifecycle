
import './styles.scss';
import axios from '../lifecycle/node_modules/axios';

const entry = document.querySelector('.cards');

axios.get('https://api.github.com/users/Stan2dor')
  .then((res) => {
    const myInfo = res.data
    entry.appendChild(cardMaker(myInfo))
  });

  const friendsArray = [];
friendsArray.push("tetondan", "dustinmyers", "justsml", "luishr", "bigknell");
friendsArray.forEach(name => {
  axios
    .get(`https://api.github.com/users/${name}`)
    .then(res => cardMaker(res.data))
    .catch(err => console.log(err))
    .then(() => console.log('success'))
});

function cardMaker(data) {
    const entry = document.querySelector(`.cards`)
    const card = document.createElement('div')
    const img = document.createElement(`img`)
    const cardInfo = document.createElement('div')
    const name = document.createElement('h2')
    const userName = document.createElement(`p`)
    const location = document.createElement(`p`)
    const profile = document.createElement(`p`)
    const link = document.createElement(`a`)
    const followers = document.createElement(`p`)
    const following = document.createElement(`p`)
    const bio = document.createElement(`p`)
  
    card.classList.add(`card`)
    cardInfo.classList.add(`card-info`)
    name.classList.add(`name`)
    userName.classList.add(`username`)
  
    entry.appendChild(card)
    card.appendChild(img)
    card.appendChild(cardInfo)
    cardInfo.appendChild(name)
    cardInfo.appendChild(userName)
    cardInfo.appendChild(location)
    cardInfo.appendChild(profile)
    cardInfo.appendChild(link)
    cardInfo.appendChild(followers)
    cardInfo.appendChild(following)
    cardInfo.appendChild(bio)
  
    img.setAttribute(`src`, data.avatar_url)
    name.textContent = data.login;
    userName.textContent = data.name;
    location.textContent = data.location;
    profile.textContent = `profile:` + link;
    link.setAttribute(`href`, data.html_url)
    link.textContent = 'URL';
    followers.textContent = `followers:` + data.followers;
    following.textContent = `following:` + data.following;
    bio.textContent = 'BIO:' + data.bio;
  
    return card;
  };