function fib(N) {
    let secuenciaFib = [0, 1]; 

    for (let i = 2; i < N; i++) {
        secuenciaFib.push(secuenciaFib[i - 1] + secuenciaFib[i - 2]); 
    }

    return secuenciaFib;
}

console.log(fib(8))