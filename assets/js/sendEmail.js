function sendMail(){
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('description').value
    }
    emailjs.send('shutterarcstudios', 'shutterarcstudios_temp', params).then(alert('Email sent successfully!')) , function(err) {
        console.log('FAILED...', err);
    }
}