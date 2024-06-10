function handleClick(element){
    
    if(element.checked){
        console.log('doing stuff');
      localStorage.setItem(element.name, 'true');
    }else{
      localStorage.removeItem(element.name);
    }
  }

window.onload = function(){
    var checkboxList = document.querySelectorAll(".check");
    for(var i=0; i<checkboxList.length; i++){
      if(localStorage.getItem(checkboxList[i].name) == "true"){
        checkboxList[i].checked = true;
      }
    }
  }


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

let sneakBoxes = document.querySelectorAll('input.sneakChildren');
let checkSneak = document.getElementById('sneak');

//if parent is checked, all are checked
checkSneak.onclick = function () {
    for (let i = 0; i < sneakBoxes.length; i++) {
        sneakBoxes[i].checked = this.checked;
    }
}

//sets parent to an inbetween state until all are checked/unchecked
for (let i = 0; i < sneakBoxes.length; i++) {
    sneakBoxes[i].onclick = function () {
        let checkedCount = document.querySelectorAll('input.sneakChildren:checked').length;

        checkSneak.checked = checkedCount > 0;
        checkSneak.indeterminate = checkedCount > 0 && checkedCount < sneakBoxes.length;
    }
}

// let sneakBoxes = document.querySelectorAll('input.sneakChildren');
// let checkSneak = document.getElementById('sneak');

// //if parent is checked, all are checked
// checkSneak.onclick = function () {
//     for (let i = 0; i < sneakBoxes.length; i++) {
//         sneakBoxes[i].checked = this.checked;
//     }
// }

// //sets parent to an inbetween state until all are checked/unchecked
// for (let i = 0; i < sneakBoxes.length; i++) {
//     sneakBoxes[i].onclick = function () {
//         let checkedCount = document.querySelectorAll('input.sneakChildren:checked').length;

//         checkSneak.checked = checkedCount > 0;
//         checkSneak.indeterminate = checkedCount > 0 && checkedCount < sneakBoxes.length;
//     }
// }



// -----------separate id's/classes for each section on checklists---------

let companionBoxes = document.querySelectorAll('input.companions');
let allCompanions = document.getElementById('companionsParent');

//if parent is checked, all are checked
allCompanions.onclick = function () {
    for (let i = 0; i < companionBoxes.length; i++) {
        companionBoxes[i].checked = this.checked;
    }
}

//sets parent to an inbetween state until all are checked/unchecked
for (let i = 0; i < companionBoxes.length; i++) {
    companionBoxes[i].onclick = function () {
        let checkedCount = document.querySelectorAll('input.children:checked').length;

        allCompanions.checked = checkedCount > 0;
        allCompanions.indeterminate = checkedCount > 0 && checkedCount < companionBoxes.length;
    }
}