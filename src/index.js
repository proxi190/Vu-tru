import {mxFirebase} from './mx';


import './mx.css';
import './index.css';
import './Styling/searchbutton.css';
import './Styling/history-1.css';
import './Styling/mainhistory.css';
import './Styling/bando.css';
import './Styling/planet.css';
import './Styling/product.css';
import './Styling/sun.css'

import riot from 'riot';
import "./tags/signin.tag";
import "./tags/homepage.tag";
import "./tags/upload.tag";
import "./tags/search.tag";
import "./Styling/main_history-master/history-1.tag";
import "./Styling/main_history-master/mainhistory.tag";
import "./Styling/main_history-master/bando.tag";
import "./Styling/main_history-master/planet.tag";
import "./Styling/main_history-master/product.tag";
import "./Styling/main_history-master/sun.tag"
import route from "riot-route";

var firebaseConfig = {
  apiKey: "AIzaSyB5Q7i6bJd6AVrS9m1ljyevOz2lhjDYJ6c",
  authDomain: "mindx-project.firebaseapp.com",
  databaseURL: "https://mindx-project.firebaseio.com",
  projectId: "mindx-project",
  storageBucket: "mindx-project.appspot.com",
  messagingSenderId: "820214374357",
  appId: "1:820214374357:web:15cff2c520dc970b"
};

mxFirebase.init(firebaseConfig);

route.base("/");





  var titles = [
    'Astronomy history',
    'Planets',
    'Stargazing tips',
    'Luna 1',
    'Sun',
    '61901 PENTAX UP',
  ]

  function fuzzyMatch(text, search) {
    var search = search.replace(/\ /g, '').toLowerCase();
    var tokens = [];
    var search_position = 0;

    for (var n=0; n<text.length; n++)
    {
        var text_char = text[n];
        if(search_position < search.length &&
          text_char.toLowerCase() == search[search_position])
        {
            text_char =  text_char ;
            search_position += 1;
        }
        tokens.push(text_char);
    }

    if (search_position != search.length)
    {
        return '';
    }
    return tokens.join('');
  }

  function refreshSearch() {
    var search = document.getElementById('search').value;
    var results = [];

    for (let i=0;i<titles.length;i++){
      var result = fuzzyMatch(titles[i], search);
      if (result){
        console.log('what')
        results.push('<li class =><a style = "color: white" href ="/' +result.replace(/\s+/g, '') + '">' + result + '</a></li>')
      }
    }

    var resultsHTML = results.join('\n'); 
    if (document.getElementById("search").value == '') {
      document.getElementById('search-list').innerHTML = ""
    }
    else document.getElementById('search-list').innerHTML = resultsHTML
    
    
    // console.log(resultsHTML)
  }

document.getElementById('search').addEventListener('keyup', refreshSearch);

window.addEventListener('click', function(e){   
  if (!document.getElementsByClassName('search-box')[0].contains(e.target) || document.getElementById('search-list').contains(e.target)){
    document.getElementById('search-list').innerHTML = ''
  } 
});
  


function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  console.log(oveo)
}

route("/Luna1", () => {
  const search = riot.mount("div#root", "history-1");});
  window.addEventListener('scroll',()=>{
    var wScroll = window.scrollY;
    console.log(wScroll);
    const para = document.getElementsByClassName("history-1-starimag")[0];
    para.style.transform = 'translate(0px, '+ wScroll/(window.innerHeight) +'%)';
    if (wScroll>2300){
        document.body.style.backgroundColor = '#000021'
    }
    else {
        document.body.style.backgroundColor = '#0E0E15' 
    }
});

route("/Astronomyhistory", () => {
  const search = riot.mount("div#root", "mainhistory");});

  window.addEventListener('scroll',()=>{
    var wScroll = window.scrollY;
    console.log(wScroll);
    const para = document.getElementsByClassName("mainhistory-starimag")[0];
    para.style.transform = 'translate(0px, '+ wScroll/(window.innerHeight) +'%)';
    if (wScroll>2300){
        document.body.style.backgroundColor = '#000021'
    }
    else {
        document.body.style.backgroundColor = '#0b0b0f' 
    }
});

route("/Stargazingtips", () => {
  const bando = riot.mount("div#root", "bando");
  document.getElementById('bino-button').addEventListener('click', function(e) {
    document.getElementById('telescopes').style.display='none';
    document.getElementById('bino').style.display = 'none';
    document.getElementById('books').style.display = 'none'
    document.getElementById('bino').style.display = 'flex'
  });
  
  document.getElementById('tele-button').addEventListener('click', function(e) {
    document.getElementById('telescopes').style.display='none';
    document.getElementById('bino').style.display = 'none';
    document.getElementById('books').style.display = 'none'
    document.getElementById('telescopes').style.display = 'flex'
  });
  
  document.getElementById('book-button').addEventListener('click', function(e) {
    document.getElementById('telescopes').style.display='none';
    document.getElementById('bino').style.display = 'none';
    document.getElementById('books').style.display = 'none'
    document.getElementById('books').style.display = 'flex'
  });
  document.getElementById('only-bino-product').addEventListener('click', ()=>{
    window.location.href = '/61901PENTAXUP'
  })


})

route("/Planets", () => {
  const planet = riot.mount("div#root", "planet");
  document.getElementsByClassName('sun')[0].addEventListener('click', ()=>{
    window.location.href= '/Sun'
  })
})

route("/61901PENTAXUP", () => {
  const product = riot.mount("div#root", "product")
})

route("/Sun", () => {
  const sun = riot.mount("div#root", "sun")
})



route.start(true);








