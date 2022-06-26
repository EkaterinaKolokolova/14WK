function sum() {
let num1 = document.querySelector('#first-num').value;
let num2 = document.querySelector('#second-num').value;
result = +num1 + +num2;
document.querySelector('#result').innerHTML = result;
}

function sub() {
    let num1 = document.querySelector('#first-num').value;
    let num2 = document.querySelector('#second-num').value;
    result = +num1 - +num2;
    document.querySelector('#result').innerHTML = result;
    }

    function devide() {
        let num1 = document.querySelector('#first-num').value;
        let num2 = document.querySelector('#second-num').value;
        result = +num1 / +num2;
        document.querySelector('#result').innerHTML = result;
        }

        function mult() {
            let num1 = document.querySelector('#first-num').value;
            let num2 = document.querySelector('#second-num').value;
            result = +num1 * +num2;
            document.querySelector('#result').innerHTML = result;
            }