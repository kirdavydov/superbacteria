function scrollToElement(e){
  e.scrollIntoView({behavior: 'smooth'});
}

isHidden = false;
sidebar = document.getElementById('sidebar')
function hide(){
  if(isHidden == false){
    sidebar.style.left = '-400px'
    isHidden = true;
  }
  else if(isHidden == true){
    sidebar.style.left = '0px'
    isHidden = false;
  }
}
