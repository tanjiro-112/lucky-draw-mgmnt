import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents, createEvent } from '../../redux/slices/eventsSlice';
import PageWrapper from '../../components/layout/PageWrapper';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import EventForm from '../../components/events/EventForm';

const Events = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { items: events, status, error } = useSelector((state) => state.events);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchEvents());
    }
  }, [status, dispatch]);

  const handleCreateEvent = async (eventData) => {
    try {
      await dispatch(createEvent(eventData)).unwrap();
      setIsModalOpen(false);
    } catch (err) {
      // The error is already handled by the slice, but you could add
      // additional UI feedback here if needed (e.g., a toast notification)
      console.error('Failed to create the event:', err);
    }
  };

  let content;

  if (status === 'loading' && !isModalOpen) { // Only show main loading if not in modal
    content = <div className="text-center">Loading events...</div>;
  } else if (status === 'failed') {
    content = <div className="text-center text-error">Error: {error}</div>;
  } else {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-base-100 rounded-lg shadow-md p-6">
            <h3 className="text-lg font-bold mb-2">{event.name}</h3>
            <p className="text-base-content mb-4">{event.description}</p>
            <div className="flex justify-between items-center">
              <span className={`badge badge-lg ${event.status === 'Active' ? 'badge-success' : event.status === 'Completed' ? 'badge-error' : 'badge-warning'}`}>
                {event.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <PageWrapper>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Events</h1>
        <Button onClick={() => setIsModalOpen(true)} variant="primary">
          Create Event
        </Button>
      </div>
      {content}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Event">
        <EventForm 
          onSubmit={handleCreateEvent} 
          onCancel={() => setIsModalOpen(false)}
          isLoading={status === 'loading'}
        />
      </Modal>
    </PageWrapper>
  );
};

export default Events;
