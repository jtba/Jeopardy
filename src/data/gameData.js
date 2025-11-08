// Game data - questions, categories, and players
export const initialGameData = {
  categories: [
    {
      title: "Science",
      data: [
        {
          level: "$100",
          value: 100,
          question: "What is the chemical symbol for water?",
          options: [
            { text: "H2O", is_correct: true },
            { text: "CO2", is_correct: false },
            { text: "O2", is_correct: false },
            { text: "H2SO4", is_correct: false },
            { text: "NaCl", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$200",
          value: 200,
          question: "What planet is known as the Red Planet?",
          options: [
            { text: "Venus", is_correct: false },
            { text: "Mars", is_correct: true },
            { text: "Jupiter", is_correct: false },
            { text: "Saturn", is_correct: false },
            { text: "Mercury", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$300",
          value: 300,
          question: "What is the speed of light?",
          options: [
            { text: "299,792 km/s", is_correct: true },
            { text: "150,000 km/s", is_correct: false },
            { text: "500,000 km/s", is_correct: false },
            { text: "1,000,000 km/s", is_correct: false },
            { text: "100,000 km/s", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$400",
          value: 400,
          question: "How many bones are in the adult human body?",
          options: [
            { text: "186", is_correct: false },
            { text: "206", is_correct: true },
            { text: "226", is_correct: false },
            { text: "246", is_correct: false },
            { text: "266", is_correct: false }
          ],
          disabled: false
        }
      ]
    },
    {
      title: "History",
      data: [
        {
          level: "$100",
          value: 100,
          question: "In which year did World War II end?",
          options: [
            { text: "1943", is_correct: false },
            { text: "1944", is_correct: false },
            { text: "1945", is_correct: true },
            { text: "1946", is_correct: false },
            { text: "1947", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$200",
          value: 200,
          question: "Who was the first President of the United States?",
          options: [
            { text: "Thomas Jefferson", is_correct: false },
            { text: "John Adams", is_correct: false },
            { text: "George Washington", is_correct: true },
            { text: "Benjamin Franklin", is_correct: false },
            { text: "James Madison", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$300",
          value: 300,
          question: "Which ancient wonder is the only one still standing?",
          options: [
            { text: "Colossus of Rhodes", is_correct: false },
            { text: "Hanging Gardens of Babylon", is_correct: false },
            { text: "Great Pyramid of Giza", is_correct: true },
            { text: "Lighthouse of Alexandria", is_correct: false },
            { text: "Temple of Artemis", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$400",
          value: 400,
          question: "In what year did the Berlin Wall fall?",
          options: [
            { text: "1987", is_correct: false },
            { text: "1988", is_correct: false },
            { text: "1989", is_correct: true },
            { text: "1990", is_correct: false },
            { text: "1991", is_correct: false }
          ],
          disabled: false
        }
      ]
    },
    {
      title: "Geography",
      data: [
        {
          level: "$100",
          value: 100,
          question: "What is the capital of France?",
          options: [
            { text: "London", is_correct: false },
            { text: "Berlin", is_correct: false },
            { text: "Paris", is_correct: true },
            { text: "Rome", is_correct: false },
            { text: "Madrid", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$200",
          value: 200,
          question: "Which is the largest ocean on Earth?",
          options: [
            { text: "Atlantic", is_correct: false },
            { text: "Indian", is_correct: false },
            { text: "Arctic", is_correct: false },
            { text: "Pacific", is_correct: true },
            { text: "Southern", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$300",
          value: 300,
          question: "What is the longest river in the world?",
          options: [
            { text: "Amazon", is_correct: false },
            { text: "Nile", is_correct: true },
            { text: "Yangtze", is_correct: false },
            { text: "Mississippi", is_correct: false },
            { text: "Congo", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$400",
          value: 400,
          question: "How many continents are there?",
          options: [
            { text: "5", is_correct: false },
            { text: "6", is_correct: false },
            { text: "7", is_correct: true },
            { text: "8", is_correct: false },
            { text: "9", is_correct: false }
          ],
          disabled: false
        }
      ]
    },
    {
      title: "Entertainment",
      data: [
        {
          level: "$100",
          value: 100,
          question: "Who directed the movie 'Jaws'?",
          options: [
            { text: "George Lucas", is_correct: false },
            { text: "Steven Spielberg", is_correct: true },
            { text: "Martin Scorsese", is_correct: false },
            { text: "Francis Ford Coppola", is_correct: false },
            { text: "Stanley Kubrick", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$200",
          value: 200,
          question: "Which band released the album 'Abbey Road'?",
          options: [
            { text: "The Rolling Stones", is_correct: false },
            { text: "The Beatles", is_correct: true },
            { text: "Led Zeppelin", is_correct: false },
            { text: "Pink Floyd", is_correct: false },
            { text: "The Who", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$300",
          value: 300,
          question: "What year was the first Star Wars movie released?",
          options: [
            { text: "1975", is_correct: false },
            { text: "1976", is_correct: false },
            { text: "1977", is_correct: true },
            { text: "1978", is_correct: false },
            { text: "1979", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$400",
          value: 400,
          question: "Who painted the Mona Lisa?",
          options: [
            { text: "Michelangelo", is_correct: false },
            { text: "Raphael", is_correct: false },
            { text: "Leonardo da Vinci", is_correct: true },
            { text: "Donatello", is_correct: false },
            { text: "Caravaggio", is_correct: false }
          ],
          disabled: false
        }
      ]
    },
    {
      title: "Sports",
      data: [
        {
          level: "$100",
          value: 100,
          question: "How many players are on a basketball team on the court?",
          options: [
            { text: "4", is_correct: false },
            { text: "5", is_correct: true },
            { text: "6", is_correct: false },
            { text: "7", is_correct: false },
            { text: "8", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$200",
          value: 200,
          question: "In which sport would you perform a slam dunk?",
          options: [
            { text: "Volleyball", is_correct: false },
            { text: "Basketball", is_correct: true },
            { text: "Tennis", is_correct: false },
            { text: "Soccer", is_correct: false },
            { text: "Baseball", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$300",
          value: 300,
          question: "How many holes are played in a typical round of golf?",
          options: [
            { text: "9", is_correct: false },
            { text: "12", is_correct: false },
            { text: "18", is_correct: true },
            { text: "24", is_correct: false },
            { text: "36", is_correct: false }
          ],
          disabled: false
        },
        {
          level: "$400",
          value: 400,
          question: "In which year were the first modern Olympic Games held?",
          options: [
            { text: "1886", is_correct: false },
            { text: "1892", is_correct: false },
            { text: "1896", is_correct: true },
            { text: "1900", is_correct: false },
            { text: "1904", is_correct: false }
          ],
          disabled: false
        }
      ]
    }
  ],
  players: [
    { name: "Team Red", score: 0, is_turn: false },
    { name: "Team Blue", score: 0, is_turn: false },
    { name: "Team Green", score: 0, is_turn: false },
    { name: "Team Yellow", score: 0, is_turn: false }
  ]
};
