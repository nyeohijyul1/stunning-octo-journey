export default class Draggable {
    constructor(element) {
        this.element = element;
        this.x = 0;
        this.y = 0;
        this.pointerOffsetX = 0;
        this.pointerOffsetY = 0;
        
        this.onpointerdown = (e) => {
            if (e.target.closest('.dragHandle')) {
                this.element.setPointerCapture(e.pointerId)
                this.dragStart(e);
                document.addEventListener("pointermove", this.onpointermove);
                document.addEventListener("pointerup", this.onpointerup);
            }
        }
        this.onpointermove = (e) => {
            this.calcTranslate(e);
            this.render(e);
        }
        this.onpointerup = () => {
            this.endTracking()
        }

        this.element.addEventListener("pointerdown", this.onpointerdown);
    }
    dragStart(e) {
        this.element.style.transition = "none";
        this.pointerOffsetX = e.x - this.x;
        this.pointerOffsetY = e.y - this.y;
    }
    calcTranslate(e) {
        this.x = e.x - this.pointerOffsetX;
        this.y = e.y - this.pointerOffsetY;
    }
    render() {
        this.element.style.transform = `translate(${this.x}px, ${this.y}px)`
    }
    endTracking() {
        document.removeEventListener("pointermove", this.onpointermove);
        document.removeEventListener("pointerup", this.onpointerup);
        this.x = 0;
        this.y = 0;
        this.element.style.transition = "transform 0.5s";
        this.element.style.transitionTimingFunction = "cubic-bezier(0, 3, 1, 1)";
        this.element.style.transform = ``
    }
}