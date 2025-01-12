const dark=document.querySelector(".fa-moon");
const dev=document.querySelector(".dev");
const detective=document.querySelector(".detective");
const bar=document.querySelector(".solid");
const input=document.querySelector(".text");
const search=document.querySelector(".search");
const content=document.querySelector(".content");
const main=document.querySelector(".mainc");
const body=document.querySelector(".wrapper");
const all=document.querySelector(".all");
const url = "https://api.github.com/users/";
const mode=document.querySelector(".mode");


var newel=document.createElement('i');
newel.className='fa-regular fa-sun';

dark.addEventListener("click",changemod);
function changemod(){
    body.classList.add("dark1");
    dev.classList.add("dark1");
    detective.classList.add("dark1");
  bar.classList.add("dark1");
  input.classList.add("dark1");
  search.classList.add("dark1");
  content.classList.add("dark1");
  main.classList.add("dark1");
  all.classList.add("dark1");
  mode.innerText="Light";
 if(dark){
  dark.parentNode.replaceChild(newel,dark);
 }
}
newel.addEventListener("click",hehe);
function hehe(){
  if(body.classList.contains("dark1")){
    body.classList.remove("dark1");
      dev.classList.remove("dark1");
      detective.classList.remove("dark1");
    bar.classList.remove("dark1");
    input.classList.remove("dark1");
    search.classList.remove("dark1");
    content.classList.remove("dark1");
    main.classList.remove("dark1");
    all.classList.remove("dark1");
    mode.innerText="Dark";
   if(newel){
    newel.parentNode.replaceChild(dark,newel);
   }
   }
}
input.addEventListener(
  "keydown",
  function (e) {
    if (e.key == "Enter") {
      if (input.value !== "") {
        fetchUser(url + input.value);
      }
    }
  },
  false
);
search.addEventListener("click",function(){
 
  if (input.value ==""){
    return ;
   }
   else{
   
    fetchUser(url +input.value);
   }
  
});


 
async function fetchUser(gitUrl) {
  try{
    const response=await fetch(gitUrl);
    const data =await response.json();
    renderUser(data);
  }
  catch(error){
    throw error;
  }
 
}



function renderUser(data){
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const name=document.querySelector(".naam");
  const date=document.querySelector(".date");
  const login=document.querySelector(".tag");
  const bio=document.querySelector(".education");
  const posts=document.querySelector(".num-repo");
  const followers=document.querySelector(".followers-num");
  const following=document.querySelector(".following-num");
  const location=document.querySelector(".location");
  const git=document.querySelector(".chain");
  const app=document.querySelector(".app");
  const profile=document.querySelector(".avatar");
  const company=document.querySelector(".build");


  name.innerText=data.name === null ? data.login : data.name;
login.innerText=`@${data?.login}`;
  if(data?.company==null){
    login.innerText="not available" ;
  }
  
  datesegments = data?.created_at.split("T").shift().split("-");
  date.innerText=`Joined ${datesegments[2]} ${months[datesegments[1]-1]} ${datesegments[0]}`;
 profile.src = `${data?.avatar_url}`;
  bio.innerText=data?.bio;
  posts.innerText=data?.public_repos;
  followers.innerText=data?.followers;
  following.innerText=data?.following;
  location.innerText=data?.location;
  if(data?.location==null){
    location.innerText="not available";
  }
  git.innerHTML=data?.html_url;
  app.innerHTML=data?.twitter_username;
  if(data?.twitter_username==null){
    app.innerHTML="not available";
  }
  company.innerText=data?.company;
  if(data?.company==null){
    company.innerText="not available";
  }
}
