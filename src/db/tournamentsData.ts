import { TournamentProps } from "../types/structure";

export const tournaments: Array<TournamentProps> = [
    {
        title: "Royal BIG 50",
        blinds: [
            {
                big: 100,
                small: 50,
                time: 15
            },
            {
                big: 200,
                small: 100,
                time: 15
            },
            {
                big: 600,
                small: 300,
                time: 15
            },
            {
                big: 800,
                small: 400,
                time: 15
            },
        ]
    },
]