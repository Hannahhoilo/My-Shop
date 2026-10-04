// modulen skal aldri røres av en html-fil men skal være et informasjonslager
// for andre js filer

// Module = IIFE -gjør at man kan pakke inn kode
// og bestemme hva inni der som skaø være tilgjenelig utenfor. alt amet er skjult

const ProductModule = (() => {
  // Ting som alltid skaø være i et modul
  const productData = {
    lastUpdated: "01.09.25 14:52",
    products: [
      {
        id: 1,
        name: "Chipotle Pølse",
        image: "chipotle-pølse.jpg",
        frozenProduct: false,
        produceLocation: "Levanger",
        ingredients: ["Kylling", "Mysepulver", "Chipotle", "Tomatpurre"],
        price: 49,
      },
      {
        id: 2,
        name: "Fårikål",
        image: "fårikålkjøtt.jpg",
        frozenProduct: true,
        productionLocation: "Hitra",
        ingredients: ["Lammekjøtt", "Salt", "Surhetsregulerende middel"],
        price: 299,
      },
      {
        id: 3,
        name: "Grillpølse",
        image: "grillpølser.jpg",
        frozenProduct: false,
        productionLocation: "Ålesund",
        ingredients: ["Svinekjøtt", "Melk", "Løkpulver"],
        price: 25,
      },
      {
        id: 4,
        name: "Karbonadedeig",
        image: "karbonadedeig.jpg",
        frozenProduct: true,
        productionLocation: "Molde",
        ingredients: ["Karbonadekjøtt", "Salt", "Pepper", "E9353"],
        price: 139,
      },
      {
        id: 5,
        name: "Karbonader",
        image: "karbonader.jpg",
        frozenProduct: false,
        productionLocation: "Stjørdal",
        ingredients: [
          "Storfe",
          "Potetstivelse",
          "Salt",
          "Pepper",
          "Mel",
          "Surhetsregulerende middel",
        ],
        price: 89,
      },
      {
        id: 6,
        name: "Kyllingkjøttdeig",
        image: "kyllingkjøttdeig.jpg",
        frozenProduct: true,
        productionLocation: "Verdal",
        ingredients: ["Kyllingkjøtt", "Salt", "Pepper", "Mel", "Potetstivelse"],
        price: 189,
      },
      {
        id: 7,
        name: "Røkte kjøttpølser",
        image: "røkte-kjøttpølser.jpg",
        frozenProduct: false,
        productionLocation: "Drammen",
        ingredients: ["Elg", "Storfe", "Salt", "Pepper", "Mel", "Potetstivelse"],
        price: 189,
      },
      {
        id: 8,
        name: "Wienerpølser",
        image: "wienerpølser.jpg",
        frozenProduct: true,
        productionLocation: "Levanger",
        ingredients: ["Svinekjøtt", "Salt", "Pepper", "Melk", "Potetstivelse", "Løkpulver"],
        price: 189,
      },
    ],
  }; // end meatData

  const getAll = () => {
    return structuredClone(productData.products);
  }; //structuredclone - pa	kker inn arrayet, slik at man ikke kan redigere orginararrayet.
  // sender ut en kopi istedenfor.

  // return for publisering av utvalgt funskjonaliget
  return {
    getAll,
  }; 
})();

export default ProductModule;
