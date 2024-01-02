const tabItems = document.querySelectorAll('.tab-item');
const tabContentitems = document.querySelectorAll('.tab-content-item');

//select tab content items
function selectItems(e){
    removeborder();
    removeShow();
    // add border
    this.classList.add('tab-border');
    //grab content from DOM
    const tabContentitem = document.querySelector(`#${this.id}-content`);
    //add show class
    tabContentitem.classList.add('show');
}

function removeborder(){
    tabItems.forEach(items => items.classList.remove('tab-border'));
}

function removeShow(){
    tabContentitems.forEach(items => items.classList.remove('show'));
}
//listen for tab click (Event listner)
tabItems.forEach(items => items.addEventListener('click',selectItems));