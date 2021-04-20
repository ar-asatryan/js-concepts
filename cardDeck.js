const GAME_CARS_SUITS = ["h", "d", "s", "c"];

const GAME_CARD_SYMBOLS = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const getShuffledDeck = () => {
  return shuffledArray(
    GAME_CARS_SUITS.map((suit) =>
      GAME_CARD_SYMBOLS.map((symbol) => `${suit}${symbol}`)
    ).flat()
  );
};

const shuffledArray = (a) => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};

const SOLITAIRE_STOCK_COUNT = 24;
const SOLITAIRE_COLUMNS_COUNT = 7;

const getSolitaireBoard = () => {
  const cards = getShuffledDeck();
  const stock = cards.splice(0, SOLITAIRE_STOCK_COUNT);
  const columns = [];
  for (let i = 1; i <= SOLITAIRE_COLUMNS_COUNT; i++) {
    columns.push(cards.splice(0, i).map((c, j) => (j === i - 1 ? `v${c}` : c)));
  }
  return {
    stock,
    columns,
  };
};

const deck = getShuffledDeck();
console.log("cards deck-------->", deck);

const board = getSolitaireBoard();
console.log("board--------->", board);
