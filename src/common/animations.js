import gsap, { TweenMax } from 'gsap';

export const animateIcon = (element) => {
  const tl = gsap.timeline();
  tl.to(element, 0.2, { rotation: -20 });
  tl.to(element, 0.2, { rotation: 20 });
  tl.to(element, 0.2, { rotation: 0 });
  tl.resume();
};

export const slideInFromLeft = (element1, element2) => {
  const tl = gsap.timeline();
  tl.fromTo(element1, 5, { left: '-100%'}, { left: '0' });
  tl.fromTo('.teste2', 5, { left: '-100%'}, { left: '0' });
  tl.resume();
}
