import { getBuilder } from "@/mocks/utils/builder.ts";
import { Character, CharacterResponse } from "@/types/Character.ts";

export const mockCharacterResponse = getBuilder<CharacterResponse>({
  data: {
    character: {
      id: 295,
      name: "Riq IV",
      image: "https://rickandmortyapi.com/api/character/avatar/295.jpeg",
      status: "Dead",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        dimension: null,
        name: "unknown",
      },
      location: {
        dimension: "unknown",
        name: "Citadel of Ricks",
      },
      episode: [
        {
          episode: "S01E10",
          id: "10",
          name: "Close Rick-counters of the Rick Kind",
          characters: [
            {
              id: "1",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              name: "Rick Sanchez",
              origin: {
                id: "1",
                dimension: "Dimension C-137",
                name: "Earth (C-137)",
              },
            },
            {
              id: "2",
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              name: "Morty Smith",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "3",
              image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
              name: "Summer Smith",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "4",
              image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
              name: "Beth Smith",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "5",
              image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
              name: "Jerry Smith",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "7",
              image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
              name: "Abradolf Lincler",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "14",
              image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
              name: "Alien Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "15",
              image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
              name: "Alien Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "18",
              image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
              name: "Antenna Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "19",
              image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
              name: "Antenna Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "21",
              image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
              name: "Aqua Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "22",
              image: "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
              name: "Aqua Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "27",
              image: "https://rickandmortyapi.com/api/character/avatar/27.jpeg",
              name: "Artist Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "39",
              image: "https://rickandmortyapi.com/api/character/avatar/39.jpeg",
              name: "Beth Smith",
              origin: {
                id: "34",
                dimension: "Evil Rick's Target Dimension",
                name: "Earth (Evil Rick's Target Dimension)",
              },
            },
            {
              id: "53",
              image: "https://rickandmortyapi.com/api/character/avatar/53.jpeg",
              name: "Blue Shirt Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "77",
              image: "https://rickandmortyapi.com/api/character/avatar/77.jpeg",
              name: "Cowboy Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "78",
              image: "https://rickandmortyapi.com/api/character/avatar/78.jpeg",
              name: "Cowboy Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "79",
              image: "https://rickandmortyapi.com/api/character/avatar/79.jpeg",
              name: "Crab Spider",
              origin: {
                id: "27",
                dimension: "unknown",
                name: "Hideout Planet",
              },
            },
            {
              id: "82",
              image: "https://rickandmortyapi.com/api/character/avatar/82.jpeg",
              name: "Cronenberg Rick",
              origin: {
                id: "12",
                dimension: "Cronenberg Dimension",
                name: "Cronenberg Earth",
              },
            },
            {
              id: "83",
              image: "https://rickandmortyapi.com/api/character/avatar/83.jpeg",
              name: "Cronenberg Morty",
              origin: {
                id: "12",
                dimension: "Cronenberg Dimension",
                name: "Cronenberg Earth",
              },
            },
            {
              id: "84",
              image: "https://rickandmortyapi.com/api/character/avatar/84.jpeg",
              name: "Cult Leader Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "85",
              image: "https://rickandmortyapi.com/api/character/avatar/85.jpeg",
              name: "Cyclops Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "86",
              image: "https://rickandmortyapi.com/api/character/avatar/86.jpeg",
              name: "Cyclops Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "103",
              image:
                "https://rickandmortyapi.com/api/character/avatar/103.jpeg",
              name: "Doofus Rick",
              origin: {
                id: "31",
                dimension: "Dimension J19ζ7",
                name: "Earth (J19ζ7)",
              },
            },
            {
              id: "113",
              image:
                "https://rickandmortyapi.com/api/character/avatar/113.jpeg",
              name: "Eric Stoltz Mask Morty",
              origin: {
                id: "33",
                dimension: "Eric Stoltz Mask Dimension",
                name: "Eric Stoltz Mask Earth",
              },
            },
            {
              id: "118",
              image:
                "https://rickandmortyapi.com/api/character/avatar/118.jpeg",
              name: "Evil Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "119",
              image:
                "https://rickandmortyapi.com/api/character/avatar/119.jpeg",
              name: "Evil Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "152",
              image:
                "https://rickandmortyapi.com/api/character/avatar/152.jpeg",
              name: "Hammerhead Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "164",
              image:
                "https://rickandmortyapi.com/api/character/avatar/164.jpeg",
              name: "Insurance Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "177",
              image:
                "https://rickandmortyapi.com/api/character/avatar/177.jpeg",
              name: "Jerry Smith",
              origin: {
                id: "34",
                dimension: "Evil Rick's Target Dimension",
                name: "Earth (Evil Rick's Target Dimension)",
              },
            },
            {
              id: "209",
              image:
                "https://rickandmortyapi.com/api/character/avatar/209.jpeg",
              name: "Long Sleeved Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "215",
              image:
                "https://rickandmortyapi.com/api/character/avatar/215.jpeg",
              name: "Maximums Rickimus",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "232",
              image:
                "https://rickandmortyapi.com/api/character/avatar/232.jpeg",
              name: "Morty Smith",
              origin: {
                id: "34",
                dimension: "Evil Rick's Target Dimension",
                name: "Earth (Evil Rick's Target Dimension)",
              },
            },
            {
              id: "242",
              image:
                "https://rickandmortyapi.com/api/character/avatar/242.jpeg",
              name: "Mr. Meeseeks",
              origin: {
                id: "53",
                dimension: "unknown",
                name: "Mr. Meeseeks Box",
              },
            },
            {
              id: "274",
              image:
                "https://rickandmortyapi.com/api/character/avatar/274.jpeg",
              name: "Quantum Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "290",
              image:
                "https://rickandmortyapi.com/api/character/avatar/290.jpeg",
              name: "Rick Sanchez",
              origin: {
                id: "34",
                dimension: "Evil Rick's Target Dimension",
                name: "Earth (Evil Rick's Target Dimension)",
              },
            },
            {
              id: "294",
              image:
                "https://rickandmortyapi.com/api/character/avatar/294.jpeg",
              name: "Ricktiminus Sancheziminius",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "295",
              image:
                "https://rickandmortyapi.com/api/character/avatar/295.jpeg",
              name: "Riq IV",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "298",
              image:
                "https://rickandmortyapi.com/api/character/avatar/298.jpeg",
              name: "Robot Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "299",
              image:
                "https://rickandmortyapi.com/api/character/avatar/299.jpeg",
              name: "Robot Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "329",
              image:
                "https://rickandmortyapi.com/api/character/avatar/329.jpeg",
              name: "Snuffles (Snowball)",
              origin: {
                id: "1",
                dimension: "Dimension C-137",
                name: "Earth (C-137)",
              },
            },
            {
              id: "330",
              image:
                "https://rickandmortyapi.com/api/character/avatar/330.jpeg",
              name: "Solicitor Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "339",
              image:
                "https://rickandmortyapi.com/api/character/avatar/339.jpeg",
              name: "Summer Smith",
              origin: {
                id: "34",
                dimension: "Evil Rick's Target Dimension",
                name: "Earth (Evil Rick's Target Dimension)",
              },
            },
            {
              id: "349",
              image:
                "https://rickandmortyapi.com/api/character/avatar/349.jpeg",
              name: "The Scientist Formerly Known as Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "359",
              image:
                "https://rickandmortyapi.com/api/character/avatar/359.jpeg",
              name: "Tortured Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "381",
              image:
                "https://rickandmortyapi.com/api/character/avatar/381.jpeg",
              name: "Woman Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "389",
              image:
                "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
              name: "Zeta Alpha Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "405",
              image:
                "https://rickandmortyapi.com/api/character/avatar/405.jpeg",
              name: "Trunkphobic suspenders guy",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "424",
              image:
                "https://rickandmortyapi.com/api/character/avatar/424.jpeg",
              name: "Pizza-person",
              origin: {
                id: "71",
                dimension: "Pizza Dimension",
                name: "Earth (Pizza Dimension)",
              },
            },
            {
              id: "425",
              image:
                "https://rickandmortyapi.com/api/character/avatar/425.jpeg",
              name: "Pizza-person",
              origin: {
                id: "71",
                dimension: "Pizza Dimension",
                name: "Earth (Pizza Dimension)",
              },
            },
            {
              id: "426",
              image:
                "https://rickandmortyapi.com/api/character/avatar/426.jpeg",
              name: "Greasy Grandma",
              origin: {
                id: "73",
                dimension: "unknown",
                name: "Greasy Grandma World",
              },
            },
            {
              id: "427",
              image:
                "https://rickandmortyapi.com/api/character/avatar/427.jpeg",
              name: "Phone-person",
              origin: {
                id: "72",
                dimension: "Phone Dimension",
                name: "Earth (Phone Dimension)",
              },
            },
            {
              id: "428",
              image:
                "https://rickandmortyapi.com/api/character/avatar/428.jpeg",
              name: "Phone-person",
              origin: {
                id: "72",
                dimension: "Phone Dimension",
                name: "Earth (Phone Dimension)",
              },
            },
            {
              id: "429",
              image:
                "https://rickandmortyapi.com/api/character/avatar/429.jpeg",
              name: "Chair-person",
              origin: {
                id: "74",
                dimension: "Chair Dimension",
                name: "Earth (Chair Dimension)",
              },
            },
            {
              id: "430",
              image:
                "https://rickandmortyapi.com/api/character/avatar/430.jpeg",
              name: "Chair-person",
              origin: {
                id: "74",
                dimension: "Chair Dimension",
                name: "Earth (Chair Dimension)",
              },
            },
            {
              id: "431",
              image:
                "https://rickandmortyapi.com/api/character/avatar/431.jpeg",
              name: "Chair-homeless",
              origin: {
                id: "74",
                dimension: "Chair Dimension",
                name: "Earth (Chair Dimension)",
              },
            },
            {
              id: "432",
              image:
                "https://rickandmortyapi.com/api/character/avatar/432.jpeg",
              name: "Chair-waiter",
              origin: {
                id: "74",
                dimension: "Chair Dimension",
                name: "Earth (Chair Dimension)",
              },
            },
            {
              id: "433",
              image:
                "https://rickandmortyapi.com/api/character/avatar/433.jpeg",
              name: "Doopidoo",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "434",
              image:
                "https://rickandmortyapi.com/api/character/avatar/434.jpeg",
              name: "Super Weird Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "663",
              image:
                "https://rickandmortyapi.com/api/character/avatar/663.jpeg",
              name: "Reggie",
              origin: {
                id: "90",
                dimension: "Replacement Dimension",
                name: "Mount Olympus",
              },
            },
          ],
        },
        {
          episode: "S01E11",
          id: "11",
          name: "Ricksy Business",
          characters: [
            {
              id: "1",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              name: "Rick Sanchez",
              origin: {
                id: "1",
                dimension: "Dimension C-137",
                name: "Earth (C-137)",
              },
            },
            {
              id: "2",
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              name: "Morty Smith",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "3",
              image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
              name: "Summer Smith",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "4",
              image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
              name: "Beth Smith",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "5",
              image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
              name: "Jerry Smith",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "7",
              image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
              name: "Abradolf Lincler",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "35",
              image: "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
              name: "Bepisian",
              origin: {
                id: "11",
                dimension: "unknown",
                name: "Bepis 9",
              },
            },
            {
              id: "47",
              image: "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
              name: "Birdperson",
              origin: {
                id: "15",
                dimension: "unknown",
                name: "Bird World",
              },
            },
            {
              id: "58",
              image: "https://rickandmortyapi.com/api/character/avatar/58.jpeg",
              name: "Brad",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "88",
              image: "https://rickandmortyapi.com/api/character/avatar/88.jpeg",
              name: "Cynthia",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "180",
              image:
                "https://rickandmortyapi.com/api/character/avatar/180.jpeg",
              name: "Jessica",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "181",
              image:
                "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
              name: "Jessica's Friend",
              origin: {
                id: "1",
                dimension: "Dimension C-137",
                name: "Earth (C-137)",
              },
            },
            {
              id: "210",
              image:
                "https://rickandmortyapi.com/api/character/avatar/210.jpeg",
              name: "Lucy",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "216",
              image:
                "https://rickandmortyapi.com/api/character/avatar/216.jpeg",
              name: "MC Haps",
              origin: {
                id: "1",
                dimension: "Dimension C-137",
                name: "Earth (C-137)",
              },
            },
            {
              id: "251",
              image:
                "https://rickandmortyapi.com/api/character/avatar/251.jpeg",
              name: "Nancy",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "282",
              image:
                "https://rickandmortyapi.com/api/character/avatar/282.jpeg",
              name: "Revolio Clockberg Jr.",
              origin: {
                id: "57",
                dimension: "unknown",
                name: "Gear World",
              },
            },
            {
              id: "295",
              image:
                "https://rickandmortyapi.com/api/character/avatar/295.jpeg",
              name: "Riq IV",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "308",
              image:
                "https://rickandmortyapi.com/api/character/avatar/308.jpeg",
              name: "Scropon",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "326",
              image:
                "https://rickandmortyapi.com/api/character/avatar/326.jpeg",
              name: "Slippery Stair",
              origin: {
                id: "48",
                dimension: "Fantasy Dimension",
                name: "Fantasy World",
              },
            },
            {
              id: "327",
              image:
                "https://rickandmortyapi.com/api/character/avatar/327.jpeg",
              name: "Slow Mobius",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "331",
              image:
                "https://rickandmortyapi.com/api/character/avatar/331.jpeg",
              name: "Squanchy",
              origin: {
                id: "35",
                dimension: "Replacement Dimension",
                name: "Planet Squanch",
              },
            },
            {
              id: "333",
              image:
                "https://rickandmortyapi.com/api/character/avatar/333.jpeg",
              name: "Stair Goblin",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "344",
              image:
                "https://rickandmortyapi.com/api/character/avatar/344.jpeg",
              name: "Tammy Guetermann",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "362",
              image:
                "https://rickandmortyapi.com/api/character/avatar/362.jpeg",
              name: "Traflorkian",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "389",
              image:
                "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
              name: "Zeta Alpha Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "395",
              image:
                "https://rickandmortyapi.com/api/character/avatar/395.jpeg",
              name: "Greebybobe",
              origin: {
                id: "68",
                dimension: "unknown",
                name: "Girvonesk",
              },
            },
            {
              id: "405",
              image:
                "https://rickandmortyapi.com/api/character/avatar/405.jpeg",
              name: "Trunkphobic suspenders guy",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "423",
              image:
                "https://rickandmortyapi.com/api/character/avatar/423.jpeg",
              name: "Synthetic Laser Eels",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "435",
              image:
                "https://rickandmortyapi.com/api/character/avatar/435.jpeg",
              name: "Pripudlian",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "436",
              image:
                "https://rickandmortyapi.com/api/character/avatar/436.jpeg",
              name: "Giant Testicle Monster",
              origin: {
                id: "21",
                dimension: "Testicle Monster Dimension",
                name: "Testicle Monster Dimension",
              },
            },
          ],
        },
        {
          episode: "S03E01",
          id: "22",
          name: "The Rickshank Rickdemption",
          characters: [
            {
              id: "1",
              image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
              name: "Rick Sanchez",
              origin: {
                id: "1",
                dimension: "Dimension C-137",
                name: "Earth (C-137)",
              },
            },
            {
              id: "2",
              image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
              name: "Morty Smith",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "3",
              image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
              name: "Summer Smith",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "4",
              image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
              name: "Beth Smith",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "5",
              image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
              name: "Jerry Smith",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "21",
              image: "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
              name: "Aqua Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "22",
              image: "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
              name: "Aqua Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "38",
              image: "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
              name: "Beth Smith",
              origin: {
                id: "1",
                dimension: "Dimension C-137",
                name: "Earth (C-137)",
              },
            },
            {
              id: "42",
              image: "https://rickandmortyapi.com/api/character/avatar/42.jpeg",
              name: "Big Head Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "47",
              image: "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
              name: "Birdperson",
              origin: {
                id: "15",
                dimension: "unknown",
                name: "Bird World",
              },
            },
            {
              id: "48",
              image: "https://rickandmortyapi.com/api/character/avatar/48.jpeg",
              name: "Black Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "57",
              image: "https://rickandmortyapi.com/api/character/avatar/57.jpeg",
              name: "Borpocian",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "69",
              image: "https://rickandmortyapi.com/api/character/avatar/69.jpeg",
              name: "Commander Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "71",
              image: "https://rickandmortyapi.com/api/character/avatar/71.jpeg",
              name: "Conroy",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "86",
              image: "https://rickandmortyapi.com/api/character/avatar/86.jpeg",
              name: "Cyclops Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "94",
              image: "https://rickandmortyapi.com/api/character/avatar/94.jpeg",
              name: "Diane Sanchez",
              origin: {
                id: "1",
                dimension: "Dimension C-137",
                name: "Earth (C-137)",
              },
            },
            {
              id: "95",
              image: "https://rickandmortyapi.com/api/character/avatar/95.jpeg",
              name: "Dipper and Mabel Mortys",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "103",
              image:
                "https://rickandmortyapi.com/api/character/avatar/103.jpeg",
              name: "Doofus Rick",
              origin: {
                id: "31",
                dimension: "Dimension J19ζ7",
                name: "Earth (J19ζ7)",
              },
            },
            {
              id: "150",
              image:
                "https://rickandmortyapi.com/api/character/avatar/150.jpeg",
              name: "Cornvelious Daniel",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "152",
              image:
                "https://rickandmortyapi.com/api/character/avatar/152.jpeg",
              name: "Hammerhead Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "175",
              image:
                "https://rickandmortyapi.com/api/character/avatar/175.jpeg",
              name: "Jerry Smith",
              origin: {
                id: "1",
                dimension: "Dimension C-137",
                name: "Earth (C-137)",
              },
            },
            {
              id: "200",
              image:
                "https://rickandmortyapi.com/api/character/avatar/200.jpeg",
              name: "Lawyer Morty",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "215",
              image:
                "https://rickandmortyapi.com/api/character/avatar/215.jpeg",
              name: "Maximums Rickimus",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "231",
              image:
                "https://rickandmortyapi.com/api/character/avatar/231.jpeg",
              name: "Morty Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "240",
              image:
                "https://rickandmortyapi.com/api/character/avatar/240.jpeg",
              name: "Mr. Goldenfold",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "274",
              image:
                "https://rickandmortyapi.com/api/character/avatar/274.jpeg",
              name: "Quantum Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "285",
              image:
                "https://rickandmortyapi.com/api/character/avatar/285.jpeg",
              name: "Rick Prime",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "286",
              image:
                "https://rickandmortyapi.com/api/character/avatar/286.jpeg",
              name: "Rick D-99",
              origin: {
                id: "58",
                dimension: "Dimension D-99",
                name: "Earth (D-99)",
              },
            },
            {
              id: "294",
              image:
                "https://rickandmortyapi.com/api/character/avatar/294.jpeg",
              name: "Ricktiminus Sancheziminius",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "295",
              image:
                "https://rickandmortyapi.com/api/character/avatar/295.jpeg",
              name: "Riq IV",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "330",
              image:
                "https://rickandmortyapi.com/api/character/avatar/330.jpeg",
              name: "Solicitor Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "338",
              image:
                "https://rickandmortyapi.com/api/character/avatar/338.jpeg",
              name: "Summer Smith",
              origin: {
                id: "1",
                dimension: "Dimension C-137",
                name: "Earth (C-137)",
              },
            },
            {
              id: "344",
              image:
                "https://rickandmortyapi.com/api/character/avatar/344.jpeg",
              name: "Tammy Guetermann",
              origin: {
                id: "20",
                dimension: "Replacement Dimension",
                name: "Earth (Replacement Dimension)",
              },
            },
            {
              id: "378",
              image:
                "https://rickandmortyapi.com/api/character/avatar/378.jpeg",
              name: "Wall Crawling Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "380",
              image:
                "https://rickandmortyapi.com/api/character/avatar/380.jpeg",
              name: "Unknown Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "385",
              image:
                "https://rickandmortyapi.com/api/character/avatar/385.jpeg",
              name: "Yellow Shirt Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "389",
              image:
                "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
              name: "Zeta Alpha Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "461",
              image:
                "https://rickandmortyapi.com/api/character/avatar/461.jpeg",
              name: "Communication's Responsible Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "462",
              image:
                "https://rickandmortyapi.com/api/character/avatar/462.jpeg",
              name: "Teleportation's Responsible Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "463",
              image:
                "https://rickandmortyapi.com/api/character/avatar/463.jpeg",
              name: "SEAL Team Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "464",
              image:
                "https://rickandmortyapi.com/api/character/avatar/464.jpeg",
              name: "SEAL Team Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "465",
              image:
                "https://rickandmortyapi.com/api/character/avatar/465.jpeg",
              name: "SEAL Team Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "466",
              image:
                "https://rickandmortyapi.com/api/character/avatar/466.jpeg",
              name: "SEAL Team Rick",
              origin: {
                id: null,
                dimension: null,
                name: "unknown",
              },
            },
            {
              id: "592",
              image:
                "https://rickandmortyapi.com/api/character/avatar/592.jpeg",
              name: "Phoenixperson",
              origin: {
                id: "15",
                dimension: "unknown",
                name: "Bird World",
              },
            },
          ],
        },
      ],
    },
  },
});

export const mockCharacter: Character = {
  id: "295",
  name: "Riq IV",
  gender: "Male",
  status: "Dead",
  type: "",
  imageUrl: "https://rickandmortyapi.com/api/character/avatar/295.jpeg",
  origin: {
    name: "unknown",
    dimension: "",
  },
  species: "Human",
  location: {
    name: "Citadel of Ricks",
    dimension: "unknown",
  },
  episode: [
    {
      id: "10",
      name: "Close Rick-counters of the Rick Kind",
      episode: "S01E10",
      origins: [
        {
          id: "1",
          dimension: "Dimension C-137",
          name: "Earth (C-137)",
          characters: [
            {
              id: "1",
              name: "Rick Sanchez",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            },
            {
              id: "329",
              name: "Snuffles (Snowball)",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/329.jpeg",
            },
          ],
        },
        {
          id: "",
          dimension: "",
          name: "unknown",
          characters: [
            {
              id: "2",
              name: "Morty Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            },
            {
              id: "14",
              name: "Alien Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
            },
            {
              id: "15",
              name: "Alien Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
            },
            {
              id: "18",
              name: "Antenna Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
            },
            {
              id: "19",
              name: "Antenna Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
            },
            {
              id: "21",
              name: "Aqua Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
            },
            {
              id: "22",
              name: "Aqua Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
            },
            {
              id: "27",
              name: "Artist Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/27.jpeg",
            },
            {
              id: "53",
              name: "Blue Shirt Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/53.jpeg",
            },
            {
              id: "77",
              name: "Cowboy Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/77.jpeg",
            },
            {
              id: "78",
              name: "Cowboy Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/78.jpeg",
            },
            {
              id: "84",
              name: "Cult Leader Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/84.jpeg",
            },
            {
              id: "85",
              name: "Cyclops Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/85.jpeg",
            },
            {
              id: "86",
              name: "Cyclops Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/86.jpeg",
            },
            {
              id: "118",
              name: "Evil Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/118.jpeg",
            },
            {
              id: "119",
              name: "Evil Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/119.jpeg",
            },
            {
              id: "152",
              name: "Hammerhead Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/152.jpeg",
            },
            {
              id: "164",
              name: "Insurance Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/164.jpeg",
            },
            {
              id: "209",
              name: "Long Sleeved Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/209.jpeg",
            },
            {
              id: "215",
              name: "Maximums Rickimus",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/215.jpeg",
            },
            {
              id: "274",
              name: "Quantum Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/274.jpeg",
            },
            {
              id: "294",
              name: "Ricktiminus Sancheziminius",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/294.jpeg",
            },
            {
              id: "295",
              name: "Riq IV",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/295.jpeg",
            },
            {
              id: "298",
              name: "Robot Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/298.jpeg",
            },
            {
              id: "299",
              name: "Robot Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/299.jpeg",
            },
            {
              id: "330",
              name: "Solicitor Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/330.jpeg",
            },
            {
              id: "349",
              name: "The Scientist Formerly Known as Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/349.jpeg",
            },
            {
              id: "359",
              name: "Tortured Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/359.jpeg",
            },
            {
              id: "381",
              name: "Woman Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/381.jpeg",
            },
            {
              id: "389",
              name: "Zeta Alpha Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
            },
            {
              id: "405",
              name: "Trunkphobic suspenders guy",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/405.jpeg",
            },
            {
              id: "433",
              name: "Doopidoo",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/433.jpeg",
            },
            {
              id: "434",
              name: "Super Weird Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/434.jpeg",
            },
          ],
        },
        {
          id: "20",
          dimension: "Replacement Dimension",
          name: "Earth (Replacement Dimension)",
          characters: [
            {
              id: "3",
              name: "Summer Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            },
            {
              id: "4",
              name: "Beth Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            },
            {
              id: "5",
              name: "Jerry Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
            },
            {
              id: "7",
              name: "Abradolf Lincler",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
            },
          ],
        },
        {
          id: "34",
          dimension: "Evil Rick's Target Dimension",
          name: "Earth (Evil Rick's Target Dimension)",
          characters: [
            {
              id: "39",
              name: "Beth Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/39.jpeg",
            },
            {
              id: "177",
              name: "Jerry Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/177.jpeg",
            },
            {
              id: "232",
              name: "Morty Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/232.jpeg",
            },
            {
              id: "290",
              name: "Rick Sanchez",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/290.jpeg",
            },
            {
              id: "339",
              name: "Summer Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/339.jpeg",
            },
          ],
        },
        {
          id: "27",
          dimension: "unknown",
          name: "Hideout Planet",
          characters: [
            {
              id: "79",
              name: "Crab Spider",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/79.jpeg",
            },
          ],
        },
        {
          id: "12",
          dimension: "Cronenberg Dimension",
          name: "Cronenberg Earth",
          characters: [
            {
              id: "82",
              name: "Cronenberg Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/82.jpeg",
            },
            {
              id: "83",
              name: "Cronenberg Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/83.jpeg",
            },
          ],
        },
        {
          id: "31",
          dimension: "Dimension J19ζ7",
          name: "Earth (J19ζ7)",
          characters: [
            {
              id: "103",
              name: "Doofus Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/103.jpeg",
            },
          ],
        },
        {
          id: "33",
          dimension: "Eric Stoltz Mask Dimension",
          name: "Eric Stoltz Mask Earth",
          characters: [
            {
              id: "113",
              name: "Eric Stoltz Mask Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/113.jpeg",
            },
          ],
        },
        {
          id: "53",
          dimension: "unknown",
          name: "Mr. Meeseeks Box",
          characters: [
            {
              id: "242",
              name: "Mr. Meeseeks",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/242.jpeg",
            },
          ],
        },
        {
          id: "71",
          dimension: "Pizza Dimension",
          name: "Earth (Pizza Dimension)",
          characters: [
            {
              id: "424",
              name: "Pizza-person",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/424.jpeg",
            },
            {
              id: "425",
              name: "Pizza-person",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/425.jpeg",
            },
          ],
        },
        {
          id: "73",
          dimension: "unknown",
          name: "Greasy Grandma World",
          characters: [
            {
              id: "426",
              name: "Greasy Grandma",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/426.jpeg",
            },
          ],
        },
        {
          id: "72",
          dimension: "Phone Dimension",
          name: "Earth (Phone Dimension)",
          characters: [
            {
              id: "427",
              name: "Phone-person",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/427.jpeg",
            },
            {
              id: "428",
              name: "Phone-person",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/428.jpeg",
            },
          ],
        },
        {
          id: "74",
          dimension: "Chair Dimension",
          name: "Earth (Chair Dimension)",
          characters: [
            {
              id: "429",
              name: "Chair-person",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/429.jpeg",
            },
            {
              id: "430",
              name: "Chair-person",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/430.jpeg",
            },
            {
              id: "431",
              name: "Chair-homeless",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/431.jpeg",
            },
            {
              id: "432",
              name: "Chair-waiter",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/432.jpeg",
            },
          ],
        },
        {
          id: "90",
          dimension: "Replacement Dimension",
          name: "Mount Olympus",
          characters: [
            {
              id: "663",
              name: "Reggie",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/663.jpeg",
            },
          ],
        },
      ],
    },
    {
      id: "11",
      name: "Ricksy Business",
      episode: "S01E11",
      origins: [
        {
          id: "1",
          dimension: "Dimension C-137",
          name: "Earth (C-137)",
          characters: [
            {
              id: "1",
              name: "Rick Sanchez",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            },
            {
              id: "181",
              name: "Jessica's Friend",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/181.jpeg",
            },
            {
              id: "216",
              name: "MC Haps",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/216.jpeg",
            },
          ],
        },
        {
          id: "",
          dimension: "",
          name: "unknown",
          characters: [
            {
              id: "2",
              name: "Morty Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            },
            {
              id: "295",
              name: "Riq IV",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/295.jpeg",
            },
            {
              id: "308",
              name: "Scropon",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/308.jpeg",
            },
            {
              id: "327",
              name: "Slow Mobius",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/327.jpeg",
            },
            {
              id: "333",
              name: "Stair Goblin",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/333.jpeg",
            },
            {
              id: "362",
              name: "Traflorkian",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/362.jpeg",
            },
            {
              id: "389",
              name: "Zeta Alpha Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
            },
            {
              id: "405",
              name: "Trunkphobic suspenders guy",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/405.jpeg",
            },
            {
              id: "435",
              name: "Pripudlian",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/435.jpeg",
            },
          ],
        },
        {
          id: "20",
          dimension: "Replacement Dimension",
          name: "Earth (Replacement Dimension)",
          characters: [
            {
              id: "3",
              name: "Summer Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            },
            {
              id: "4",
              name: "Beth Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            },
            {
              id: "5",
              name: "Jerry Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
            },
            {
              id: "7",
              name: "Abradolf Lincler",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
            },
            {
              id: "58",
              name: "Brad",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/58.jpeg",
            },
            {
              id: "88",
              name: "Cynthia",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/88.jpeg",
            },
            {
              id: "180",
              name: "Jessica",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/180.jpeg",
            },
            {
              id: "210",
              name: "Lucy",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/210.jpeg",
            },
            {
              id: "251",
              name: "Nancy",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/251.jpeg",
            },
            {
              id: "344",
              name: "Tammy Guetermann",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/344.jpeg",
            },
            {
              id: "423",
              name: "Synthetic Laser Eels",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/423.jpeg",
            },
          ],
        },
        {
          id: "11",
          dimension: "unknown",
          name: "Bepis 9",
          characters: [
            {
              id: "35",
              name: "Bepisian",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/35.jpeg",
            },
          ],
        },
        {
          id: "15",
          dimension: "unknown",
          name: "Bird World",
          characters: [
            {
              id: "47",
              name: "Birdperson",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
            },
          ],
        },
        {
          id: "57",
          dimension: "unknown",
          name: "Gear World",
          characters: [
            {
              id: "282",
              name: "Revolio Clockberg Jr.",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/282.jpeg",
            },
          ],
        },
        {
          id: "48",
          dimension: "Fantasy Dimension",
          name: "Fantasy World",
          characters: [
            {
              id: "326",
              name: "Slippery Stair",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/326.jpeg",
            },
          ],
        },
        {
          id: "35",
          dimension: "Replacement Dimension",
          name: "Planet Squanch",
          characters: [
            {
              id: "331",
              name: "Squanchy",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/331.jpeg",
            },
          ],
        },
        {
          id: "68",
          dimension: "unknown",
          name: "Girvonesk",
          characters: [
            {
              id: "395",
              name: "Greebybobe",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/395.jpeg",
            },
          ],
        },
        {
          id: "21",
          dimension: "Testicle Monster Dimension",
          name: "Testicle Monster Dimension",
          characters: [
            {
              id: "436",
              name: "Giant Testicle Monster",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/436.jpeg",
            },
          ],
        },
      ],
    },
    {
      id: "22",
      name: "The Rickshank Rickdemption",
      episode: "S03E01",
      origins: [
        {
          id: "1",
          dimension: "Dimension C-137",
          name: "Earth (C-137)",
          characters: [
            {
              id: "1",
              name: "Rick Sanchez",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            },
            {
              id: "38",
              name: "Beth Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/38.jpeg",
            },
            {
              id: "94",
              name: "Diane Sanchez",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/94.jpeg",
            },
            {
              id: "175",
              name: "Jerry Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/175.jpeg",
            },
            {
              id: "338",
              name: "Summer Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/338.jpeg",
            },
          ],
        },
        {
          id: "",
          dimension: "",
          name: "unknown",
          characters: [
            {
              id: "2",
              name: "Morty Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            },
            {
              id: "21",
              name: "Aqua Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/21.jpeg",
            },
            {
              id: "22",
              name: "Aqua Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/22.jpeg",
            },
            {
              id: "42",
              name: "Big Head Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/42.jpeg",
            },
            {
              id: "48",
              name: "Black Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/48.jpeg",
            },
            {
              id: "57",
              name: "Borpocian",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/57.jpeg",
            },
            {
              id: "69",
              name: "Commander Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/69.jpeg",
            },
            {
              id: "86",
              name: "Cyclops Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/86.jpeg",
            },
            {
              id: "95",
              name: "Dipper and Mabel Mortys",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/95.jpeg",
            },
            {
              id: "150",
              name: "Cornvelious Daniel",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/150.jpeg",
            },
            {
              id: "152",
              name: "Hammerhead Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/152.jpeg",
            },
            {
              id: "200",
              name: "Lawyer Morty",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/200.jpeg",
            },
            {
              id: "215",
              name: "Maximums Rickimus",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/215.jpeg",
            },
            {
              id: "231",
              name: "Morty Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/231.jpeg",
            },
            {
              id: "274",
              name: "Quantum Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/274.jpeg",
            },
            {
              id: "285",
              name: "Rick Prime",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/285.jpeg",
            },
            {
              id: "294",
              name: "Ricktiminus Sancheziminius",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/294.jpeg",
            },
            {
              id: "295",
              name: "Riq IV",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/295.jpeg",
            },
            {
              id: "330",
              name: "Solicitor Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/330.jpeg",
            },
            {
              id: "378",
              name: "Wall Crawling Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/378.jpeg",
            },
            {
              id: "380",
              name: "Unknown Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/380.jpeg",
            },
            {
              id: "385",
              name: "Yellow Shirt Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/385.jpeg",
            },
            {
              id: "389",
              name: "Zeta Alpha Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/389.jpeg",
            },
            {
              id: "461",
              name: "Communication's Responsible Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/461.jpeg",
            },
            {
              id: "462",
              name: "Teleportation's Responsible Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/462.jpeg",
            },
            {
              id: "463",
              name: "SEAL Team Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/463.jpeg",
            },
            {
              id: "464",
              name: "SEAL Team Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/464.jpeg",
            },
            {
              id: "465",
              name: "SEAL Team Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/465.jpeg",
            },
            {
              id: "466",
              name: "SEAL Team Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/466.jpeg",
            },
          ],
        },
        {
          id: "20",
          dimension: "Replacement Dimension",
          name: "Earth (Replacement Dimension)",
          characters: [
            {
              id: "3",
              name: "Summer Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            },
            {
              id: "4",
              name: "Beth Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            },
            {
              id: "5",
              name: "Jerry Smith",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
            },
            {
              id: "71",
              name: "Conroy",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/71.jpeg",
            },
            {
              id: "240",
              name: "Mr. Goldenfold",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/240.jpeg",
            },
            {
              id: "344",
              name: "Tammy Guetermann",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/344.jpeg",
            },
          ],
        },
        {
          id: "15",
          dimension: "unknown",
          name: "Bird World",
          characters: [
            {
              id: "47",
              name: "Birdperson",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/47.jpeg",
            },
            {
              id: "592",
              name: "Phoenixperson",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/592.jpeg",
            },
          ],
        },
        {
          id: "31",
          dimension: "Dimension J19ζ7",
          name: "Earth (J19ζ7)",
          characters: [
            {
              id: "103",
              name: "Doofus Rick",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/103.jpeg",
            },
          ],
        },
        {
          id: "58",
          dimension: "Dimension D-99",
          name: "Earth (D-99)",
          characters: [
            {
              id: "286",
              name: "Rick D-99",
              imageUrl:
                "https://rickandmortyapi.com/api/character/avatar/286.jpeg",
            },
          ],
        },
      ],
    },
  ],
};
