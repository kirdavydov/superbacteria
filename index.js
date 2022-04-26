function scrollToElement(e){
  e.scrollIntoView({behavior: 'smooth'});
}
let timer;
let image1 = document.getElementById('img1p');
let image2 = document.getElementById('img2p');
let image3 = document.getElementById('img3p');

let i = 0;
function change(){
  switch(i){
    case 0:
      image1.src = 'img/p1/0.png';
      image2.src = 'img/p2/0.png';
      image3.src = 'img/p3/0.png';

      i++;
      break;
    case 1:
      image1.src = 'img/p1/1.png';
      image2.src = 'img/p2/1.png';
      image3.src = 'img/p3/1.png';

      i++;
      break;
    case 2:
      image1.src = 'img/p1/2.png';
      image2.src = 'img/p2/2.png';
      image3.src = 'img/p3/2.png';

      i++;
      break;
    case 3:
      image1.src = 'img/p1/3.png';
      image2.src = 'img/p2/3.png';
      image3.src = 'img/p3/0.png';

      i++;
      break;
    case 4:
      image1.src = 'img/p1/4.png';
      image2.src = 'img/p2/4.png';
      image3.src = 'img/p3/1.png';

      i++;
      break;
    case 5:
      image1.src = 'img/p1/5.png';
      image2.src = 'img/p2/5.png';
      image3.src = 'img/p3/2.png';

      i = 0;
      break;
  }
}
timer = setInterval(change, 3000);
