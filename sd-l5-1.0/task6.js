export function rubricPassFail(puntos) {
    puntos = parseInt(puntos);
    if (puntos >= 5){
        return ("Pass")
    }
    else if (puntos >=8) {
        return ("Excellent")
    }
    else {
        return ("Fail")
    }
}