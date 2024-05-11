/* 
Credits: https://www.youtube.com/watch?v=laS7TrKXqG8
Ressources: 
    1. https://github.com/studio-freight/lenis
    2. https://gsap.com/docs/v3/
    3. https://bennettfeely.com/clippy/
*/

class App {
    constructor() {
        this._initialize()
        this._render()
    }

    _initialize() {
        this._setInitialStates()
        this._createLenis()
        this._createIntro()
    }

    _setInitialStates() {
        gsap.set('.hero__small-text, .hero__img', {
            x: 0,
        })
    }

    _createLenis() {
        this.lenis = new Lenis({
            lerp: 0.1
        })
    }

    _createIntro() {
        const tl = gsap.timeline();

        tl.to('.hero__small-text, .hero__img', {
            opacity: 1,
            x: 580,
            duration: 80
        })
    }


    _render(time) {
        this.lenis.raf(time)
        requestAnimationFrame(this._render.bind(this))
    }
}

new App();