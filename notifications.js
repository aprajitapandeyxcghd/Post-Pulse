// Get the modal
const modal = document.getElementById('languageModal');

// Get the button that opens the modal (from the dropdown)
const languageButton = document.querySelector('.navbar .dropdown-content a[href="language.html"]');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal 
languageButton.onclick = function() {
    modal.style.display = 'block';
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = 'none';
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}


