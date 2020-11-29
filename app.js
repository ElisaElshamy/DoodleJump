document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const player = document.createElement('div');
    let playerLeftSpace = 50;
    let playerBottomSpace = 150;

    function createPlayer() {
        grid.appendChild(player);
        player.classList.add('player');
        player.style.left = `${playerLeftSpace}px`;
        player.style.bottom = `${playerBottomSpace}px`;
    }

    createPlayer();
});