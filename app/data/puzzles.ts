export interface Puzzle {
    id: string;
    title: string;
    link: string;
    category: string;
    completed: boolean;
}

export interface PuzzleCategory {
    name: string;
    puzzles: Puzzle[];
}

export const puzzleCategories: PuzzleCategory[] = [
    {
        name: "Logical Puzzles",
        puzzles: [
            {
                id: "logical-1",
                title: "Pay an employee using a gold rod of 7 units ?",
                link: "https://www.geeksforgeeks.org/puzzle-4-pay-an-employee-using-a-gold-rod-of-7-units/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-2",
                title: "Find the fastest 3 horses",
                link: "https://www.geeksforgeeks.org/puzzle-9-find-the-fastest-3-horses/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-3",
                title: "Finding the injection for Anesthesia",
                link: "https://www.geeksforgeeks.org/puzzle-5-finding-the-injection-for-anesthesia/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-4",
                title: "3 Bulbs and 3 Switches",
                link: "https://www.geeksforgeeks.org/puzzle-7-3-bulbs-and-3-switches/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-5",
                title: "Camel and Banana Puzzle",
                link: "https://www.geeksforgeeks.org/puzzle-15-camel-and-banana-puzzle/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-6",
                title: "Find the Jar with contaminated pills",
                link: "https://www.geeksforgeeks.org/puzzle-7-find-the-jar-with-contaminated-pills/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-7",
                title: "100 Prisoners with Red/Black Hats",
                link: "https://www.geeksforgeeks.org/puzzle-13-100-prisoners-with-redblack-hats/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-8",
                title: "10 Coins Puzzle",
                link: "https://www.geeksforgeeks.org/puzzle-24-10-coins-puzzle/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-9",
                title: "Strategy for a 2-Player Coin Game",
                link: "https://www.geeksforgeeks.org/puzzle-14-strategy-for-a-2-player-coin-game/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-10",
                title: "5 Pirates and 100 Gold Coins",
                link: "https://www.geeksforgeeks.org/puzzle-20-5-pirates-and-100-gold-coins/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-11",
                title: "Minimum cut Puzzle",
                link: "https://www.geeksforgeeks.org/puzzle-31-minimum-cut-puzzle/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-12",
                title: "Prisoner and Policeman Puzzle",
                link: "https://www.geeksforgeeks.org/puzzle-34-prisoner-and-policeman-puzzle/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-13",
                title: "Puzzle - Cheating Husband",
                link: "https://www.geeksforgeeks.org/puzzle-cheating-husband/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-14",
                title: "Puzzle – Blind Games",
                link: "https://www.geeksforgeeks.org/puzzle-blind-games/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-15",
                title: "Puzzle – Chameleons go on a date",
                link: "https://www.geeksforgeeks.org/puzzle-chameleons-go-on-a-date/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-16",
                title: "Puzzle – Birthday Cake (3 cuts to cut round cake into 8 equal pieces)",
                link: "https://www.geeksforgeeks.org/puzzle-3-cuts-to-cut-round-cake-into-8-equal-pieces/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-17",
                title: "Puzzle – Chessboard and dominos",
                link: "https://www.geeksforgeeks.org/puzzle-25-chessboard-and-dominos/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-18",
                title: "Puzzle – Three Squares",
                link: "https://www.geeksforgeeks.org/puzzle-three-squares/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-19",
                title: "Puzzle – Maximum pieces that can be cut from a Circle using 6 straight lines",
                link: "https://www.geeksforgeeks.org/puzzle-maximum-pieces-that-can-be-cut-from-a-circle-using-6-straight-lines/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-20",
                title: "Puzzle – Splitting a Cake with a Missing Piece in two equal portion",
                link: "https://www.geeksforgeeks.org/puzzle-splitting-a-cake-with-a-missing-piece-in-two-equal-portion/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-21",
                title: "Puzzle – Rectangular Cardboard",
                link: "https://www.geeksforgeeks.org/puzzle-48-rectangular-cardboard/",
                category: "Logical Puzzles",
                completed: false
            },
            {
                id: "logical-22",
                title: "Puzzle – Dividing a Square into N smaller squares",
                link: "https://www.geeksforgeeks.org/puzzle-dividing-a-square-into-n-smaller-squares/",
                category: "Logical Puzzles",
                completed: false
            },
        ]
    },
    {
        name: "Mathematical Puzzles",
        puzzles: [
            {
                id: "math-1",
                title: "The 3-legged dog and the 4-legged dog",
                link: "https://www.geeksforgeeks.org/puzzle-3-legged-dog-and-4-legged-dog/",
                category: "Mathematical Puzzles",
                completed: false
            },
            {
                id: "math-2",
                title: "Find the missing number in an array",
                link: "https://www.geeksforgeeks.org/find-the-missing-number/",
                category: "Mathematical Puzzles",
                completed: false
            },
            {
                id: "math-3",
                title: "Find the odd one out from the given list of numbers",
                link: "https://www.geeksforgeeks.org/find-the-odd-one-out-from-the-given-list-of-numbers/",
                category: "Mathematical Puzzles",
                completed: false
            },
        ]
    },
    {
        name: "Rubik's Cube",
        puzzles: [
            {
                id: "rubik-1",
                title: "Algorithm to solve Rubik's Cube",
                link: "https://www.geeksforgeeks.org/algorithm-to-solve-rubiks-cube/",
                category: "Rubik's Cube",
                completed: false
            },
            {
                id: "rubik-2",
                title: "Rubik's Cube Facts and Questions",
                link: "https://www.geeksforgeeks.org/rubiks-cube-facts-and-questions/",
                category: "Rubik's Cube",
                completed: false
            },
        ]
    },
    {
        name: "Brain Teasers",
        puzzles: [
            {
                id: "brain-teaser-1",
                title: "Brain Teasers",
                link: "https://www.geeksforgeeks.org/brain-teasers/",
                category: "Brain Teasers",
                completed: false
            },
        ]
    },
    {
        name: "Crossword Puzzle",
        puzzles: [
            {
                id: "crossword-1",
                title: "Crossword Puzzle Of The Week #1 (for DSA)",
                link: "https://www.geeksforgeeks.org/crossword-puzzle-of-the-week-1-for-dsa/",
                category: "Crossword Puzzle",
                completed: false
            },
            {
                id: "crossword-2",
                title: "Crossword Puzzle Of The Week #2 (for Computer Science and Applications)",
                link: "https://www.geeksforgeeks.org/crossword-puzzle-of-the-week-2-for-computer-science-and-applications/",
                category: "Crossword Puzzle",
                completed: false
            },
            {
                id: "crossword-3",
                title: "Crossword Puzzle Of The Week #3 (for Database and Queries)",
                link: "https://www.geeksforgeeks.org/crossword-puzzle-of-the-week-3-for-databases-and-queries/",
                category: "Crossword Puzzle",
                completed: false
            },
            {
                id: "crossword-4",
                title: "Crossword Puzzle Of The Week #4 (for Object Oriented Programming)",
                link: "https://www.geeksforgeeks.org/crossword-puzzle-of-the-week-4-for-object-oriented-programming/",
                category: "Crossword Puzzle",
                completed: false
            },
            {
                id: "crossword-5",
                title: "Crossword Puzzle Of The Week #5 (for Operating System)",
                link: "https://www.geeksforgeeks.org/crossword-puzzle-of-the-week-5-for-operating-system/",
                category: "Crossword Puzzle",
                completed: false
            },
        ]
    },
]; 