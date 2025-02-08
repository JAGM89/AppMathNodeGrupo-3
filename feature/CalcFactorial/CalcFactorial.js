function CalcFactorial(n) {
    if (n < 0) return undefined; // No se define factorial para números negativos
    if (n === 0 || n === 1) return 1; // Base del factorial
    
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// Ejemplo de uso
console.log(CalcFactorial(7)); // 5040