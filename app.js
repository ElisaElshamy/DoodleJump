document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const player = document.createElement('div');

    function createPlayer() {
        grid.appendChild(player);
        player.classList.add('player');
    }

    createPlayer();
});