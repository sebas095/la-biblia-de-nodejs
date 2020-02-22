// Types
const framework: string = "Angular";
const isProduction: boolean = true;
const PORT: number = 3000;
const styles: Array<string> = ["./css/styles.css"];

const sayHello: Function = (name: string): string => `Hello ${name}`;
const value: string = sayHello("Ernesto");
console.log(value);