const sound = new Audio('src/som.mp3');
        buttons = document.querySelectorAll('.num');

        for (const button of buttons) {
            button.addEventListener('click', () => {sound.play()});
        };


