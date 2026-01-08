import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PageWrapper from '../../components/layout/PageWrapper';
import AddParticipantModal from '../../components/participants/AddParticipantModal';
import { fetchParticipants, addParticipant } from '../../redux/slices/participantsSlice';

const Participants = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const { items: participants, status, error } = useSelector((state) => state.participants);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchParticipants());
    }
  }, [status, dispatch]);

  const handleAddParticipant = (participant) => {
    dispatch(addParticipant(participant));
    setShowModal(false);
  };

  let content;

  if (status === 'loading') {
    content = <p>Loading participants...</p>;
  } else if (status === 'succeeded') {
    content = (
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant, index) => (
              <tr key={participant.id}>
                <th>{index + 1}</th>
                <td>{participant.name}</td>
                <td>{participant.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else if (status === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <PageWrapper>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Participants</h1>
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>Add Participant</button>
      </div>
      {content}
      <AddParticipantModal
        show={showModal}
        onClose={() => setShowModal(false)}
        onAdd={handleAddParticipant}
      />
    </PageWrapper>
  );
};

export default Participants;
