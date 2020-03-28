import gsap from 'gsap';

export const animateIcon = (element) => {
  const tl = gsap.timeline();
  tl.to(element, 0.2, { rotation: -20 });
  tl.to(element, 0.2, { rotation: 20 });
  tl.to(element, 0.2, { rotation: 0 });
  tl.resume();
};
