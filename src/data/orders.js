export default amount => {
  return rows.slice(0, amount);
};

const createData = (id, date, name, shipTo, paymentMethod, amount) => {
  return { id, date, name, shipTo, paymentMethod, amount };
};
const getRandomAmount = () => {
  return (Math.random() * 1000).toFixed(2);
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
  createData(
    0,
    "16 Mar, 2019",
    "Elvis Presley",
    "Tupelo, MS",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    1,
    "16 Mar, 2019",
    "Paul McCartney",
    "London, UK",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    2,
    "16 Mar, 2019",
    "Tom Scholz",
    "Boston, MA",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    3,
    "16 Mar, 2019",
    "Michael Jackson",
    "Gary, IN",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    4,
    "15 Mar, 2019",
    "Bruce Springsteen",
    "Long Branch, NJ",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    5,
    "15 Mar, 2019",
    "David Guetta",
    "Parise, FR",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    6,
    "15 Mar, 2019",
    "Tiesto",
    "Breda, NL",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    7,
    "15 Mar, 2019",
    "Martin Garrix",
    "Amstelveen, NL",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    8,
    "15 Mar, 2019",
    "Avicii",
    "Stockholm, SW",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    9,
    "15 Mar, 2019",
    "La Fuente",
    "Eindhoven, NL",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    10,
    "15 Mar, 2019",
    "Armin van Buuren",
    "Leiden, NL",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    11,
    "15 Mar, 2019",
    "Skrillex",
    "Los Angeles, CA",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    12,
    "15 Mar, 2019",
    "Hardwell",
    "Breda, NL",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    13,
    "15 Mar, 2019",
    "Afrojack",
    "Spijkenisse, NL",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    14,
    "15 Mar, 2019",
    "Daft Punk",
    "Parise, FR",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    15,
    "15 Mar, 2019",
    "Dimitri Vegas & Like Mike",
    "Willebroek, BE",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    16,
    "15 Mar, 2019",
    "Calvin Harris",
    "Dumfries, UK",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    17,
    "15 Mar, 2019",
    "Swedish House mafia",
    "Stockholm, SW",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    18,
    "15 Mar, 2019",
    "Camiel Daamen",
    "Groningen, NL",
    getCreditCardNr(),
    getRandomAmount()
  ),
  createData(
    19,
    "15 Mar, 2019",
    "Deadmau5",
    "Niagara Falls, CA",
    getCreditCardNr(),
    getRandomAmount()
  )
];
