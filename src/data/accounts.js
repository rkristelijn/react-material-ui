export default amount => {
  return rows.slice(0, amount);
};

const createData = (id, name, shipTo, paymentMethod) => {
  return { id, name, shipTo, paymentMethod };
};
const getCreditCard = () => {
  return getRandomItem(["VISA", "MC", "AMEX"]);
};
const getRandomDigit = (lowerLimit, upperLimit) => {
  return Math.floor(Math.random() * upperLimit) + lowerLimit;
};
const getRandomDigits = amount => {
  return (
    "" +
    getRandomDigit(1, 9) +
    getRandomDigit(0, 9) +
    getRandomDigit(0, 9) +
    getRandomDigit(0, 9)
  );
};
const getRandomItem = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};
const getCreditCardNr = () => {
  return getCreditCard() + " ⠀•••• " + getRandomDigits(4);
};

//added some dj's from https://www.djguide.nl/

const rows = [
  createData(0, "Elvis Presley", "Tupelo, MS", getCreditCardNr()),
  createData(1, "Paul McCartney", "London, UK", getCreditCardNr()),
  createData(2, "Tom Scholz", "Boston, MA", getCreditCardNr()),
  createData(3, "Michael Jackson", "Gary, IN", getCreditCardNr()),
  createData(4, "Bruce Springsteen", "Long Branch, NJ", getCreditCardNr()),
  createData(5, "David Guetta", "Parise, FR", getCreditCardNr()),
  createData(6, "Tiesto", "Breda, NL", getCreditCardNr()),
  createData(7, "Martin Garrix", "Amstelveen, NL", getCreditCardNr()),
  createData(8, "Avicii", "Stockholm, SW", getCreditCardNr()),
  createData(9, "La Fuente", "Eindhoven, NL", getCreditCardNr()),
  createData(10, "Armin van Buuren", "Leiden, NL", getCreditCardNr()),
  createData(11, "Skrillex", "Los Angeles, CA", getCreditCardNr()),
  createData(12, "Hardwell", "Breda, NL", getCreditCardNr()),
  createData(13, "Afrojack", "Spijkenisse, NL", getCreditCardNr()),
  createData(14, "Daft Punk", "Parise, FR", getCreditCardNr()),
  createData(
    15,
    "Dimitri Vegas & Like Mike",
    "Willebroek, BE",
    getCreditCardNr()
  ),
  createData(16, "Calvin Harris", "Dumfries, UK", getCreditCardNr()),
  createData(17, "Swedish House mafia", "Stockholm, SW", getCreditCardNr()),
  createData(18, "Camiel Daamen", "Groningen, NL", getCreditCardNr()),
  createData(19, "Deadmau5", "Niagara Falls, CA", getCreditCardNr())
];
