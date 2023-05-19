export interface User {
    name: string;
    email: string;
    username: string;
    password: string;
    student: boolean;
    wins: number;
    playedGames: PlayedGame[];
  }
  
  export interface PlayedGame {
    game: string;
    wins: number;
  }
  