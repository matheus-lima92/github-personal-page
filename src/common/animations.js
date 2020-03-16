import gsap from 'gsap';

export const animateIcon = (element) => {
  const tl = gsap.timeline();
  tl.to(element, 0.2, { rotation: -20 });
  tl.to(element, 0.2, { rotation: 20 });
  tl.to(element, 0.2, { rotation: 0 });
  tl.resume();
};

export const slideInFromLeft = (element) => {
  const tl = gsap.timeline();
  tl.fromTo(element, 5, { left: '-100%'}, { left: '0' });
  tl.resume();
}
