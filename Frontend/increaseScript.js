
document.addEventListener('DOMContentLoaded', function() {

    if (localStorage.getItem('page_open_count')) {
        localStorage.setItem('page_open_count', parseInt(localStorage.getItem('page_open_count')) + 1);
    } else {
        localStorage.setItem('page_open_count', 1);
    }
    console.log('Page has been opened ' + localStorage.getItem('page_open_count') + ' times.');
});
