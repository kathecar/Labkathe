export function ageCalculator(year, month, day) {
    let today = new Date();
    let birthday = new Date(year, month, day);
    let age =today.getFullYear() - birthday.getFullYear
    return age;

}
console.log(ageCalculator('2004', '02','16'));