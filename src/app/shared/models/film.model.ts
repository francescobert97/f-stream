export interface IFilm {
    id: number,
    urlCopertina: string,
    titolo: string,
    descrizione: string,
    anno: string,
    durata: string,
    genere: string,
    eta: string,
    showDetail?: boolean,
    showPlayer?: boolean,
    urlStream: string,
    numberOfStream: number,
    lastWatch: 'never' | string
}
