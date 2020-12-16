export function clasificacion(imc) {
    //refactoring
    if (imc < 18.5) {
        return ('Desnutricion')
    } 
    if (imc > 18.4 && imc < 25){
        return "Normal"; 
    } 
    if (imc > 24.9 && imc < 27){
        return "Sobre peso grado 1"; 
    }
    if (imc > 26.9 && imc < 30){
        return "Sobre peso grado 2"; 
    }
    if (imc > 29.9 && imc < 35){
        return "Obesidad tipo 1"; 
    }
    if (imc > 34.9 && imc < 40){
        return "Obesidad tipo 2"; 
    }
    if (imc > 39.9 && imc < 50){
        return "Obesidad tipo 3 Morbida"; 
    }else {
        return "Obesidad tipo 4 Extrema"; 
    }
}