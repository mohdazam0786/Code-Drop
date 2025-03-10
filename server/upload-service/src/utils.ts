export function generate() {
    const subset = "123456789qwertyuiopasdfghjklzxcvbnm";
    const number = 5;
    let id = "";
    for(let i=0; i<number; i++){
        id += subset[Math.floor(Math.random()*subset.length)];
    }
    return id;
}