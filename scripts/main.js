
const canvas = document.getElementById('rive-canvas');

const riveInstance = new rive.Rive({
  src: './assets/rive/car-example.riv',
  canvas: canvas,
  autoplay: false,
  onLoad: () => {
    riveInstance.resizeDrawingSurfaceToCanvas();
  }
});

window.addEventListener('resize', () => {
  riveInstance.resizeDrawingSurfaceToCanvas();
});
