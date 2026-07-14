// export default class RandomColor {
//     constructor(element) {
//         this.element = element;
//         this.hue = Math.random()*360;
//         this.element.style.backgroundColor = `oklch(0.8 0.1 ${this.hue} / 60%)`
//         this.style = getComputedStyle(this.element);
//         this.element.style.boxShadow = `${this.style.getPropertyValue("--box-shadow").trim()} oklch(0.6 0.1 ${this.hue} / 60%)`
//     }
// }
export const randomColor = (element) => {
    let hue = Math.random()*360;
    element.style.backgroundColor = `oklch(0.8 0.1 ${hue} / 60%)`
    let styles = getComputedStyle(element);
    element.style.boxShadow = `${styles.getPropertyValue("--box-shadow").trim()} oklch(0.6 0.1 ${hue} / 60%)`
    return hue;
}