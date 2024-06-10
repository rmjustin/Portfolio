let scienceBoxes = document.querySelectorAll('input.scienceChildren');
let checkScience = document.getElementById('science');

//if parent is checked, all are checked
checkScience.onclick = function () {
    for (let i = 0; i < scienceBoxes.length; i++) {
        scienceBoxes[i].checked = this.checked;
    }
}

//sets parent to an inbetween state until all are checked/unchecked
for (let i = 0; i < scienceBoxes.length; i++) {
    scienceBoxes[i].onclick = function () {
        let checkedCount = document.querySelectorAll('input.scienceChildren:checked').length;

        checkScience.checked = checkedCount > 0;
        checkScience.indeterminate = checkedCount > 0 && checkedCount < scienceBoxes.length;
    }
}