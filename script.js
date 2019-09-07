function makeSelected(selected){
    let tabs = document.getElementsByClassName('navItem')
    for(let tab of tabs){
        tab.classList.remove('selected')
    }
    selected.classList += ' selected'
}