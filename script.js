document.addEventListener('DOMContentLoaded', () => {
    const pillsContainer = document.getElementById('pills-background');
    const numberOfPills = 350; 
    const colors = [
        'linear-gradient(to bottom right, #ffcc00, #ff6600)',
        'linear-gradient(to bottom right, #66ccff, #3399ff)',
        'linear-gradient(to bottom right, #99cc33, #66cc66)',
        'linear-gradient(to bottom right, #cc33cc, #ff66ff)',
        'linear-gradient(to bottom right, #ff9966, #ff6633)',
        'linear-gradient(to bottom right, #ffff66, #ffcc00)'
    ];
    const animations = ['float', 'float2', 'float3'];

    for (let i = 0; i < numberOfPills; i++) {
        const pill = document.createElement('div');
        pill.className = 'pill';
        pill.style.background = colors[Math.floor(Math.random() * colors.length)];
        pill.style.top = Math.random() * 100 + 'vh';
        pill.style.left = Math.random() * 100 + 'vw';

        const animation = animations[Math.floor(Math.random() * animations.length)];
        const duration = Math.random() * 5 + 5; 
        const delay = Math.random() * 1; 

        pill.style.animation = `${animation} ${duration}s infinite ${delay}s ease-in-out`;

        pillsContainer.appendChild(pill);
    }
});
