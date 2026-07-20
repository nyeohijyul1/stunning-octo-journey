export default class Resizable {
    constructor(element) {
        this.element = element;
        
        this.onpointerdown = (e) => {
            if (!e.target.closest('.dragHandle')) {
                this.element.setPointerCapture(e.pointerId)

                document.addEventListener("pointermove", this.onpointermove);
                document.addEventListener("pointerup", this.onpointerup);
            }
        }
        this.onpointermove = (e) => {
            
        }
        this.onpointerup = () => {
            
        }

        this.element.addEventListener("pointerdown", this.onpointerdown);
    }
}