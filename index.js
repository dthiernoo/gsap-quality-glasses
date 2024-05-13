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
        document.addEventListener('click', (e) => console.log(e.clientX))
        // 450 entering
        // 869 exiting
        // 1053 entering
        // 1471 exiting

        gsap.set('.blur, .clear', {
            x: 0,
        })
    }

    _createLenis() {
        this.lenis = new Lenis({
            lerp: 0.1
        })
    }

    _createIntro() {

        // const clear = document.querySelectorAll("#animation span class="clear"");
        // clear.forEach(element => {
        //     element.classList.add("hide")
        //     const ele = clear.getBoundingClientRect();

        //     console.log(ele.x)

        // })

        const tl = gsap.timeline();

        // const letters = document.getElementsByClassName("clear");
        // for (let i = 0; i < letters.length; i++) {
        //     tl.to(letters[i], { x: "50px", duration: 1 });
        // }

        // tl.to('.blur_container, .clear', {
        //     opacity: 1,
        //     x: 580,
        //     ease: 'none',
        //     duration: 80
        // }).blur, .blur_container

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