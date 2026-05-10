const int_button = document.querySelector('#int')
let expanded_flag = false

let active_sidebar = 'favourites'

function ExpandRes(isExpanded) {
    const expand_bar = document.querySelector('.sidebar_r')

    if (isExpanded) {
        expand_bar.style.right = '-300px'
    } else {
        expand_bar.style.right = '0'
    }

    expanded_flag = !expanded_flag
}

int_button.addEventListener('click', () => {
    // ExpandRes(expanded_flag)
})