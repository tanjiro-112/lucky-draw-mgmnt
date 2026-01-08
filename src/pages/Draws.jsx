import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageWrapper from '../../components/layout/PageWrapper';
import { performDraw, clearDraw } from '../../redux/slices/drawsSlice';
import { fetchEvents } from '../../redux/slices/eventsSlice';
import { fetchPrizes } from '../../redux/slices/prizesSlice';

const Draws = () => {
  const [selectedEvent, setSelectedEvent] = useState('');
  const [selectedPrize, setSelectedPrize] = useState('');
  const dispatch = useDispatch();

  const { items: events, status: eventsStatus } = useSelector((state) => state.events);
  const { items: prizes, status: prizesStatus } = useSelector((state) => state.prizes);
  const { drawResult, status: drawsStatus, error } = useSelector((state) => state.draws);

  useEffect(() => {
    if (eventsStatus === 'idle') {
      dispatch(fetchEvents());
    }
    if (prizesStatus === 'idle') {
      dispatch(fetchPrizes());
    }
  }, [eventsStatus, prizesStatus, dispatch]);

  const handleDraw = () => {
    if (selectedEvent && selectedPrize) {
      const prize = prizes.find(p => p.id.toString() === selectedPrize);
      if (prize) {
        dispatch(performDraw({ prizeId: parseInt(selectedPrize, 10), numberOfWinners: prize.quantity }));
      }
    }
  };

  const handleClear = () => {
    dispatch(clearDraw());
    setSelectedEvent('');
    setSelectedPrize('');
  };

  let content;

  if (drawsStatus === 'loading') {
    content = <p>Drawing winners...</p>;
  } else if (drawsStatus === 'succeeded' && drawResult) {
    content = (
      <div>
        <h2 className="text-2xl font-bold mb-4">Congratulations to the Winners!</h2>
        <h3 className="text-xl font-bold mb-2">Prize: {drawResult.prize.name}</h3>
        <ul className="list-disc list-inside">
          {drawResult.winners.map((winner) => (
            <li key={winner.id} className="text-lg">{winner.name}</li>
          ))}
        </ul>
      </div>
    );
  } else if (drawsStatus === 'failed') {
    content = <p className="text-error">Error: {error}</p>;
  }

  return (
    <PageWrapper>
      <h1 className="text-3xl font-bold mb-8">Draws</h1>
      {!drawResult ? (
        <>
          <div className="flex space-x-4 mb-8">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Select Event</span>
              </label>
              <select
                className="select select-bordered"
                value={selectedEvent}
                onChange={(e) => setSelectedEvent(e.target.value)}
                disabled={eventsStatus === 'loading'}
              >
                <option disabled value="">
                  Select an event
                </option>
                {events.map((event) => (
                  <option key={event.id} value={event.id.toString()}>
                    {event.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Select Prize</span>
              </label>
              <select
                className="select select-bordered"
                value={selectedPrize}
                onChange={(e) => setSelectedPrize(e.target.value)}
                disabled={prizesStatus === 'loading'}
              >
                <option disabled value="">
                  Select a prize
                </option>
                {prizes.map((prize) => (
                  <option key={prize.id} value={prize.id.toString()}>
                    {prize.name} (x{prize.quantity})
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleDraw} disabled={!selectedEvent || !selectedPrize || drawsStatus === 'loading'}>
            {drawsStatus === 'loading' ? 'Drawing...' : 'Start Draw'}
          </button>
        </>
      ) : (
        <button className="btn btn-secondary" onClick={handleClear}>Start New Draw</button>
      )}
      <div className="mt-8">{content}</div>
    </PageWrapper>
  );
};

export default Draws;
