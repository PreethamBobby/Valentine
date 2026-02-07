document.addEventListener('DOMContentLoaded', function() {
    const revealButton = document.getElementById('revealButton');
    const proposal = document.getElementById('proposal');
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const celebration = document.getElementById('celebration');
    const retryMessage = document.getElementById('retryMessage');
    
    let noClickCount = 0;
    const noButtonMessages = [
        "Oops! 😅 I know it was by mistake, please choose again! 🥺🙏💕",
        "Come on Vanitha! 😄 My dance moves have improved (a little)! Please try the other button! 🥺💃🕺",
        "Okay okay! 😂 I promise to let you choose the movie every weekend! Please click the right one! 🥺🎬🍿",
        "I know your heart where I stay will definitely choose Yes... 💖😊"
    ];
    
    // Create confetti effect
    function createConfetti() {
        const colors = ['#ff6b9d', '#c06c84', '#f67280', '#f8b500', '#ffd93d', '#6bcf7f'];
        
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '-10px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.borderRadius = '50%';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '1000';
                confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear`;
                
                document.body.appendChild(confetti);
                
                setTimeout(() => {
                    confetti.remove();
                }, 5000);
            }, i * 30);
        }
    }
    
    // Add confetti animation to stylesheet
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFall {
            to {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Reveal proposal when button is clicked
    revealButton.addEventListener('click', function() {
        revealButton.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => {
            revealButton.style.display = 'none';
            proposal.classList.remove('hidden');
        }, 500);
    });
    
    // Handle Yes button click
    yesButton.addEventListener('click', function() {
        proposal.style.animation = 'fadeOut 0.5s ease-out';
        setTimeout(() => {
            proposal.style.display = 'none';
            celebration.classList.remove('hidden');
            createConfetti();
        }, 500);
    });
    
    // Handle No button click
    noButton.addEventListener('click', function() {
        if (noClickCount < 4) {
            retryMessage.textContent = noButtonMessages[noClickCount];
            retryMessage.style.animation = 'none';
            setTimeout(() => {
                retryMessage.style.animation = 'shake 0.5s ease-in-out';
            }, 10);
            noClickCount++;
            
            // After 4 attempts, hide No button and show only Yes button
            if (noClickCount === 4) {
                setTimeout(() => {
                    noButton.style.display = 'none';
                    yesButton.textContent = "Yes! 💕😊";
                }, 1500);
            }
        }
    });
    
    // Add fadeOut animation
    const fadeOutStyle = document.createElement('style');
    fadeOutStyle.textContent = `
        @keyframes fadeOut {
            to {
                opacity: 0;
                transform: scale(0.8);
            }
        }
    `;
    document.head.appendChild(fadeOutStyle);
});
