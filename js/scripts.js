//Select the floating button in the UI
const floatingBTN = document.querySelector('.footerBtn');

// Attach an Event Listener
floatingBTN.addEventListener('click', e => {
    //Select the Footer//
    const footer = document.querySelector('.footer');

    if (footer.classList.contains('active')) {
        footer.classList.remove('active');
        e.target.innerText = 'Terms, Privacy, Currency & More';
    } else {
        footer.classList.add('active');
        e.target.innerText = 'X Close';
    }
})