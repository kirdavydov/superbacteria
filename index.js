function scrollToElement(e){
  e.scrollIntoView({behavior: "smooth"});
}

let sidebar = document.getElementById('sidebar');
let isHidden = false;

function hide(){
  if(isHidden == false){
    sidebar.style.left = "-350px";
    isHidden = true;
  }
  else if(isHidden == true){
    sidebar.style.left = "0px";
    isHidden = false;
  }
}
