export function rubricPassFail(puntos) {
    puntos = parseInt(puntos);
    if (puntos >= 5){
        return ("Pass")
    }
    else {
        return ("Fail")
    }
}