const images = [...document.querySelectorAll('img')];

const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

const dots = [...document.querySelectorAll('.dot')];

nextBtn.addEventListener('click', ()=>{
  loadNextImage();
  setCurrentDot();
});

prevBtn.addEventListener('click', ()=>{
  loadPrevImage();
  setCurrentDot();
});

dots.forEach((dot, i)=>{
  dot.addEventListener('click', ()=>{
    goToImage(i);
    setCurrentDot();
  })
})

function loadNextImage(){

  let currentImg = getCurrentImage();

  images.forEach((image, i) =>{

    if(image === currentImg){
      if(i === images.length-1){
        images[0].classList.add('active-img');
      } else{
        images[i+1].classList.add('active-img');
      }
    }
  })

  currentImg.classList.remove('active-img');
}

function loadPrevImage(){
  
  let currentImg = getCurrentImage();

  images.forEach((image, i) =>{
    if(image === currentImg){
      if(i === 0){
        images[images.length-1].classList.add('active-img');
      } else{
        images[i-1].classList.add('active-img');
      }
    }
  })

  currentImg.classList.remove('active-img');
}

function getCurrentImage(){
  return document.querySelector('.active-img');
}

function setCurrentDot(){
  let currentImg = getCurrentImage();

  dots.forEach((dot, i)=>{
    if(currentImg.dataset.index == i){
      dot.classList.add('active-dot');
    }else{
      dot.classList.remove('active-dot');

    }
  })
}

function goToImage(index){
  images.forEach((image, i)=>{
    if(image.dataset.index == index){
      image.classList.add('active-img');
    }else{
      image.classList.remove('active-img')
    }
  })
}