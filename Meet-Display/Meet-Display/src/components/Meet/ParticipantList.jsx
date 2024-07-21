import React from 'react';
import ParticipantCard from './ParticipantCard';
import './ParticipantList.css';

function ParticipantList({ participantList = [] }) {
  return (
    <div className="participant-list">
      {participantList.map((participant, index) => (
        <ParticipantCard 
<<<<<<< HEAD
          key={index} //  <ParticipantCard key={index} participant={undefined} />
          participantName={participant?.name}//optionl chaining
          participantImage={participant?.image}
          participantRole={participant?.role}
=======
          key={index}
>>>>>>> 8568989293860f9cd7ea0dd528186726a8b746ac
        />
      ))}
    </div>
  );
}

export default ParticipantList;
