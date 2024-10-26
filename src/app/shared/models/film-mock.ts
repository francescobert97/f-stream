import { FilmCategories } from "src/app/modules/home/services/categories-film.service";
import { ICategory } from "./category.model";
import { IFilm } from "./film.model";
const rndmNumber = (nmb:number, minValue:number=0) => Math.floor(Math.max(minValue, Math.random() * nmb));

const generateCategoryFilms = (genre:FilmCategories) => {
  const filmsArr = new Array(20).fill('');
  return filmsArr.map((film,index) => {
    const generatedFilm:IFilm = {
      id: rndmNumber(1000000),
      urlCopertina: '../../assets/screen-film.jpg',
      titolo: `example-${rndmNumber(10,1)}`,
      descrizione: 'lorem ipsum',
      anno: index < 4? '2024' : `${2024 - rndmNumber(150) }`,
      durata: `${rndmNumber(240, 40)} minuti`,
      genere: genre,
      eta: `+${rndmNumber(18,3)}`,
      urlStream: '../../assets/screen-video.mp4',
      numberOfStream: rndmNumber(10000 ),
      lastWatch: 'never',
      likes: 0
  }
    return generatedFilm
  })
}
export const FILMS:ICategory = {
  comedy: generateCategoryFilms('comedy'),
  action:generateCategoryFilms('action'),
  animation: generateCategoryFilms('animation'),
  dramatic: generateCategoryFilms('dramatic'),
  horror: generateCategoryFilms('horror'),
  popular:generateCategoryFilms('popular'),
  sentimental:generateCategoryFilms('sentimental'),
  thriller:  generateCategoryFilms('thriller')
}
