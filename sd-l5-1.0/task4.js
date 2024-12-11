export class FriendAge {
    constructor(name, year, month, day){
        this.name = name;
        this.year = year;
        this.month = month;
        this.day = day;
    }
    returnAge() {
        let today =new Date();
        let birthday = new Date(this.year, this.month - 1, this.day);
        let age =today.getFullYear() - birthday.getFullYear();


        return `${this.name} is ${age} today!`;
    }
}
const friend = new FriendAge("Javiera", 2000, 12, 25);
console.log(friend.returnAge()); 