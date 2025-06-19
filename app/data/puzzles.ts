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
            { id: "logical-1", title: "Pay an employee using a gold rod of 7 units ?", link: "https://www.geeksforgeeks.org/puzzle-4-pay-an-employee-using-a-gold-rod-of-7-units/", category: "Logical Puzzles", completed: false },
            { id: "logical-2", title: "Find the fastest 3 horses", link: "https://www.geeksforgeeks.org/puzzle-9-find-the-fastest-3-horses/", category: "Logical Puzzles", completed: false },
            { id: "logical-3", title: "Finding the injection for Anesthesia", link: "https://www.geeksforgeeks.org/puzzle-5-finding-the-injection-for-anesthesia/", category: "Logical Puzzles", completed: false },
            { id: "logical-4", title: "3 Bulbs and 3 Switches", link: "https://www.geeksforgeeks.org/puzzle-7-3-bulbs-and-3-switches/", category: "Logical Puzzles", completed: false },
            { id: "logical-5", title: "Camel and Banana Puzzle", link: "https://www.geeksforgeeks.org/puzzle-15-camel-and-banana-puzzle/", category: "Logical Puzzles", completed: false },
            { id: "logical-6", title: "Find the Jar with contaminated pills", link: "https://www.geeksforgeeks.org/puzzle-7-find-the-jar-with-contaminated-pills/", category: "Logical Puzzles", completed: false },
            { id: "logical-7", title: "100 Prisoners with Red/Black Hats", link: "https://www.geeksforgeeks.org/puzzle-13-100-prisoners-with-redblack-hats/", category: "Logical Puzzles", completed: false },
            { id: "logical-8", title: "10 Coins Puzzle", link: "https://www.geeksforgeeks.org/puzzle-24-10-coins-puzzle/", category: "Logical Puzzles", completed: false },
            { id: "logical-9", title: "Strategy for a 2-Player Coin Game", link: "https://www.geeksforgeeks.org/puzzle-14-strategy-for-a-2-player-coin-game/", category: "Logical Puzzles", completed: false },
            { id: "logical-10", title: "5 Pirates and 100 Gold Coins", link: "https://www.geeksforgeeks.org/puzzle-20-5-pirates-and-100-gold-coins/", category: "Logical Puzzles", completed: false },
            { id: "logical-11", title: "Minimum cut Puzzle", link: "https://www.geeksforgeeks.org/puzzle-31-minimum-cut-puzzle/", category: "Logical Puzzles", completed: false },
            { id: "logical-12", title: "Prisoner and Policeman Puzzle", link: "https://www.geeksforgeeks.org/puzzle-34-prisoner-and-policeman-puzzle/", category: "Logical Puzzles", completed: false },
            { id: "logical-13", title: "Puzzle - Cheating Husband", link: "https://www.geeksforgeeks.org/puzzle-cheating-husband/", category: "Logical Puzzles", completed: false },
            { id: "logical-14", title: "Puzzle – Blind Games", link: "https://www.geeksforgeeks.org/puzzle-blind-games/", category: "Logical Puzzles", completed: false },
            { id: "logical-15", title: "Puzzle – Chameleons go on a date", link: "https://www.geeksforgeeks.org/puzzle-chameleons-go-on-a-date/", category: "Logical Puzzles", completed: false },
            { id: "logical-16", title: "Heaven and Hell", link: "https://www.geeksforgeeks.org/puzzle-heaven-hell/", category: "Logical Puzzles", completed: false },
            { id: "logical-17", title: "Mislabeled Jars", link: "https://www.geeksforgeeks.org/puzzle-mislabeled-jars/", category: "Logical Puzzles", completed: false },
            { id: "logical-18", title: "8 balls problem", link: "https://www.geeksforgeeks.org/puzzle-8-balls-problem/", category: "Logical Puzzles", completed: false },
            { id: "logical-19", title: "Cheryl's Birthday Puzzle and Solution", link: "https://www.geeksforgeeks.org/cheryls-birthday-puzzle-and-solution/", category: "Logical Puzzles", completed: false },
            { id: "logical-20", title: "Puzzle – The Lion and the Unicorn", link: "https://www.geeksforgeeks.org/puzzle-the-lion-and-the-unicorn/", category: "Logical Puzzles", completed: false },
            { id: "logical-21", title: "Farmer, Goat, Wolf, and Cabbage", link: "https://www.geeksforgeeks.org/puzzle-farmer-goat-wolf-cabbage/", category: "Logical Puzzles", completed: false },
            { id: "logical-22", title: "Water Jug Problem", link: "https://www.geeksforgeeks.org/puzzle-water-jug-problem/", category: "Logical Puzzles", completed: false },
            { id: "logical-23", title: "Blind man and Pills", link: "https://www.geeksforgeeks.org/puzzle-blind-man-and-pills/", category: "Logical Puzzles", completed: false },
            { id: "logical-24", title: "The Burning Candles", link: "https://www.geeksforgeeks.org/puzzle-the-burning-candles/", category: "Logical Puzzles", completed: false },
            { id: "logical-25", title: "Puzzle | The Burning Candles", link: "https://www.geeksforgeeks.org/puzzle-the-burning-candles/", category: "Logical Puzzles", completed: false },
            { id: "logical-26", title: "Rat and Poisonous Milk Bottles", link: "https://www.geeksforgeeks.org/puzzle-rat-and-poisonous-milk-bottles/", category: "Logical Puzzles", completed: false },
            { id: "logical-27", title: "Measuring 6L water from 4L and 9L buckets", link: "https://www.geeksforgeeks.org/measuring-6l-water-4l-9l-buckets/", category: "Logical Puzzles", completed: false },
            { id: "logical-28", title: "Six Houses P, Q, R, S, T, and U", link: "https://www.geeksforgeeks.org/puzzle-six-houses-p-q-r-s-t-and-u/", category: "Logical Puzzles", completed: false },
            { id: "logical-29", title: "Melting Candles", link: "https://www.geeksforgeeks.org/melting-candles-puzzle/", category: "Logical Puzzles", completed: false },
            { id: "logical-30", title: "Red Hat vs Blue Hat", link: "https://www.geeksforgeeks.org/puzzle-47-red-hat-vs-blue-hat/", category: "Logical Puzzles", completed: false },
            { id: "logical-31", title: "Puzzle | Joint family of seven persons (L, M, N, O, P, Q, and R)", link: "https://www.geeksforgeeks.org/puzzle-joint-family-of-seven-persons-l-m-n-o-p-q-and-r/", category: "Logical Puzzles", completed: false },
            { id: "logical-32", title: "Puzzle | The Circle of Lights", link: "https://www.geeksforgeeks.org/puzzle-the-circle-of-lights/", category: "Logical Puzzles", completed: false },
            { id: "logical-33", title: "Puzzle | 9 Students and Red Black Hats", link: "https://www.geeksforgeeks.org/puzzle-9-students-and-red-black-hats/", category: "Logical Puzzles", completed: false },
            { id: "logical-34", title: "Light all the bulbs", link: "https://www.geeksforgeeks.org/puzzle-light-all-the-bulbs/", category: "Logical Puzzles", completed: false },
            { id: "logical-35", title: "Distribute the Water", link: "https://www.geeksforgeeks.org/puzzle-distribute-the-water/", category: "Logical Puzzles", completed: false },
            { id: "logical-36", title: "Puzzle | Can 2 persons be with same number of hairs on their heads?", link: "https://www.geeksforgeeks.org/puzzle-can-2-persons-be-with-same-number-of-hairs-on-their-heads/", category: "Logical Puzzles", completed: false },
            { id: "logical-37", title: "Weight of Heavy Ball", link: "https://www.geeksforgeeks.org/weight-heavy-ball/", category: "Logical Puzzles", completed: false },
        ]
    },
    {
        name: "Mathematical Puzzles",
        puzzles: [
            { id: "math-1", title: "Find ages of daughters", link: "https://www.geeksforgeeks.org/puzzle-2-find-ages-of-daughters/", category: "Mathematical Puzzles", completed: false },
            { id: "math-2", title: "Calculate total distance travelled by bee", link: "https://www.geeksforgeeks.org/puzzle-3-calculate-total-distance-travelled-by-bee/", category: "Mathematical Puzzles", completed: false },
            { id: "math-3", title: "Puzzle – 6×6 Grid: How Many Ways?", link: "https://www.geeksforgeeks.org/puzzle-6x6-grid-how-many-ways/", category: "Mathematical Puzzles", completed: false },
            { id: "math-4", title: "Monty Hall problem", link: "https://www.geeksforgeeks.org/puzzle-6-monty-hall-problem/", category: "Mathematical Puzzles", completed: false },
            { id: "math-5", title: "Torch and Bridge", link: "https://www.geeksforgeeks.org/?p=142634", category: "Mathematical Puzzles", completed: false },
            { id: "math-6", title: "2 Eggs and 100 Floors", link: "https://www.geeksforgeeks.org/puzzle-set-35-2-eggs-and-100-floors/", category: "Mathematical Puzzles", completed: false },
            { id: "math-7", title: "Maximize the probability of White Ball", link: "https://www.geeksforgeeks.org/puzzle-12-maximize-probability-of-white-ball/", category: "Mathematical Puzzles", completed: false },
            { id: "math-8", title: "Poison and Rat", link: "https://www.geeksforgeeks.org/puzzle-19-poison-and-rat/", category: "Mathematical Puzzles", completed: false },
            { id: "math-9", title: "Hourglasses Puzzle", link: "https://www.geeksforgeeks.org/?p=142643", category: "Mathematical Puzzles", completed: false },
            { id: "math-10", title: "The ratio of Boys and Girls in a Country where people want only boys", link: "https://www.geeksforgeeks.org/puzzle-17-ratio-of-boys-and-girls-in-a-country-where-people-want-only-boys/", category: "Mathematical Puzzles", completed: false },
            { id: "math-11", title: "Car Wheel Puzzle", link: "https://www.geeksforgeeks.org/puzzle-29-car-wheel-puzzle/", category: "Mathematical Puzzles", completed: false },
            { id: "math-12", title: "Maximum Chocolates", link: "https://www.geeksforgeeks.org/puzzle-22-maximum-chocolates/", category: "Mathematical Puzzles", completed: false },
            { id: "math-13", title: "Puzzle | Splitting a Cake with a Missing Piece in two equal portion", link: "https://www.geeksforgeeks.org/puzzle-splitting-a-cake-with-a-missing-piece-in-two-equal-portion/", category: "Mathematical Puzzles", completed: false },
            { id: "math-14", title: "Rs 500 Note Puzzle", link: "https://www.geeksforgeeks.org/puzzle-33-rs-500-note-puzzle/", category: "Mathematical Puzzles", completed: false },
            { id: "math-15", title: "Girl or Boy", link: "https://www.geeksforgeeks.org/puzzle-44-girl-or-boy/", category: "Mathematical Puzzles", completed: false },
            { id: "math-16", title: "Know Average Salary without Disclosing Individual Salaries", link: "https://www.geeksforgeeks.org/puzzle-26-know-average-salary-without-disclosing-individual-salaries/", category: "Mathematical Puzzles", completed: false },
            { id: "math-17", title: "Maximum run in cricket", link: "https://www.geeksforgeeks.org/puzzle-37-maximum-run-in-cricket/", category: "Mathematical Puzzles", completed: false },
            { id: "math-18", title: "Completion of Task", link: "https://www.geeksforgeeks.org/puzzle-32-completion-of-task/", category: "Mathematical Puzzles", completed: false },
            { id: "math-19", title: "Find missing Row in Excel", link: "https://www.geeksforgeeks.org/puzzle-40-find-missing-row-in-excel/", category: "Mathematical Puzzles", completed: false },
            { id: "math-20", title: "Four People on a Rickety Bridge", link: "https://www.geeksforgeeks.org/four-people-rickety-bridge/", category: "Mathematical Puzzles", completed: false },
            { id: "math-21", title: "Man fell in well Puzzle", link: "https://www.geeksforgeeks.org/puzzle-man-fell-in-well-puzzle/", category: "Mathematical Puzzles", completed: false },
            { id: "math-22", title: "50 red marbles and 50 blue marbles", link: "https://www.geeksforgeeks.org/puzzle-50-red-marbles-and-50-blue-marbles/", category: "Mathematical Puzzles", completed: false },
            { id: "math-23", title: "Puzzle | Form Three Equilateral Triangles", link: "https://www.geeksforgeeks.org/puzzle-form-three-equilateral-triangles/", category: "Mathematical Puzzles", completed: false },
            { id: "math-24", title: "10 identical bottles of pills", link: "https://www.geeksforgeeks.org/puzzle-10-identical-bottles-pills/", category: "Mathematical Puzzles", completed: false },
            { id: "math-25", title: "Puzzle | Maximum pieces that can be cut from a Circle using 6 straight lines", link: "https://www.geeksforgeeks.org/puzzle-maximum-pieces-that-can-be-cut-from-a-circle-using-6-straight-lines/", category: "Mathematical Puzzles", completed: false },
            { id: "math-26", title: "Chain Link Puzzle", link: "https://www.geeksforgeeks.org/puzzle-85-chain-link-puzzle/", category: "Mathematical Puzzles", completed: false },
            { id: "math-27", title: "The shopkeeper and the lady who made a purchase of Rs 200 with fake note", link: "https://www.geeksforgeeks.org/interview-puzzle-the-shopkeeper-and-the-lady-who-made-a-purchase-of-rs-200-with-fake-note/", category: "Mathematical Puzzles", completed: false },
            { id: "math-28", title: "Egg Dropping Puzzle with 2 Eggs and K Floors", link: "https://www.geeksforgeeks.org/egg-dropping-puzzle-with-2-eggs-and-k-floors/", category: "Mathematical Puzzles", completed: false },
            { id: "math-29", title: "Minimum number of Apples to be collected from trees to guarantee M red apples", link: "https://www.geeksforgeeks.org/minimum-number-of-apples-to-be-collected-from-trees-to-guarantee-m-red-apples/", category: "Mathematical Puzzles", completed: false },
            { id: "math-30", title: "Snail and Wall", link: "https://www.geeksforgeeks.org/puzzle-snail-and-wall/", category: "Mathematical Puzzles", completed: false },
            { id: "math-31", title: "1000 light bulbs switched on/off by 1000 people passing by", link: "https://www.geeksforgeeks.org/puzzle-1000-light-bulbs-switched-on-off-by-1000-persons-passing-by/", category: "Mathematical Puzzles", completed: false },
            { id: "math-32", title: "Puzzle | Four Alternating Knights", link: "https://www.geeksforgeeks.org/puzzle-four-alternating-knights/", category: "Mathematical Puzzles", completed: false },
            { id: "math-33", title: "TCS DIGITAL PUZZLE | Lateral Thinking 2", link: "https://www.geeksforgeeks.org/tcs-digital-puzzle-lateral-thinking-2/", category: "Mathematical Puzzles", completed: false },
            { id: "math-34", title: "Puzzle | 100 Cows And Milk", link: "https://www.geeksforgeeks.org/puzzle-100-cows-and-milk/", category: "Mathematical Puzzles", completed: false },
            { id: "math-35", title: "Puzzle | One Mile on the Globe", link: "https://www.geeksforgeeks.org/puzzle-one-mile-on-the-globe-mcq/", category: "Mathematical Puzzles", completed: false },
            { id: "math-36", title: "TCS DIGITAL PUZZLE | Lateral Thinking", link: "https://www.geeksforgeeks.org/tcs-digital-puzzle-lateral-thinking/", category: "Mathematical Puzzles", completed: false },
            { id: "math-37", title: "Puzzle | The Counters and Board", link: "https://www.geeksforgeeks.org/puzzle-the-counters-and-board/", category: "Mathematical Puzzles", completed: false },
            { id: "math-38", title: "Camel and Banana Puzzle", link: "https://www.geeksforgeeks.org/puzzle-15-camel-and-banana-puzzle/", category: "Mathematical Puzzles", completed: false },
            { id: "math-39", title: "Puzzle | (Six Matches , Right Foot Forward)", link: "https://www.geeksforgeeks.org/puzzle-six-matches-right-foot-forward/", category: "Mathematical Puzzles", completed: false },
            { id: "math-40", title: "How much he had initially?", link: "https://www.geeksforgeeks.org/puzzle-how-much-he-had-initially/", category: "Mathematical Puzzles", completed: false },
            { id: "math-41", title: "Puzzle | 3 cuts to cut round cake into 8 equal pieces", link: "https://www.geeksforgeeks.org/puzzle-3-cuts-cut-round-cake-8-equal-pieces/", category: "Mathematical Puzzles", completed: false },
            { id: "math-42", title: "Two Creepers Climbing a Tree", link: "https://www.geeksforgeeks.org/puzzle-two-creepers-climbing-a-tree/", category: "Mathematical Puzzles", completed: false },
        ]
    },
    {
        name: "Arrangement Puzzles",
        puzzles: [
            { id: "arrangement-1", title: "10 Coins Puzzle", link: "https://www.geeksforgeeks.org/puzzle-24-10-coins-puzzle/", category: "Arrangement Puzzles", completed: false },
            { id: "arrangement-2", title: "Days of the month using 2 dice", link: "https://www.geeksforgeeks.org/puzzle-23-days-of-month-using-2-dice/", category: "Arrangement Puzzles", completed: false },
            { id: "arrangement-3", title: "Tic Tac Toe Puzzle", link: "https://www.geeksforgeeks.org/puzzle-38-tic-tac-toe-puzzle/", category: "Arrangement Puzzles", completed: false },
            { id: "arrangement-4", title: "Matchstick Puzzle", link: "https://www.geeksforgeeks.org/puzzle-36-matchstick-puzzle/", category: "Arrangement Puzzles", completed: false },
            { id: "arrangement-5", title: "Last Palindrome Date Before 10/02/2001", link: "https://www.geeksforgeeks.org/puzzle-30-last-palindrome-data/", category: "Arrangement Puzzles", completed: false },
            { id: "arrangement-6", title: "10 identical bottles of pills", link: "https://www.geeksforgeeks.org/puzzle-10-identical-bottles-pills/", category: "Arrangement Puzzles", completed: false },
            { id: "arrangement-7", title: "10 Balls in 5 Lines", link: "https://www.geeksforgeeks.org/puzzle-10-balls-in-5-lines/", category: "Arrangement Puzzles", completed: false },
            { id: "arrangement-8", title: "Round table coin game", link: "https://www.geeksforgeeks.org/puzzle-round-table-coin-game/", category: "Arrangement Puzzles", completed: false },
            { id: "arrangement-9", title: "Puzzle | The Circle of Lights", link: "https://www.geeksforgeeks.org/puzzle-the-circle-of-lights/", category: "Arrangement Puzzles", completed: false },
        ]
    },
    {
        name: "Shape-based Puzzles",
        puzzles: [
            { id: "shape-1", title: "3 cuts to cut the round cake into 8 equal pieces", link: "https://www.geeksforgeeks.org/puzzle-3-cuts-cut-round-cake-8-equal-pieces/", category: "Shape-based Puzzles", completed: false },
            { id: "shape-2", title: "Chessboard and dominos", link: "https://www.geeksforgeeks.org/puzzle-25chessboard-and-dominos/", category: "Shape-based Puzzles", completed: false },
            { id: "shape-3", title: "Matchstick Puzzle", link: "https://www.geeksforgeeks.org/puzzle-36-matchstick-puzzle/", category: "Shape-based Puzzles", completed: false },
            { id: "shape-4", title: "Maximum pieces that can be cut from a Circle using 6 straight lines", link: "https://www.geeksforgeeks.org/puzzle-maximum-pieces-that-can-be-cut-from-a-circle-using-6-straight-lines/", category: "Shape-based Puzzles", completed: false },
            { id: "shape-5", title: "Splitting a Cake with a Missing Piece in two equal portion", link: "https://www.geeksforgeeks.org/puzzle-splitting-a-cake-with-a-missing-piece-in-two-equal-portion/", category: "Shape-based Puzzles", completed: false },
            { id: "shape-6", title: "3 Ants and Triangle", link: "https://www.geeksforgeeks.org/puzzle-21-3-ants-and-triangle/", category: "Shape-based Puzzles", completed: false },
        ]
    },
    {
        name: "Other/Mechanical Puzzles",
        puzzles: [
            { id: "other-1", title: "How to Measure 45 minutes using two identical wires?", link: "https://www.geeksforgeeks.org/puzzle-1-how-to-measure-45-minutes-using-two-identical-wires/", category: "Other/Mechanical Puzzles", completed: false },
            { id: "other-2", title: "Elevator Puzzle", link: "https://www.geeksforgeeks.org/?p=155354", category: "Other/Mechanical Puzzles", completed: false },
            { id: "other-3", title: "Find the last ball to remain after the entire process", link: "https://www.geeksforgeeks.org/?p=151894", category: "Other/Mechanical Puzzles", completed: false },
            { id: "other-4", title: "100 people in a circle with a gun puzzle", link: "https://www.geeksforgeeks.org/?p=142697", category: "Other/Mechanical Puzzles", completed: false },
            { id: "other-5", title: "Find the total guests that are present at the party", link: "https://www.geeksforgeeks.org/?p=282504", category: "Other/Mechanical Puzzles", completed: false },
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