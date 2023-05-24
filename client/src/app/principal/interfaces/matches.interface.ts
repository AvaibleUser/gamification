interface Match {
    game: string;
    creator: string;
    createdAt?: Date;
    gameTime?: number;
    players?: Player[];
    chat?: ChatMessage[];
    state?: object;
  }
  
  interface Player {
    username: string;
    guest: boolean;
    points: number;
  }
  
  interface ChatMessage {
    username: string;
    content: string;
    createdAt?: Date;
  }
  