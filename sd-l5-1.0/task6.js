export function rubricExcellent(puntos) {
    puntos = parseFloat(puntos);
    
    if (puntos > 8){
        return ("Excellent")
    }
    else if (puntos >=5) {
        return ("Pass")
    }
    else {
        return ("Fail")
    }
}