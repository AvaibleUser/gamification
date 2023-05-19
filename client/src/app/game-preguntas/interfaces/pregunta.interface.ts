export interface Pregunta {
    id?:        string;
    enunciado: string;
    tipo:      string;
    codigo:    string;
    respuestas:  Respuestas[];
}

export interface Respuestas {
    //id:       string;
    texto:    string;
    correcta: boolean;
}