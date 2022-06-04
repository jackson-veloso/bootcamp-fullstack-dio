function changeMode() {
    changeClasses()
    changeText()
}

function changeClasses() {
    btn_theme.classList.toggle(darkModeClass)
    h1.classList.toggle(darkModeClass)
    body.classList.toggle(darkModeClass)
    footer.classList.toggle(darkModeClass)
}

function changeText(){
    const lightMode = 'Light Mode'
    const darkMode = 'Dark Mode'

    if(body.classList.contains(darkModeClass)) {
        btn_theme.innerHTML = lightMode
        h1.innerHTML = darkMode + ' ON'
        return
    }

    btn_theme.innerHTML = darkMode
    h1.innerHTML = lightMode + ' ON'

}

const darkModeClass = 'dark-mode'
const btn_theme = document.getElementById("mode-selector")
const h1 = document.getElementById("page-title")
const body = document.getElementsByTagName('body')[0]
const footer = document.getElementsByTagName('footer')[0]

btn_theme.addEventListener('click', changeMode)

