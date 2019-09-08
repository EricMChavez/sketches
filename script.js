function makeSelected(selected){
    console.log(selected)
    let tabs = document.getElementsByClassName('navItem')
    for(let tab of tabs){
        tab.classList.remove('selected')
    }
    selected.classList += ' selected'
}

function setParallax(){
    let background = document.getElementById('bg')
    background.style.top = (window.scrollY / -8) + 'px'
}