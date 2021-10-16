players = [
  {
    id: 1,
    classPlayer: "player1",
    name: "Subziro",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ["gun", "knife", "sword"],
    attack: function (name) {
      console.log(name + " Fight...");
    },
  },
  {
    id: 2,
    classPlayer: "player2",
    name: "Tiger",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["fire", "ice", "bow"],
    attack: function (name) {
      console.log(name + " Fight...");
    },
  },
];

const attack1 = document.querySelector(".attack1");
const attack2 = document.querySelector(".attack2");

function createPageElement(
  type,
  className,
  appendParent,
  idName = null,
  appendData = null
) {
  let elem = document.createElement(type);
  elem.classList.add(className);

  idName && (elem.id = idName);
  type === "img"
    ? (elem.src = appendData)
    : appendData && elem.append(appendData);

  document.getElementById(appendParent).append(elem);
}

function createPlayer(className, playerObj) {
  // crate div class="player[1/2]"
  createPageElement("div", className, "arena1", className);

  // crate div progressbar
  createPageElement(
    "div",
    "progressbar",
    className,
    "progressbar_" + className
  );

  // crate div life
  createPageElement("div", "life", "progressbar_" + className);

  // crate div name
  createPageElement(
    "div",
    "name",
    "progressbar_" + className,
    null,
    playerObj.name
  );

  // crate div character
  createPageElement("div", "character", className, "character_" + className);

  // crate img
  createPageElement(
    "img",
    "img_src",
    "character_" + className,
    null,
    playerObj.img
  );
}

createPlayer(players[0].classPlayer, players[0]);
createPlayer(players[1].classPlayer, players[1]);

function randomHpGenerator() {
  return Math.floor(Math.random() * 20);
}

function checkHp(players) {
  let player1 = players[0];
  let player2 = players[1];

  if (player1.hp < 0) {
    return player2.name;
  } else if (player2.hp < 0) {
    return player1.name;
  }
}

function changeHp(player) {
  const playerLife = document.querySelector(`.${player.classPlayer} .life`);

  player.hp -= randomHpGenerator();
  playerLife.style.width = player.hp + "%";

  playerWins = checkHp(players) || null;
  console.log(playerWins);

  if (playerWins) {
    createPageElement(
      "div",
      "loseTitle",
      "arena1",
      null,
      playerWins + " wins!"
    );

    playerLife.style.width = "0%";
    attack1.disabled = true;
    attack2.disabled = true;
  }
}

attack1.addEventListener("click", function () {
  changeHp(players[0]);
});

attack2.addEventListener("click", function () {
  changeHp(players[1]);
});
