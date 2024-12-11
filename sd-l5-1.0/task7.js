export function rubricPassFail(puntos) {
    puntos = parseInt(puntos);
    if(puntos === 11){
        return ("Perfect")
    }
    else if (puntos >= 5){
        return ("Pass")
    }
    else if (puntos >=8) {
        return ("Excellent")
    }
    else {
        return ("Fail")
    }
}