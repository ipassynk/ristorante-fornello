import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemMenuDataService implements InMemoryDbService {
  createDb() {
    const menu = [
      {
        code: 'sw1', category: 'Sandwiches & Wraps', name: 'Hot Rotisserie Beef Sandwich',
        description: 'Lorem ipsum dolor sit amet, viverra tempor curabitur sem per, sagittis wis',
        price: 111
      },
      {
        code: 'sw2', category: 'Sandwiches & Wraps', name: 'Rotisserie Beef Kaiser',
        description: 'Lorem ipsum dolor sit amet, viverra tempor curabitur sem per, sagittis wis',
        price: 22

      },
      {
        code: 'sw3', category: 'Sandwiches & Wraps', name: 'Chicken Club Kaiser',
        description: 'Lorem ipsum dolor sit amet, viverra tempor curabitur sem per, sagittis wis',
        price: 333
      },

      {
        code: 's1', category: 'Starters', name: 'Stuffed Garlic Cheese Loaf',
        description: 'Lorem ipsum dolor sit amet, viverra tempor curabitur sem per, sagittis wis',
        price: 333
      },
      {
        code: 's2', category: 'Starters', name: '4-Cheese Spinach Dip',
        description: 'Lorem ipsum dolor sit amet, viverra tempor curabitur sem per, sagittis wis',
        price: 222
      },
      {
        code: 's3',
        category: 'Starters',
        name: 'Chalet Chicken Soup',
        description: 'Lorem ipsum dolor sit amet, viverra tempor curabitur sem per, sagittis wis',
        price: 888
      },
      {
        code: 'sl1',
        category: 'Salads',
        name: 'Sweet Heat Salad',
        description: 'Lorem ipsum dolor sit amet, viverra tempor curabitur sem per, sagittis wis',
        price: 777
      },
      {
        code: 'sl2',
        category: 'Salads',
        name: 'Spinach and Mandarin Chicken Salad',
        description: 'Lorem ipsum dolor sit amet, viverra tempor curabitur sem per, sagittis wis',
        price: 11
      },
      {
        code: 'sl3',
        category: 'Salads',
        name: 'Rotisserie Chicken Caesar Salad',
        description: 'Lorem ipsum dolor sit amet, viverra tempor curabitur sem per, sagittis wis',
        price: 66
      }
    ];

    return {menu};
  }
}
