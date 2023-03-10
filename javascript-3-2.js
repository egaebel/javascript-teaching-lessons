import "Math"

function square(num) {
    z = 5;
    return num * num;
}


let w;
u = 37;
for (let index = 1, x = 0, y = 3; index <= 10; index++) {
    console.log("first loop: " + w);
    let indexSquare = square(index);
    w = "hello world " + index + " " + indexSquare;
    console.log("second loop: " + w);
    console.log(x);
    console.log(y);
    console.log(u);
    console.log("-----");
}
console.log("after loop: " + w);

for (let i = 0; i < 5; i++);
console.log("z: " + z);