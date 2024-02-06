import { select, selectAll, toggle } from './helpers';

const nav = select('nav');
const navIcon = select('.hamburger-icon');
const diamondMenu = select('.diamond-menu');
const expanded = select('.expanded');

const toggleNav = () => {
  toggle(navIcon,'open');
  toggle(nav,'expand');
  toggle(diamondMenu,'hide');
  toggle(expanded,'show-options');
}

const options = {
  threshold: 0.1
};

const introLink = select('#introduction-link');
introLink.classList.add('current-section');

const sections = selectAll('section');

const callback = (entries) => {
  entries.forEach(entry => {
    const id = entry.target.getAttribute('data-link-id');
    const link = select(`#${id}`);
    if(entry.isIntersecting){
     link && link.classList.add('current-section');
    }
    else{
      link && link.classList.remove('current-section');
    }
  })
};


export const initializeNav = () => {
  navIcon.addEventListener('click',toggleNav,false);
  const sectionObserver = new IntersectionObserver(callback,options);
  sections.forEach(element => {
    sectionObserver.observe(element);
  });
}

