export default class Resizable {
    constructor(element) {
        this.element = element;
        
        this.onpointerdown = (e) => {
            
            document.addEventListener("pointermove", this.onpointermove);
            document.addEventListener("pointerup", this.onpointerup);
        }
        this.onpointermove = (e) => {
            
        }
        this.onpointerup = () => {
            
        }

        this.element.addEventListener("pointerdown", this.onpointerdown);
    }
}