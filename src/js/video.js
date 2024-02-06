import { select, selectAll } from "./helpers";


const video = select('video');

const options = {
  threshold: 0.2
};

const callback = (entries) => {
  entries.forEach(entry => {
    entry.isIntersecting && entry.target.play();
  })
};

export const initializeVideo = ()=> {
  const videoObserver = new IntersectionObserver(callback,options);
  videoObserver.observe(video);

  video.addEventListener('click',()=>{
    video.play();
  })

  const promise = document.querySelector('video').play();

  if (promise !== undefined) {
    promise.then(_ => {
    }).catch(error => {
     console.log(error);
    });
  }
}