import { Injectable, signal } from '@angular/core';
import { SuperHero } from '../../@shared/interfaces/super-hero-interfaces';

@Injectable({
  providedIn: 'root',
})
export class SuperHeroService {
  // Lista de Super Héroes, typada con interface SuperHero, Valor incial de 20 super héroes;

  superHeroList = signal<SuperHero[]>([
    {
      name: 'Superman',
      realName: 'Clark Kent / Kal-El',
      id: 1,

      abilities: ['Super fuerza', 'Vuela', 'Heat vision', 'X-ray vision'],
      img: 'https://render.fineartamerica.com/images/rendered/default/greeting-card/images/artworkimages/medium/3/vintage-superman-comic-joseph-palumbo.jpg?&targetx=-3&targety=0&imagewidth=500&imageheight=700&modelwidth=500&modelheight=700&backgroundcolor=30322D&orientation=1',
    },
    {
      name: 'Batman',
      realName: 'Bruce Wayne',
      id: 2,
      abilities: ['Inteligencia', 'Artes Marciales', 'Detective'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVNEoLaTgtkTNg2oTlzEwqbSaOCOuIz0vNJw&s',
    },
    {
      name: 'Spider-Man',
      realName: 'Peter Parker',
      id: 3,
      abilities: ['Trepar paredes', 'Sentido-Arácnido', 'Super Fuerza'],
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScN4zkHARQ5og-p7MUzMN1zeNKQL06vidOCg&s',
    },
    {
      name: 'Wonder Woman',
      realName: 'Diana Prince',
      id: 4,

      abilities: ['Super Fuerza', 'Lasso', 'volar'],
      img: 'https://sm.ign.com/t/ign_latam/photo/default/large-6229069-1683856916378_8wyw.1080.jpg',
    },
    {
      name: 'Iron Man',
      realName: 'Tony Stark',
      id: 5,
      abilities: ['Genio', 'Armadura', 'Experto en Armas'],
      img: 'https://i.ebayimg.com/images/g/U3IAAOSwRuxmg64S/s-l400.jpg',
    },
    {
      name: 'Captain America',
      realName: 'Steve Rogers',
      id: 6,
      abilities: ['Super soldado', 'Escudo'],
      img: 'https://i.pinimg.com/474x/5b/e9/29/5be9298de92b956a649cbc2a7bff5a4a.jpg',
    },
    {
      name: 'Thor',
      realName: 'Thor Odinson',
      id: 7,
      abilities: ['Fuerza', 'Mjolnir', 'Control de rayos'],
      img: 'https://i.pinimg.com/736x/16/2a/5c/162a5c4f8069d865704821eed8fe5555.jpg',
    },
    {
      name: 'Hulk',
      realName: 'Bruce Banner',
      id: 8,

      abilities: ['Super Fuerza', 'Regeneracion'],
      img: 'https://i.ebayimg.com/images/g/wRIAAOSwcT1jbaFv/s-l1200.jpg',
    },
    {
      name: 'Black Panther',
      realName: "T'Challa",
      id: 9,
      abilities: ['Fuerza', 'Traje de Vibranium', 'Artes Marciales'],
      img: 'https://m.media-amazon.com/images/I/91FsUXQiC2L._AC_UF1000,1000_QL80_.jpg',
    },
    {
      name: 'Flash',
      realName: 'Barry Allen',
      id: 10,

      abilities: ['Super fuerza', 'Viaje en el Tiempo'],
      img: 'https://i.pinimg.com/736x/bb/7a/fb/bb7afb5d71306827ee7f58798cf23255.jpg',
    },
    {
      name: 'Aquaman',
      realName: 'Arthur Curry',
      id: 11,
      abilities: ['Respiracion Acuatica', 'Super Fuerza'],
      img: 'https://comichub.blob.core.windows.net/low/de2a2131-ba30-41b8-8ae0-69c2ee1716b2.jpg',
    },
    {
      name: 'Wolverine',
      realName: 'James Howlett (Logan)',
      id: 12,
      abilities: ['Curacion', 'Adamantium'],
      img: 'https://cdn.marvel.com/content/1x/wolvrevengerb2024005.jpg',
    },
    {
      name: 'Doctor Strange',
      realName: 'Stephen Strange',
      id: 13,
      abilities: ['Magia', 'Manipulacion temporal'],
      img: 'https://preview.redd.it/doctor-strange-cover-by-alex-ross-v0-29ubd3df3r4a1.jpg?width=640&crop=smart&auto=webp&s=c7662ecee2c7dff76c2deeba8391a07bf95d8849',
    },
    {
      name: 'Black Widow',
      realName: 'Natasha Romanoff',
      id: 14,
      abilities: ['Espia', 'Artes Marciales'],
      img: 'https://i.pinimg.com/736x/0d/bb/21/0dbb2134e3fbdb06a8c0ae64c1b6440b.jpg',
    },
    {
      name: 'Green Lantern',
      realName: 'Hal Jordan',
      id: 15,
      abilities: ['Anillo mágico'],
      img: 'https://legacycomics.com/wp-content/uploads/2020/03/green-lantern-80th-anniversary-100-page-super-spectacular-1-lee-2010-623x960.png',
    },
    {
      name: 'Deadpool',
      realName: 'Wade Wilson',
      id: 16,
      abilities: ['Curacion', 'Combate'],
      img: 'https://d29xot63vimef3.cloudfront.net/image/deadpool/11-1.jpg',
    },
    {
      name: 'Captain Marvel',
      realName: 'Carol Danvers',
      id: 17,
      abilities: ['Vuela', 'Super fuerza'],
      img: 'https://i.ebayimg.com/images/g/NO0AAOSw6ZZf1ms6/s-l400.jpg',
    },
    {
      name: 'Ant-Man',
      realName: 'Scott Lang',
      id: 18,
      abilities: ['Se achica', 'Viaje quantico'],
      img: 'https://www.g-mart.com/static/f138252.jpg',
    },
    {
      name: 'Cyborg',
      realName: 'Victor Stone',
      id: 19,
      abilities: ['Mejoras cibernéticas', 'armadura'],
      img: 'https://storage.googleapis.com/hipcomic/p/e4ed479c7d2c0b89a5f3f7299b281281-800.jpg',
    },
    {
      name: 'Shazam',
      realName: 'Billy Batson',
      id: 20,
      abilities: ['Super fuerza', 'Vuela'],
      img: 'https://i.ebayimg.com/images/g/eTgAAOSwfcZgQVvL/s-l400.jpg',
    },
  ]);

  //Señal para simular loading
  isLoading = signal<boolean>(false);

  constructor() {}

  /*
  Función para obtener un super héroe del listado buscandolo por id
  @param {number} id
  */
  getHeroById(id: number): SuperHero | undefined {
    return this.superHeroList().find((e) => e.id == id);
  }

  /*
  Función para añadir un nuevo Héroe al listado de héroes, actualizando la signal
  @param {SuperHero} newHero
  */
  addNewHero(newHero: SuperHero) {
    this.superHeroList.update((currentList) => [...currentList, newHero]);
  }

  /*
  Función para eliminar Héroe al listado por ID, actualizando la signal
  @param {number} id
  */
  deleteHeroById(id: number | string) {
    this.isLoading.set(true); // Activo loading para activar componente de loading con overlay
    setTimeout(() => {
      //agrego un set time out para simular llamado http
      this.superHeroList.update((currentList) =>
        currentList.filter((hero) => hero.id !== id)
      );
      this.isLoading.set(false); // <-- Desactivamos loading
    }, 500); // Simula un retraso de 1 segundo
  }
  /*
  Función para editar Héroe
  @param {SuperHero} updatedHeroValues
  */
  editHero(updatedHeroValues: SuperHero) {
    this.superHeroList.update((currnetList) =>
      currnetList.map((hero) => {
        return hero.id == updatedHeroValues.id ? updatedHeroValues : hero;
      })
    );
  }

  /*
  Función para buscar super héroe que matchee con parámetro de búsqueda
  @param {string} nameSection
  @returns {SuperHero[]} 
  */
  getHeroListByNameSection(nameSection: string) {
    return this.superHeroList().filter((e) =>
      e.name.toLowerCase().includes(nameSection.toLocaleLowerCase())
    );
  }
}
