function getID(id){
    return document.getElementById(id);
}

const day = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let date = new Date();

getID('day').innerText = day[date.getDay()]
getID('month').innerText = month[date.getMonth()-1];
getID('date').innerText = date.getDate();
getID('year').innerText = date.getFullYear();
