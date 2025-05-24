import { TestBed } from '@angular/core/testing';

import { SuperHeroService } from './super-hero.service';
import { SuperHero } from '../../@shared/interfaces/super-hero-interfaces';
import { signal } from '@angular/core';

describe('SuperHeroService', () => {
  let service: SuperHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperHeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter heroes by name', () => {
    const service = new SuperHeroService();
    //cambio el valr inicial a un listado en el que hay 5 héroes de los cuales solo 3 tienen man en su nombre
    service.superHeroList.set([
      {
        name: 'Spider-Man',
        realName: 'Peter Parker',
        id: 3,
        movies: [
          'Spider-Man: No Way Home',
          'Spider-Man 2',
          'Avengers: Endgame',
        ],
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
        description:
          'Dios nórdico del trueno de Asgard. Protector de los Nueve Reinos con su martio Mjolnir.',
      },
    ]);
    // declaro result para que obtenga los elementos que contienen man en su nombre
    const result = service.getHeroListByNameSection('man');

    // primer criterio es que result tenga 3 elementos
    expect(result.length).toEqual(3);
    // segundo que todos incluyan man
    expect(
      result.every((hero) => hero.name.toLowerCase().includes('man'))
    ).toBeTrue();
  });

  it('should add new Hero, then get its name by id and finally delete it', () => {
    const service = new SuperHeroService();

    const cyborg: SuperHero = {
      name: 'NewHero',
      realName: 'Dimitri Triantafilo',
      id: 21,
      movies: ['Getting to work for RIU'],
      actors: [{ name: 'Dimitri', img: '' }],
      abilities: ['Excelent Coding', 'Cool guy', 'Great frontender'],
      img: '',
      description: 'Esto es un simple test.',
    };
    service.addNewHero(cyborg);

    // testea que result tenga 21 elementos (1 más que los originales 20)
    expect(service.superHeroList().length).toEqual(21);

    const searchedHeroByIdName = service.getHeroById(21)?.name;

    expect(searchedHeroByIdName).toEqual('NewHero');

    //elimino el elemento con id 21
    service.deleteHeroById(21);
    // testea que result tenga 20 elementos nuevamente

    expect(service.superHeroList().length).toEqual(20);
  });

  it('should edit a hero', () => {
    const service = new SuperHeroService();
    // simulo nuevo valores para id 1, (actualmente súperman )
    const cyborg: SuperHero = {
      name: 'NewHero',
      realName: 'Dimitri Triantafilo',
      id: 1,
      movies: ['Getting to work for RIU'],
      actors: [{ name: 'Dimitri', img: '' }],
      abilities: ['Excelent Coding', 'Cool guy', 'Great frontender'],
      img: '',
      description: 'Esto es un simple test.',
    };
    service.editHero(cyborg);

    // guardo el nombre del heroe, buscando el id 1 dentro del listado de héroes
    const searchedHeroByIdName = signal(service.getHeroById(1)?.name);

    expect(searchedHeroByIdName()).toEqual('NewHero');

    // testea que result tenga 20 elementos, para corroborar que no se hayan añadido nuevos héroes

    expect(service.superHeroList().length).toEqual(20);
  });
});
