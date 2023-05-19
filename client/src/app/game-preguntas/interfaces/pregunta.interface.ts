export interface Trivia {
    id?:           number;
    codigo:       string;
    nombreTrivia: string;
    autor:        string;
    preguntas:    Pregunta[];
}

export interface Pregunta {
    enunciado:         string;
    respuestas:          string[];
    respuestaCorrecta: string;
}