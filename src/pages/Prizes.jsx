import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrizes, createPrize } from '../../redux/slices/prizesSlice';
import PageWrapper from '../../components/layout/PageWrapper';
import Button from '../../components/common/Button';
import Modal from '../../components/common/Modal';
import PrizeForm from '../../components/prizes/PrizeForm';

const Prizes = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { items: prizes, status, error, creatingStatus, creatingError } = useSelector((state) => state.prizes);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPrizes());
    }
  }, [status, dispatch]);

  const handleCreatePrize = async (prizeData) => {
    await dispatch(createPrize(prizeData));
    if (!creatingError) {
      setIsModalOpen(false);
    }
  };

  let content;

  if (status === 'loading') {
    content = <div className="text-center">Loading prizes...</div>;
  } else if (status === 'failed') {
    content = <div className="text-center text-error">Error: {error}</div>;
  } else {
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {prizes.map((prize) => (
          <div key={prize.id} className="bg-base-100 rounded-lg shadow-md overflow-hidden">
            <img src={prize.image} alt={prize.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{prize.name}</h3>
              <p className="text-base-content text-sm mb-4">{prize.description}</p>
              <div className="flex justify-between items-center">
                <span className="badge badge-info">{prize.category}</span>
                <span className="font-semibold text-primary">${prize.value.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <PageWrapper>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Prizes</h1>
        <Button onClick={() => setIsModalOpen(true)} variant="primary">
          Create Prize
        </Button>
      </div>
      {content}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="Create New Prize">
        <PrizeForm
          onSubmit={handleCreatePrize}
          onCancel={() => setIsModalOpen(false)}
          isLoading={creatingStatus === 'loading'}
        />
      </Modal>
      {creatingError && <div className="text-error text-center mt-4">{creatingError}</div>}
    </PageWrapper>
  );
};

export default Prizes;
