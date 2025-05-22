import { computed, Injectable, signal } from '@angular/core';
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
      movies: ['Man of Steel', 'Batman v Superman', 'Justice League'],
      actors: [
        { name: 'Henry Cavill', img: '' },
        { name: 'Christopher Reeve', img: '' },
        { name: 'Brandon Routh', img: '' },
      ],
      abilities: ['Super strength', 'Flight', 'Heat vision', 'X-ray vision'],
      img: '',
      backgroundImg: '',
      description:
        'El último hijo de Krypton, criado en Smallville como Clark Kent. Protege la Tierra como Superman desde la Fortaleza de la Soledad.',
    },
    {
      name: 'Batman',
      realName: 'Bruce Wayne',
      id: 2,
      movies: ['The Dark Knight', 'Batman Begins', 'Justice League'],
      actors: [
        { name: 'Christian Bale', img: '' },
        { name: 'Michael Keaton', img: '' },
        { name: 'Ben Affleck', img: '' },
        { name: 'Robert Pattinson', img: '' },
      ],
      abilities: [
        'Intelligence',
        'Martial arts',
        'Detective skills',
        'Technology',
      ],
      img: '',
      backgroundImg: '',
      description:
        'Millonario filántropo que tras el asesinato de sus padres jura combatir el crimen en Gotham City usando tecnología y habilidades de combate.',
    },
    {
      name: 'Spider-Man',
      realName: 'Peter Parker',
      id: 3,
      movies: ['Spider-Man: No Way Home', 'Spider-Man 2', 'Avengers: Endgame'],
      actors: [
        { name: 'Tobey Maguire', img: '' },
        { name: 'Andrew Garfield', img: '' },
        { name: 'Tom Holland', img: '' },
      ],
      abilities: [
        'Wall-crawling',
        'Spider-sense',
        'Super strength',
        'Web-slinging',
      ],
      img: '',
      backgroundImg: '',
      description:
        "Estudiante mordido por una araña radiactiva que adquiere habilidades arácnidas. Aprende que 'un gran poder conlleva una gran responsabilidad'.",
    },
    {
      name: 'Wonder Woman',
      realName: 'Diana Prince',
      id: 4,
      movies: ['Wonder Woman', 'Wonder Woman 1984', 'Justice League'],
      actors: [
        { name: 'Gal Gadot', img: '' },
        { name: 'Lynda Carter', img: '' },
      ],
      abilities: [
        'Super strength',
        'Lasso of Truth',
        'Flight',
        'Combat skills',
      ],
      img: '',
      backgroundImg: '',
      description:
        'Princesa amazona de Themyscira, hija de Zeus. Defensora de la paz y la justicia en el mundo de los hombres.',
    },
    {
      name: 'Iron Man',
      realName: 'Tony Stark',
      id: 5,
      movies: ['Iron Man', 'Avengers: Endgame', 'Spider-Man: Homecoming'],
      actors: [{ name: 'Robert Downey Jr.', img: '' }],
      abilities: ['Genius intellect', 'Powered armor suit', 'Weapons expert'],
      img: '',
      backgroundImg: '',
      description:
        'Genio multimillonario que construye un traje tecnológico tras ser secuestrado. Fundador de los Avengers.',
    },
    {
      name: 'Captain America',
      realName: 'Steve Rogers',
      id: 6,
      movies: ['Captain America: The First Avenger', 'Avengers: Endgame'],
      actors: [{ name: 'Chris Evans', img: '' }],
      abilities: [
        'Super soldier strength',
        'Shield mastery',
        'Tactical expert',
      ],
      img: '',
      backgroundImg: '',
      description:
        'Soldado de la Segunda Guerra Mundial mejorado mediante el suero del super soldado. Símbolo de libertad y justicia.',
    },
    {
      name: 'Thor',
      realName: 'Thor Odinson',
      id: 7,
      movies: ['Thor', 'Avengers: Infinity War', 'Thor: Ragnarok'],
      actors: [{ name: 'Chris Hemsworth', img: '' }],
      abilities: ['Godly strength', 'Mjolnir mastery', 'Lightning control'],
      img: '',
      backgroundImg: '',
      description:
        'Dios nórdico del trueno de Asgard. Protector de los Nueve Reinos con su martio Mjolnir.',
    },
    {
      name: 'Hulk',
      realName: 'Bruce Banner',
      id: 8,
      movies: ['The Incredible Hulk', 'Avengers: Age of Ultron'],
      actors: [
        { name: 'Mark Ruffalo', img: '' },
        { name: 'Edward Norton', img: '' },
      ],
      abilities: ['Superhuman strength', 'Regeneration', 'Gamma radiation'],
      img: '',
      backgroundImg: '',
      description:
        'Científico expuesto a radiación gamma que se transforma en un gigante verde cuando se enfurece.',
    },
    {
      name: 'Black Panther',
      realName: "T'Challa",
      id: 9,
      movies: ['Black Panther', 'Avengers: Infinity War'],
      actors: [{ name: 'Chadwick Boseman', img: '' }],
      abilities: ['Enhanced strength', 'Vibranium suit', 'Martial arts'],
      img: '',
      backgroundImg: '',
      description:
        'Rey de Wakanda que usa el poder de la pantera y tecnología vibranium para proteger su nación.',
    },
    {
      name: 'Flash',
      realName: 'Barry Allen',
      id: 10,
      movies: ['Justice League', 'The Flash'],
      actors: [
        { name: 'Ezra Miller', img: '' },
        { name: 'Grant Gustin', img: '' },
      ],
      abilities: ['Super speed', 'Time travel', 'Speed Force connection'],
      img: '',
      backgroundImg: '',
      description:
        'Científico forense que obtiene velocidad sobrehumana tras un accidente con productos químicos.',
    },
    {
      name: 'Aquaman',
      realName: 'Arthur Curry',
      id: 11,
      movies: ['Aquaman', 'Justice League'],
      actors: [{ name: 'Jason Momoa', img: '' }],
      abilities: ['Underwater breathing', 'Super strength', 'Trident mastery'],
      img: '',
      backgroundImg: '',
      description:
        'Híbrido de humano y atlante que gobierna los océanos como rey de Atlantis.',
    },
    {
      name: 'Wolverine',
      realName: 'James Howlett (Logan)',
      id: 12,
      movies: ['X-Men', 'Logan'],
      actors: [{ name: 'Hugh Jackman', img: '' }],
      abilities: ['Healing factor', 'Adamantium claws', 'Enhanced senses'],
      img: '',
      backgroundImg: '',
      description:
        'Mutante con garras retráctiles y capacidad regenerativa. Miembro de los X-Men.',
    },
    {
      name: 'Doctor Strange',
      realName: 'Stephen Strange',
      id: 13,
      movies: ['Doctor Strange', 'Avengers: Infinity War'],
      actors: [{ name: 'Benedict Cumberbatch', img: '' }],
      abilities: [
        'Mastery of mystic arts',
        'Time manipulation',
        'Astral projection',
      ],
      img: '',
      backgroundImg: '',
      description:
        'Neurocirujano que tras un accidente se convierte en Hechicero Supremo del universo Marvel.',
    },
    {
      name: 'Black Widow',
      realName: 'Natasha Romanoff',
      id: 14,
      movies: ['Black Widow', 'Avengers: Endgame'],
      actors: [{ name: 'Scarlett Johansson', img: '' }],
      abilities: ['Master spy', 'Martial arts', 'Weapons expert'],
      img: '',
      backgroundImg: '',
      description:
        'Ex-espía rusa reclutada por S.H.I.E.L.D. que se convierte en miembro clave de los Avengers.',
    },
    {
      name: 'Green Lantern',
      realName: 'Hal Jordan',
      id: 15,
      movies: ['Green Lantern'],
      actors: [{ name: 'Ryan Reynolds', img: '' }],
      abilities: ['Power ring constructs', 'Flight', 'Energy projection'],
      img: '',
      backgroundImg: '',
      description:
        'Piloto elegido por un anillo de poder que le da habilidades limitadas solo por su imaginación.',
    },
    {
      name: 'Deadpool',
      realName: 'Wade Wilson',
      id: 16,
      movies: ['Deadpool', 'Deadpool 2'],
      actors: [{ name: 'Ryan Reynolds', img: '' }],
      abilities: [
        'Healing factor',
        'Breaking the fourth wall',
        'Combat skills',
      ],
      img: '',
      backgroundImg: '',
      description:
        'Mercenario bocazas con habilidades regenerativas y sentido del humor inapropiado.',
    },
    {
      name: 'Captain Marvel',
      realName: 'Carol Danvers',
      id: 17,
      movies: ['Captain Marvel', 'Avengers: Endgame'],
      actors: [{ name: 'Brie Larson', img: '' }],
      abilities: ['Energy absorption', 'Flight', 'Super strength'],
      img: '',
      backgroundImg: '',
      description:
        'Ex-piloto de la Fuerza Aérea que obtiene poderes cósmicos tras una explosión de energía Kree.',
    },
    {
      name: 'Ant-Man',
      realName: 'Scott Lang',
      id: 18,
      movies: ['Ant-Man', 'Avengers: Endgame'],
      actors: [{ name: 'Paul Rudd', img: '' }],
      abilities: [
        'Size manipulation',
        'Insect communication',
        'Quantum realm travel',
      ],
      img: '',
      backgroundImg: '',
      description:
        'Ladrón reformado que adquiere la capacidad de cambiar de tamaño usando el traje de Ant-Man.',
    },
    {
      name: 'Cyborg',
      realName: 'Victor Stone',
      id: 19,
      movies: ['Justice League'],
      actors: [{ name: 'Ray Fisher', img: '' }],
      abilities: ['Cybernetic enhancements', 'Technopathy', 'Weapon systems'],
      img: '',
      backgroundImg: '',
      description:
        'Atleta convertido en cyborg tras un accidente, fusionando tecnología alienígena con su cuerpo.',
    },
    {
      name: 'Shazam',
      realName: 'Billy Batson',
      id: 20,
      movies: ['Shazam!'],
      actors: [{ name: 'Zachary Levi', img: '' }],
      abilities: ['Super strength', 'Flight', 'Lightning magic'],
      img: '',
      backgroundImg: '',
      description:
        "Niño que se transforma en un héroe adulto al pronunciar la palabra mágica 'Shazam!'.",
    },
  ]);

  constructor() {}

  
  /*
  Función para obtener un super héroe del listado buscandolo por id
  @param {number} id
  */
  getHeroById(id: number) {
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
  deleteHeroById(id: number) {
    this.superHeroList.update((currentList) =>
      currentList.filter((hero) => hero.id !== id)
    );
  }

  editHero(updatedHeroValues: SuperHero){
    this.superHeroList.update(currnetList => 
      currnetList.map(hero => {
       return hero.id == updatedHeroValues.id ? updatedHeroValues : hero
      })
    )
  }


  /*
  Función para eliminar Héroe al listado por ID, actualizando la signal
  @param {string} nameSection
  @returns {computed<SuperHero[]>} 
  */
  getHeroListByNameSection(nameSection: string) {
    return computed(() =>
      this.superHeroList().filter((e) =>
        e.name.toLowerCase().includes(nameSection)
      )
    );
  }
}
