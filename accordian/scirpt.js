
document.addEventListener('DOMContentLoaded', function() {
    const accordion = document.getElementsByClassName('content-container');
    
    for(let i = 0; i < accordion.length; i++){
        accordion[i].addEventListener('click', function(){
            console.log('Clicked accordion item'); // Debug log
            this.classList.toggle('active');
            console.log('Active class:', this.classList.contains('active')); // Debug log
        });
    }
});

