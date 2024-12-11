
export class FriendAge {
    constructor(nombre, año, mes, dia){
        this.nombre = nombre;
        this.año = año;
        this.mes = mes;
        this.dia = dia;
    }
    returnAge() {
    const hoy = new Date(); // Fecha actual
    const fechaNacimiento = new Date(this.año, this.mes - 1, this.dia); // Mes es base 0

    let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
    cost diferenciames = hoy.getMonth() - fechaNacimiento.getMonth();
    cost diferenciadia = hoy.getDate() - fechaNacimiento.getDate();

    if (diferenciames < 0 || (diferenciames === 0 && diferenciadia < 0)) {
        edad--;
      }
  
      return `${this.nombre} is ${edad} hoy!`;
    }
}