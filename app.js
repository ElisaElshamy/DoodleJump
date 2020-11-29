document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const player = document.createElement('div');
    let playerLeftSpace = 50;
    let playerBottomSpace = 150;
    let isGameOver = false;
    let platformCount = 5;
    let platforms = [];
    let upTimerId;
    let downTimerId;

    class Platform {
        constructor(newPlatBottom) {
            this.bottom = newPlatBottom;
            this.left = Math.random() * 315;
            this.visual = document.createElement('div');

            const visual = this.visual;
            visual.classList.add('platform');
            visual.style.left = `${this.left}px`;
            visual.style.bottom = `${this.bottom}px`;
            grid.appendChild(visual);
        }
    }

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
            let newPlatform = new Platform(newPlatBottom);
            platforms.push(newPlatform);      
        }
    }

    function movePlatforms() {
        if (playerBottomSpace > 200) {
            platforms.forEach(platform => {
                platform.bottom -= 4;
                let visual = platform.visual;
                visual.style.bottom = `${platform.bottom}px`; 
            })
        }
    }

    function jump() {
        clearInterval(downTimerId);
        upTimerId = setInterval(function() {
            playerBottomSpace += 20;
            player.style.bottom = `${playerBottomSpace}px`;
            
            if(playerBottomSpace > 350) {
                fall();
            }
        }, 30);
    }

    function fall() {
        clearInterval(upTimerId);
        downTimerId = setInterval(function () {
            playerBottomSpace -= 5;
            player.style.bottom = `${playerBottomSpace}px`;

            if(playerBottomSpace <= 0 ) {
                gameOver();
            }
        }, 30);
    }

    function start() {
        if (!isGameOver) {
            createPlayer();
            createPlatforms();
            setInterval(movePlatforms, 30);
            jump();
        }
    }

    start();

});