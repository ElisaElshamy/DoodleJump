document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const player = document.createElement('div');
    let playerLeftSpace = 50;
    let playerBottomSpace = 150;
    let isGameOver = false;
    let platformCount = 5;

    function createPlayer() {
        grid.appendChild(player);
        player.classList.add('player');
        player.style.left = `${playerLeftSpace}px`;
        player.style.bottom = `${playerBottomSpace}px`;
    }

    function createPlatforms() {
        for(let i = 0; i < platformCount; i++) {
            let platGap = 600 / platformCount;
            let newPlatBottom = 100 + i * platGap;
            let newPlatform = new Platform();
        }
    }

    function start() {
        if (!isGameOver) {
            createPlayer();
            createPlatforms();
        }
    }

    start();


});