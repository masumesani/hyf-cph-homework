function getWeekDay(date) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let day = date.getDay();
    return weekdays[day];  
}

let date = new Date();
let weekDay = getWeekDay(date);

let eventDate = new Date('November 24, 2019');
let eventDay = getWeekDay(eventDate);

let countDays = Math.ceil((eventDate - date)/(1000*60*60*24))

console.log(`Today is ${weekDay} and the event is in ${countDays} days. The event will be held on ${eventDay}`);

