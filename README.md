# Rive Animation Research

A research and implementation project exploring Rive as an interactive animation technology for the web.

## Project Goals

- Research the Rive animation technology.
- Explore DOM integration.
- Investigate available APIs and libraries.
- Explore implementation and hosting options.
- Build a minimum implementation using a community asset.

## Technologies

- HTML
- CSS
- JavaScript
- Rive Web Runtime

## 1. What technology is Rive built on?

Rive is a real-time interactive animation engine used to create animations, interactive user interfaces, and games.

The platform supports vector graphics, raster graphics and 3D scenes. It combines animation tools with interactive logic, allowing animations to respond to user input and application data.

### Core technologies

- **Rive Renderer:** Responsible for drawing and rendering graphics.
- **WebGL 2:** Used by the web runtime to render graphics in the browser.
- **Rive Runtime:** Loads and executes `.riv` files in applications.
- **State Machines:** Control animation states, transitions and interactions.
- **Data Binding:** Allows application data to control properties inside animations.

### How does it work?

1. Create an animation using the Rive Editor.
2. Export the animation as a `.riv` file.
3. Load the file using the Rive Web Runtime.
4. The runtime renders the animation in the browser.
5. JavaScript can communicate with the animation and control its behaviour.

### File format

Rive uses its own `.riv` file format, which contains animation assets and associated logic.

### Sources

- [Rive – Official Website](https://rive.app/)
- [Rive – Features](https://rive.app/features)
- [Rive – Web Runtime Documentation](https://rive.app/docs/runtimes/web/web-js)

## 2. How is Rive implemented in the DOM?

Rive is implemented in the DOM using an HTML `<canvas>` element.

The canvas acts as a drawing surface where the Rive Runtime renders the animation. JavaScript connects the `.riv` file to the canvas and controls its playback and interactions.

Unlike regular HTML elements, the individual animation objects are not inserted into the DOM. Instead, they are rendered inside the canvas.

### Implementation process

1. Add a `<canvas>` element to the HTML document.
2. Include the Rive Web Runtime.
3. Create a new Rive instance in JavaScript.
4. Connect the `.riv` file to the canvas.
5. Configure playback or interactive behaviour.

### Example

HTML:

```html
<canvas id="rive-canvas"></canvas>
```

JavaScript:

```javascript
const riveInstance = new rive.Rive({
  src: './assets/rive/animation.riv',
  canvas: document.getElementById('rive-canvas'),
  autoplay: true
});
```

The runtime loads the animation and renders it inside the canvas.

### Other implementation options

- Vanilla JavaScript with HTML Canvas.
- React using the Rive React Runtime.
- Reusable components and framework integrations.

### Sources

- [Rive – Runtime Quick Start](https://github.com/rive-app/help-center/blob/master/runtimes/quick-start.md)
- [Rive – Web Runtime Documentation](https://rive.app/docs/runtimes/web/)

## 3. Live Demo

Coming soon.

## 4. Hosting

Coming soon.

## 5. Minimum Implementation

Coming soon.

## Live Demo

Coming soon.