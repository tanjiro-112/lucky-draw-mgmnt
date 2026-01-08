import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const EventForm = ({ onSubmit, onCancel, isLoading }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={isLoading}>
        <div className="mb-4">
          <Input
            label="Event Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Summer Kick-off Raffle"
            required
          />
        </div>
        <div className="mb-6">
          <Input
            label="Description"
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A brief description of the event."
            required
          />
        </div>
        <div className="flex justify-end gap-4">
          <Button type="button" variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create Event'}
          </Button>
        </div>
      </fieldset>
    </form>
  );
};

export default EventForm;
