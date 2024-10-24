import { ICategory } from "./category.model";
import { IFilm } from "./film.model";
const rndmNumber = (nmb:number, minValue:number=0) => Math.floor(Math.max(minValue, Math.random() * nmb));

const generateCategoryFilms = (genre:string) => {
  const filmsArr = new Array(20).fill('');
  return filmsArr.map(() => {
    const generatedFilm:IFilm = {
      id: rndmNumber(1000000),
      urlCopertina: '../../assets/screen-film.jpg',
      titolo: `example-${rndmNumber(10,1)}`,
      descrizione: 'lorem ipsum',
      anno: `${2024 - rndmNumber(150) }`,
      durata: `${rndmNumber(240, 40)} minuti`,
      genere: genre,
      eta: `+${rndmNumber(18,3)}`,
      urlStream: '../../assets/screen-video.mp4',
      numberOfStream: rndmNumber(10000 ),
      lastWatch: 'never'
  }
    return generatedFilm
  })
}
export const FILMS:ICategory = {
  comedy: generateCategoryFilms('commedia'),
  action:generateCategoryFilms('azione'),
  animation: generateCategoryFilms('animazione'),
  dramatic: generateCategoryFilms('drammatico'),
  horror: generateCategoryFilms('horror'),
  popular:generateCategoryFilms('popolari'),
  sentimental:generateCategoryFilms('sentimentali'),
  thriller:  generateCategoryFilms('thriller')
}
