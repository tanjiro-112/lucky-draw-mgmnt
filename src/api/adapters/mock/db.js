import { createId } from './utils';

// A simple in-memory database
const db = {
  events: [],
  prizes: [],
};

// Seed initial event data
const createInitialEventData = () => {
  if (db.events.length === 0) {
    db.events.push(...[
      {
        id: createId(),
        name: 'Summer Kick-off Raffle',
        description: 'Annual summer celebration raffle with big prizes!',
        startDate: new Date(),
        endDate: new Date(new Date().setDate(new Date().getDate() + 30)),
        status: 'Active',
      },
      {
        id: createId(),
        name: 'End-of-Year Giveaway',
        description: 'Grand prize giveaway to celebrate the end of the year.',
        startDate: new Date(new Date().setMonth(new Date().getMonth() - 2)),
        endDate: new Date(new Date().setMonth(new Date().getMonth() - 1)),
        status: 'Completed',
      },
      {
        id: createId(),
        name: 'New Product Launch Draw',
        description: 'Exclusive draw for the launch of our new product line.',
        startDate: new Date(new Date().setDate(new Date().getDate() + 60)),
        endDate: new Date(new Date().setDate(new Date().getDate() + 90)),
        status: 'Upcoming',
      }
    ]);
  }
};

// Seed initial prize data
const createInitialPrizeData = () => {
  if (db.prizes.length === 0) {
    db.prizes.push(...[
        {
            id: createId(),
            name: 'Grand Prize: Brand New Tesla Model S',
            description: 'The ultimate electric luxury sedan.',
            category: 'Automobile',
            value: 90000,
            image: 'https://images.unsplash.com/photo-1617704548622-54477bca268f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: createId(),
            name: 'Exotic Vacation Package to Bali',
            description: 'A 7-day luxury trip for two to the beautiful island of Bali.',
            category: 'Travel',
            value: 15000,
            image: 'https://images.unsplash.com/photo-1596701062353-733351459547?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: createId(),
            name: 'Apple MacBook Pro 16-inch',
            description: 'Top-of-the-line MacBook Pro with M3 Max chip.',
            category: 'Electronics',
            value: 3500,
            image: 'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: createId(),
            name: '$500 Amazon Gift Card',
            description: 'Spend it on anything you want on Amazon.',
            category: 'Gift Card',
            value: 500,
            image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ]);
  }
}

createInitialEventData();
createInitialPrizeData();

export default db;
