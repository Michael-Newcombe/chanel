import { select, selectAll } from "./helpers";

const options = {
  threshold: 0.2
};

const textAnimations = selectAll('.opacity-animation');
const scaleAnimation = selectAll('.scale-animation');
const slideAnimation = selectAll('.slide-in-animation');

const playAnimation = (element) => {
  const animation = element.getAttribute('data-animation');
  element.classList.add(animation);
}

const callback = (entries) => {
  entries.forEach(entry => {
    entry.isIntersecting && playAnimation(entry.target);
  })
};


export const initializeAnimations = () => {
  const textObserver = new IntersectionObserver(callback,options);
  textAnimations.forEach(element => {
  textObserver.observe(element);
  });

  const scaleObserver = new IntersectionObserver(callback,options);
  scaleAnimation.forEach(element => {
  scaleObserver.observe(element);
  });

  const slideObserver = new IntersectionObserver(callback,options);
  slideAnimation.forEach(element => {
  slideObserver.observe(element);
  });
}










