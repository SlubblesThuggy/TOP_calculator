function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

function operate(lhs, op, rhs) {
    switch (op) {
        case "+":
            return add(lhs, rhs);
        case "-":
            return sub(lhs, rhs);
        case "*":
            return mul(lhs, rhs);
        case "/":
            return div(lhs, rhs);
    
        default:
            return undefined;
    }
}

let lhs;
let op;
let rhs;