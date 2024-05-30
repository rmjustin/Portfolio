let checkboxes = document.querySelectorAll('input.children');
let checkAll = document.getElementById('parent');

//if parent is checked, all are checked
checkAll.onclick = function () {
    for(let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = this.checked;
    }
}

//sets parent to an inbetween state until all are checked/unchecked
for(let i=0; i<checkboxes.length; i++) {
    checkboxes[i].onclick = function() {
      let checkedCount = document.querySelectorAll('input.children:checked').length;
  
      checkAll.checked = checkedCount > 0;
      checkAll.indeterminate = checkedCount > 0 && checkedCount < checkboxes.length;
    }
  }