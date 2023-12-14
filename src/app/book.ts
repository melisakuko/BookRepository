export interface IBook {
    id: number,
    naziv: string,
    autor: string,
    zanr: string,
    opis: string,
    slika: string,
    cijena: number,
    datumIzdavanja: Date,
    jezik: string,
    brojStranica: number,
    showDesc: boolean
}
