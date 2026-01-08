import React, { useState } from 'react';
import Button from '../common/Button';
import Input from '../common/Input';

const PrizeForm = ({ onSubmit, onCancel, isLoading }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [value, setValue] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, description, category, value: parseInt(value, 10), image });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset disabled={isLoading}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input
            label="Prize Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g., Brand New Tesla Model S"
            required
          />
          <Input
            label="Category"
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Automobile"
            required
          />
        </div>
        <div className="mb-4">
          <Input
            label="Image URL"
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="https://example.com/image.png"
            required
          />
        </div>
        <div className="mb-4">
          <Input
            label="Description"
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="A brief description of the prize."
            required
          />
        </div>
        <div className="mb-6">
          <Input
            label="Value"
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="e.g., 90000"
            required
          />
        </div>
        <div className="flex justify-end gap-4">
          <Button type="button" variant="secondary" onClick={onCancel} disabled={isLoading}>
            Cancel
          </Button>
          <Button type="submit" variant="primary" disabled={isLoading}>
            {isLoading ? 'Creating...' : 'Create Prize'}
          </Button>
        </div>
      </fieldset>
    </form>
  );
};

export default PrizeForm;
