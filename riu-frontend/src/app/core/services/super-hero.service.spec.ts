import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SuperHeroService } from './super-hero.service';
import { SuperHero } from '../../@shared/interfaces/super-hero-interfaces';
import { signal } from '@angular/core';

describe('SuperHeroService', () => {
  let service: SuperHeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperHeroService);
  });

  it('Debería crearse el servicio', () => {
    expect(service).toBeTruthy();
  });

  it('Debería filtrar héroes segun nombre', () => {
    const service = new SuperHeroService();
    //cambio el valor inicial a un listado en el que hay 5 héroes de los cuales solo 3 tienen man en su nombre
    service.superHeroList.set([
      {
        name: 'Spider-Man',
        realName: 'Peter Parker',
        id: 3,

        abilities: [
          'Wall-crawling',
          'Spider-sense',
          'Super strength',
          'Web-slinging',
        ],
        img: '',
      },
      {
        name: 'Wonder Woman',
        realName: 'Diana Prince',
        id: 4,

        abilities: [
          'Super strength',
          'Lasso of Truth',
          'Flight',
          'Combat skills',
        ],
        img: '',
      },
      {
        name: 'Iron Man',
        realName: 'Tony Stark',
        id: 5,
        abilities: ['Genius intellect', 'Powered armor suit', 'Weapons expert'],
        img: '',
      },
      {
        name: 'Captain America',
        realName: 'Steve Rogers',
        id: 6,
        abilities: [
          'Super soldier strength',
          'Shield mastery',
          'Tactical expert',
        ],
        img: '',
      },
      {
        name: 'Thor',
        realName: 'Thor Odinson',
        id: 7,
        abilities: ['Godly strength', 'Mjolnir mastery', 'Lightning control'],
        img: '',
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

  it('Debería crear un nuevo Super Héroe, Luego, obtener su info segun id y finalmente eliminarlo', fakeAsync(async () => {
    const service = new SuperHeroService();

    const cyborg: SuperHero = {
      name: 'Dimitri',
      realName: 'Dimitri Triantafilo',
      id: 21,
      abilities: ['Excelent Coding', 'Cool guy', 'Great frontender'],
      img: 'https://i.pinimg.com/474x/b0/be/0d/b0be0dba2bab92f0a8ae88b37bc458e8.jpg',
    };
    service.addNewHero(cyborg);

    // testea que result tenga 21 elementos (1 más que los originales 20)
    expect(service.superHeroList().length).toEqual(21);

    const searchedHeroByIdName = service.getHeroById(21)?.name;

    expect(searchedHeroByIdName).toEqual('Dimitri');

    //elimino el elemento con id 21,
    // como agregué el loading y ahora tiene un retraso el edit, debo utilizar asincronismo al ejecutar el delete
    await service.deleteHeroById(21);
    tick(1000);
    // testea que result tenga 20 elementos nuevamente
    expect(service.superHeroList().length).toEqual(20);
  }));

  it('Debería editar un héroe', () => {
    const service = new SuperHeroService();
    // simulo nuevo valores para id 1, (actualmente súperman )
    const cyborg: SuperHero = {
      name: 'NewHero',
      realName: 'Dimitri Triantafilo',
      id: 1,
      abilities: ['Excelent Coding', 'Cool guy', 'Great frontender'],
      img: 'https://i.pinimg.com/474x/b0/be/0d/b0be0dba2bab92f0a8ae88b37bc458e8.jpg',
    };
    service.editHero(cyborg);

    // guardo el nombre del heroe, buscando el id 1 dentro del listado de héroes
    const searchedHeroByIdName = signal(service.getHeroById(1)?.name);

    expect(searchedHeroByIdName()).toEqual('NewHero');

    // testea que result tenga 20 elementos, para corroborar que no se hayan añadido nuevos héroes

    expect(service.superHeroList().length).toEqual(20);
  });
});
