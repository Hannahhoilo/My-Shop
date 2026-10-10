// modulen skal aldri røres av en html-fil men skal være et informasjonslager
// for andre js filer

// Module = IIFE -gjør at man kan pakke inn kode
// og bestemme hva inni der som skaø være tilgjenelig utenfor. alt amet er skjult

const ProductModule = (() => {
  // Ting som alltid skaø være i et modul
  const productData = {
    lastUpdated: "10.10.26 22:20",
    products: [
      {
        id: 1,
        name: "Zelda: Breath of the Wild",
        image: "zelda-breath-of-the-wild.jpg",
        retroGame: false,
        platform: "Nintendo Switch",
        releaseYear: 2017,
        condition: "Pent brukt",
        price: 449,
      },
      {
        id: 2,
        name: "PlayStation 2",
        image: "playstation-2.jpg",
        retroGame: true,
        platform: "Sony",
        releaseYear: 2000,
        condition: "Brukt, med én kontroller og minnekort",
        price: 899,
      },
      {
        id: 3,
        name: "Super Mario World",
        image: "super-mario-world.jpg",
        retroGame: true,
        platform: "Super Nintendo",
        releaseYear: 1990,
        condition: "Brukt, kun kassett",
        price: 399,
      },
      {
        id: 4,
        name: "Nintendo 64",
        image: "nintendo-64.jpg",
        retroGame: true,
        platform: "Nintendo",
        releaseYear: 1996,
        condition: "Pent brukt, med én kontroller",
        price: 1199,
      },
      {
        id: 5,
        name: "Marvel's Spider-Man 2",
        image: "spider-man-2.jpg",
        retroGame: false,
        platform: "PlayStation 5",
        releaseYear: 2023,
        condition: "Som ny",
        price: 399,
      },
      {
        id: 6,
        name: "PlayStation 4",
        image: "playstation-4.jpg",
        retroGame: false,
        platform: "Sony",
        releaseYear: 2013,
        condition: "Pent brukt, med én kontroller",
        price: 1499,
      },
      {
        id: 7,
        name: "Pokémon Red",
        image: "pokemon-red.jpg",
        retroGame: true,
        platform: "Game Boy",
        releaseYear: 1996,
        condition: "Brukt, kun kassett",
        price: 549,
      },
      {
        id: 8,
        name: "Game Boy Advance",
        image: "game-boy-advance.jpg",
        retroGame: true,
        platform: "Nintendo",
        releaseYear: 2001,
        condition: "Pent brukt",
        price: 799,
      },
      {
        id: 9,
        name: "Mario Kart 8 Deluxe",
        image: "mario-kart-8-deluxe.jpg",
        retroGame: false,
        platform: "Nintendo Switch",
        releaseYear: 2017,
        condition: "Pent brukt",
        price: 429,
      },
      {
        id: 10,
        name: "Xbox 360",
        image: "xbox-360.jpg",
        retroGame: true,
        platform: "Microsoft",
        releaseYear: 2005,
        condition: "Brukt, med én trådløs kontroller",
        price: 899,
      },
      {
        id: 11,
        name: "Crash Bandicoot",
        image: "crash-bandicoot.jpg",
        retroGame: true,
        platform: "PlayStation",
        releaseYear: 1996,
        condition: "Brukt, med eske og manual",
        price: 249,
      },
      {
        id: 12,
        name: "PlayStation",
        image: "playstation-1.jpg",
        retroGame: true,
        platform: "Sony",
        releaseYear: 1994,
        condition: "Brukt, med én kontroller",
        price: 699,
      },
      {
        id: 13,
        name: "Elden Ring",
        image: "elden-ring.jpg",
        retroGame: false,
        platform: "PlayStation 5",
        releaseYear: 2022,
        condition: "Pent brukt",
        price: 349,
      },
      {
        id: 14,
        name: "Nintendo Wii",
        image: "nintendo-wii.jpg",
        retroGame: true,
        platform: "Nintendo",
        releaseYear: 2006,
        condition: "Pent brukt, med Wii Remote og Nunchuk",
        price: 699,
      },
      {
        id: 15,
        name: "GoldenEye 007",
        image: "goldeneye-007.jpg",
        retroGame: true,
        platform: "Nintendo 64",
        releaseYear: 1997,
        condition: "Brukt, kun kassett",
        price: 499,
      },
      {
        id: 16,
        name: "Nintendo DS",
        image: "nintendo-ds.jpg",
        retroGame: true,
        platform: "Nintendo",
        releaseYear: 2004,
        condition: "Brukt, med lader",
        price: 599,
      },
      {
        id: 17,
        name: "World of Warcraft",
        image: "world-of-warcraft.jpg",
        retroGame: true,
        platform: "PC",
        releaseYear: 2004,
        condition: "Brukt, med eske, CD-er og manual",
        price: 299,
      },
    ],
  }; // end data

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
