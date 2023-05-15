# Modelos

## User

```
{
  name: string,
  email: string, // unique
  password: string, // ver jwt
  student: boolean,
  wins: number,
  deleted: boolean,
  playedGames: [
    {
      game: string,
      wins: number,
    }
  ]
}
```

## Medals

```
{
  name: string,
  description: string,
  image: string,
  wonBy: [
    {
      username: string,
      date: date,
    }
  ],
}
```

## Games

```
{
  name: string,
  description: string,
  image: string,
  url: string,
  maxPlayers: number,
  comments: [
    {
      username: string,
      content: string,
      createdAt: date,
      stars: number,
    }
  ]
}
```

## Matches

```
{
  game: string,
  creator: string,
  createdAt: date,
  gameTime: number,
  players: [
    {
      username: string, // tendria unique
      guest: boolean,
      points: number,
    }
  ]
  chat: [
    {
      username: string,
      content: string,
      createdAt: date,
    }
  ]
  state: object, // toda la informacion del juego especifico, ejemplo:
      crucigrama: palabras usadas en el juego, posicion de las palabras,
        palabras sin seleccionar, palabras seleccionadas, etc.
}
```

## Rankings

```
{
  game: string,
  creator: string,
  finishedAt: date,
  gameTime: number,
  users: [
    {
      username: string,
      points: number,
    }
  ],
}
```
