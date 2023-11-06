
const object = {
    color: ['red', 'blue', 'green', 'purple'],
    colorCounter: 0,
    children: [],
    available: [],
    inUse: []
};


let direction = 0;
let yearCycle = 0;
let today;
let namedMonth;
let currMonth;
let months = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];


window.onload = function load() {
    createCalendar(direction);
    currentDay();
}



//set currentDay to active
function currentDay() {
    let date = new Date();
    currMonth = date.getMonth();
    let current;
    if (date.getDate() < 10) {
        current = document.getElementById("" + months[currMonth] + '_0' + date.getDate() + "");
    } else {
        current = document.getElementById("" + months[currMonth] + '_' + date.getDate() + "");
    }
    current.setAttribute('class', 'active');
}



function schedule(option, id, year) {
    let change = document.getElementById('scheduler');
    let tempID = id;
    change.setAttribute('name', tempID);
    id = id.toString().replace('_', ' ').split(' ').reverse().join(' ');
    document.getElementById("scheduledDay").innerHTML = id.replace('_', ' ') + ' ' + year;

    if (option === 'open') {
        change.style.display = 'block';
    } else {
        change.style.display = 'none';
    }
}

function createMarker(symbol, name) {
    let note = document.createElement('div');
    note.setAttribute('class', 'note ' + object.color[0]);
    note.setAttribute('name', name);
    note.setAttribute('id', 'note' + document.getElementById(symbol).childElementCount + symbol);
    note.innerHTML = '&#x25BC;';
    return note;
}

//check event name isn't already taken
function checkDupe(symbol, name) {
    const myEle = document.getElementById(symbol);
    for (const child of myEle.children) {
        if (name == child.getAttribute('name')) {
            for (i = 1; i < 5; i++) {
                if (i != child.getAttribute('name')[child.getAttribute('name').length - 1]) {
                    name = symbol + i;
                    return name;
                }
            }
        }
    } return name;
}

//saving note to events
function saving() {
    let symbol = document.getElementById('scheduler').getAttribute('name');
    if (document.getElementById(symbol).childElementCount == 1) {
        object.colorCounter = 0;
    } else {
        object.colorCounter = document.getElementById(symbol).childElementCount - 1;
    }
    if (document.getElementById(symbol).childElementCount == 5) {
        return;
    }
    //initialize
    let event = document.getElementById('eventName');
    let start = document.getElementById('startTime');
    let timeOfDay = 'All day';
    let description = document.getElementById('description');
    //don't include AM/PM if no time given
    if (startTime.value !== '') {
        timeOfDay = document.getElementById('category').value;
    }
    if (event.value === "") {
        console.log('event');
        event.setAttribute('class', 'schedule alert');
        event.setAttribute('placeholder', 'Please name your event.');
        return;
    } else {
        event.classList.remove('alert');
        event.setAttribute('placeholder', 'Event name');
    }

    let name = symbol + document.getElementById(symbol).childElementCount;
    if (document.getElementById(symbol).childElementCount >= 2) {
        name = checkDupe(symbol, name);
    }


    //create calendar marker
    let note = createMarker(symbol, name);


    //format saved information
    let toStore = '<span class="memo ' + object.color[0] + '">'
        + symbol.replace('_', ' ') + '</span>'
        + '<span class=deleter onclick=deleting(this) name = ' + name + '>' + 'X' + '</span>' + '<h3> ' + event.value + "</h3><p> " + start.value
        + ' ' + timeOfDay + "</p><p> " + description.value + '<p>';
    object.color.push(object.color.splice(0, 1)[0]);
    let things = document.createElement('div');
    things.setAttribute('class', 'event');
    things.setAttribute('id', name);
    things.setAttribute('name', name);
    let div = document.createElement('div');
    things.innerHTML = toStore;

    //sort and append to parents
    document.getElementById(symbol).appendChild(note);
    div.appendChild(things);
    object.children.push(div.innerHTML);
    let temp = object.children[object.children.length - 1].substring(23, object.children[object.children.length - 1].indexOf('_'));
    console.log(temp);
    object.available.push(months.indexOf(temp));
    object.children.sort();

    object.available.sort(function (a, b) { return a - b; });
    object.inUse = [...object.children];
    let reSort = [];
    let reNum = [...object.available];
    //sort by month
    for (let k = 0; k < reNum.length; k++) {
        for (let j = 0; j < object.inUse.length; j++) {
            let test = object.inUse[j].split('_');
            test = test[0].substring(23);
            if (test == months[reNum[k]]) {
                reSort.push(object.inUse.splice(j, 1)[0]);
            }
        }
    }
    //sort month by day
    do {
        swapped = false;
        for (let i = 0; i < reSort.length - 1; i++) {
            let m = reSort[i].indexOf('_')
            let test = reSort[i];
            test = test.substring(23, m + 3);
            let r = reSort[i + 1].indexOf('_');
            let comp = reSort[i + 1];
            comp = comp.substring(23, r + 3);
            if(test.substring(0, test.indexOf('_')) == comp.substring(0, comp.indexOf('_'))) {
            if (test > comp) {
                let temp = reSort[i];
                reSort[i] = reSort[i + 1];
                reSort[i + 1] = temp;
                swapped = true;
            }
            } else continue;
        }
    } while (swapped);


    document.getElementById('events').innerHTML = '';

    //sort by day for events tab
    for (const element of reSort) {
        let sorted = document.createElement('div');
        sorted.innerHTML = element;
        document.getElementById('events').appendChild(sorted);
    }

    //reset
    event.value = '';
    startTime.value = '';
    description.value = '';
    schedule('close', '1', 0);
}


function deleting(name) {
    let namesL = (name.getAttribute('name'));
    let matches = document.querySelectorAll('[name=' + namesL + ']');
    for (let i = 0; i < object.children.length; i++) {
        if (object.children[i].includes(namesL)) {
            object.children.splice(i, 1);
        }
    }
    for (const input of matches) {
        if (input.classList.contains('red')) {
            object.color = object.color.filter(e => e !== 'red');
            object.color.unshift('red');
        } else if (input.classList.contains('blue')) {
            object.color = object.color.filter(e => e !== 'blue');
            object.color.unshift('blue');
        } else if (input.classList.contains('green')) {
            object.color = object.color.filter(e => e !== 'green');
            object.color.unshift('green');
        } else if (input.classList.contains('purple')) {
            object.color = object.color.filter(e => e !== 'purple');
            object.color.unshift('purple');
        }
        input.remove();
    }
}

//Calc # days in month
function daysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}



function createCalendar(direction) {
    let date = new Date();
    //returns month as integer 0-11
    let prevMonth = (date.getMonth() + (direction - 1) % 12);
    let month = (date.getMonth() + direction) % 12;
    namedMonth = months[month];
    let nextMonth = (date.getMonth() + (direction + 1)) % 12;

    //sets the year if cycled forward/backward
    let year = date.getFullYear();
    year += yearCycle;

    //calc day of month to set for the weekday on each end
    let weekdate = new Date((month + 1) + '-1-' + year);
    let firstDayofMonth = weekdate.getDay();
    let lastDayofMonth = new Date(year, (month + 1), 0);
    today = (date.getDate());

    addDaysToHTML(daysInMonth(year, month + 1), firstDayofMonth, lastDayofMonth.getDay(), prevMonth, nextMonth, year);

    let headMonth = document.createElement("div");
    headMonth.setAttribute('id', month);
    let titleMonth = document.createElement("h1");
    titleMonth.innerHTML = months[month] + ' ' + year;
    headMonth.appendChild(titleMonth);
    document.getElementById("month").appendChild(headMonth);
    loadMarkers();
    //highlight the current day if it's the present month
    if (month == currMonth) {
        currentDay();
    }
}


function addDaysToHTML(days, startDay, endDay, prevMonth, nextMonth, year) {
    let id;
    if (startDay != 0) {//not a sunday
        let prevLastDay = daysInMonth(year, prevMonth + 1);

        let offset = prevLastDay - startDay + 1;

        for (let j = 0; j < startDay; j++) {
            let startOffset = "<li class='prevMonth'>" + offset + "<br></li>";
            document.getElementById("dayList").innerHTML += startOffset;
            offset++;
        }
    }
    for (let i = 0; i < days; i++) {
        let dayNum;

        if (i < 9) {
            id = namedMonth + '_0' + (i + 1);
            dayNum = "<li id='" + id + "' onclick=schedule('open',this.id," +
                year + ")><div style='padding-top: 5px;'>" + (i + 1) + "</div></li>";
        } else {
            dayNum = "<li id='" + namedMonth + '_' + (i + 1) + "' onclick=schedule('open',this.id," +
                year + ")><div style='padding-top: 5px;'>" + (i + 1) + "</div></li>";
        }
        document.getElementById("dayList").innerHTML += dayNum;
    }
    if (endDay != 6) { //not a saturday
        let offset = 6 - endDay;
        for (let k = 1; k <= offset; k++) {
            let endOffset = "<li class='nextMonth'>" + k + "<br></li>";
            document.getElementById("dayList").innerHTML += endOffset;
        }
    }

}



function forward() {
    direction++;
    if (document.getElementById("month").firstElementChild.id == 11) {
        yearCycle++;
    }
    document.getElementById("month").removeChild(document.getElementById("month").firstElementChild);
    document.getElementById("dayList").innerHTML = "";
    createCalendar(direction);
}



function backward() {
    if (direction == 0) {
        direction = 12;
    }
    direction--;
    if (document.getElementById("month").firstElementChild.id == 0) {
        yearCycle--;
    }
    document.getElementById("month").removeChild(document.getElementById("month").firstElementChild);
    document.getElementById("dayList").innerHTML = "";
    createCalendar(direction);
}

function loadMarkers() {
    for (const element of object.children) {
        let name = element.split("\"")[3]
        if (!name.includes(namedMonth)) continue;
        let symbol = name.substring(0, name.length - 1);
        let note = createMarker(symbol, name);
        note.setAttribute('class', 'note ' + document.getElementById(name).firstChild.classList[1])
        document.getElementById(symbol).appendChild(note);
    }
}