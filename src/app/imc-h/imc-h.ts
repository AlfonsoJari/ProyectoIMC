export function imc(peso,altura) {  
        // refactoring
        let imc = 0;
        imc = peso/Math.pow(altura*.01,2);
        return imc;
}