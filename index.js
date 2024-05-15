class App {
    constructor() {
        this._initialize()
        this._render()
    }

    _initialize() {
        this._createLenis()
        this._createIntro()
    }

    _createLenis() {
        this.lenis = new Lenis({
            lerp: 0.1
        })
    }

    _createIntro() {
        const tl = gsap.timeline();

        gsap.to('.blur_container', {
            x: 11580,
            ease: 'none',
            duration: 200
        })

        tl.to('.clear_container', {
            paddingLeft: 11580,
            ease: 'none',
            duration: 100
        })
    }


    _render(time) {
        this.lenis.raf(time)
        requestAnimationFrame(this._render.bind(this))
    }
}

new App();