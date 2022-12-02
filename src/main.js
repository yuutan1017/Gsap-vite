import gsap from 'gsap';

// setTimeout(() => {
//   gsap.fromTo(
//     '.box',
//     {
//       opacity: 0,
//       duration: 1,
//       y: '-200px',
//     },
//     {
//       opacity: 1,
//       duration: 2,
//       rotation: 360,
//       y: '100px',
//     }
//   );
// }, 2000);

gsap.to('.box', {
  backgroundColor: 'blue',
  position: 'relaitve',

  duration: 3,
  y: '5rem',

  scaleY: 1.3,
  scaleY: 1.3,
  rotation: 180
})
