document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;

    if (name !== '' && email !== '' && message !== '') {
        window.location.href = 'file:///C:/Users/David/Desktop/GOA%20site/index.html';
    } else {
        alert('Please fill in all fields before submitting.');
    }
});
