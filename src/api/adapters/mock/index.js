import db from './db';
import { simulateNetwork, createId } from './utils';

const getEvents = async () => {
  await simulateNetwork(); 

  if (Math.random() < 0.08) {
    return {
      status: 500,
      errorMessage: 'A server error occurred. Please try again later.',
      jcJson: null,
    };
  }

  return {
    status: 200,
    errorMessage: '',
    jcJson: { events: db.events },
  };
};

const createEvent = async (eventData) => {
  await simulateNetwork(400, 600);

  if (Math.random() < 0.05) {
    return {
      status: 500,
      errorMessage: 'Failed to create the event. Please try again.',
      jcJson: null,
    };
  }

  const newEvent = {
    id: createId(),
    ...eventData,
    status: 'Upcoming',
    participantCount: 0,
    prizesCount: 0,
  };

  db.events.unshift(newEvent);

  return {
    status: 200,
    errorMessage: '',
    jcJson: { event: newEvent },
  };
};

const getPrizes = async () => {
  await simulateNetwork();

  if (Math.random() < 0.08) {
    return {
      status: 500,
      errorMessage: 'A server error occurred fetching prizes. Please try again later.',
      jcJson: null,
    };
  }

  return {
    status: 200,
    errorMessage: '',
    jcJson: { prizes: db.prizes },
  };
};

const createPrize = async (prizeData) => {
  await simulateNetwork(400, 600);

  if (Math.random() < 0.05) {
    return {
      status: 500,
      errorMessage: 'Failed to create the prize. Please try again.',
      jcJson: null,
    };
  }

  const newPrize = {
    id: createId(),
    ...prizeData,
  };

  db.prizes.unshift(newPrize); // Add to the beginning of the array

  return {
    status: 200,
    errorMessage: '',
    jcJson: { prize: newPrize },
  };
};

export default {
  getEvents,
  createEvent,
  getPrizes,
  createPrize,
};
