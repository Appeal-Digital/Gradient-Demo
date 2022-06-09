import { Gradient } from './Gradient.js'

document.addEventListener('DOMContentLoaded', () => {
    // Create your instance
    const gradient = new Gradient()

    // Call `initGradient` with the selector to your canvas
    gradient.initGradient('#gradient-canvas')
});

