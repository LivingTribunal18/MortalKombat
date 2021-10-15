players = [
  {
    name: "Subziro",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/kitana.gif",
    weapon: ["gun", "knife", "sword"],
    attack: null,
  },
  {
    name: "Tiger",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/subzero.gif",
    weapon: ["fire", "ice", "bow"],
    attack: null,
  },
];

const attackHandler = (id) => {
  console.log(players[id].name, " Fight");
};
players[0].attack = attackHandler;
players[1].attack = attackHandler;

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

createPlayer("player1", players[0]);
createPlayer("player2", players[1]);
