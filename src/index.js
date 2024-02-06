
import { select } from './js/helpers';

import { initializeNav } from './js/nav';
import { initializeAnimations } from './js/animations';
import { initializeVideo } from './js/video';

initializeNav();
initializeAnimations();
initializeVideo();

const cta = select('.cta-container');

const openWebsite = () => {
  window.open('https://www.chanel.com/us/high-jewelry/n5-collection/','_blank');
}

cta.addEventListener('click',openWebsite);

import './styles/style.css';
import './assets/ui/diamond_icon.svg';
import './assets/ui/hamburger.svg';
import './assets/ui/menu.svg';
import './assets/ui/introduction-nav-text.svg';
import './assets/desktop/intro/intro_title.png';
import './assets/desktop/intro/intro_copy.png';
import './assets/desktop/intro/diamond.png';
import './assets/desktop/intro/intro_text.png';
import './assets/gabrielle/gabrielle-chanel.jpg';
import './assets/gabrielle/gabrielle-chanel-copy.png';
import './assets/gabrielle/gabrielle-chanel-copy-2.png';
import './assets/gabrielle/gabrielle-chanel-copy-3.png';
import './assets/gabrielle/gabrielle-chanel-perfume.jpg';
import './assets/mobile/gabrielle/gabrielle-mobile.jpg';
import './assets/mobile/gabrielle/gabrielle-copy-1-mobile.png';
import './assets/mobile/gabrielle/gabrielle-copy-2-mobile.png';
import './assets/mobile/gabrielle/gabrielle-copy-3-mobile.png';
import './assets/mobile/gabrielle/gabrielle-perfume-mobile.jpg';
import './assets/mobile/iconic/iconic-title-mobile.png';
import './assets/mobile/iconic/iconic-perfume-mobile.jpg';
import './assets/mobile/iconic/iconic-copy-mobile.png';
import './assets/mobile/iconic/iconic-necklace-copy-mobile.png';
import './assets/mobile/iconic/iconic-necklace-mobile.jpg';
import './assets/mobile/savoir-faire/img-1-mobile.jpg';
import './assets/mobile/savoir-faire/img-2-mobile.jpg';
import './assets/mobile/savoir-faire/img-3-mobile.jpg';
import './assets/mobile/savoir-faire/img-4-mobile.jpg';
import './assets/mobile/savoir-faire/img-5-mobile.jpg';
import './assets/mobile/savoir-faire/savoir-faire-copy-mobile.png';
import './assets/mobile/necklace/necklace-copy-mobile.png';
import './assets/desktop/necklace/necklace-copy-desktop.png';
import './assets/mobile/footer/chanel-logo-mobile.png';
import './assets/mobile/footer/footer-copy-mobile.png';
import './assets/desktop/iconic/iconic-title.png';
import './assets/desktop/iconic/iconic-55-copy.png';
import './assets/desktop/iconic/iconic-perfume.jpg';
import './assets/desktop/iconic/55-necklace.jpg';
import './assets/desktop/iconic/iconic-copy.png';
import './assets/mobile/intro/intro-copy-mobile.png';
import './assets/desktop/savoir-faire/img-1.jpg';
import './assets/desktop/savoir-faire/img-2.jpg';
import './assets/desktop/savoir-faire/img-3.jpg';
import './assets/desktop/savoir-faire/img-4.jpg';
import './assets/desktop/savoir-faire/img-5.jpg';
import './assets/desktop/savoir-faire/savoir-faire-copy.png';
import './assets/mobile/intro/header-copy-mobile.png';
import './assets/mobile/intro/diamond-mobile.jpg';
import './assets/desktop/footer/chanel-logo-png-transparent-desktop.png';
import './assets/desktop/footer/footer-copy.png';
import './assets/desktop/footer/cta.png';
import './assets/bg-1.mp4';
import './assets/desktop.jpg';
import './assets/mobile.jpg';



