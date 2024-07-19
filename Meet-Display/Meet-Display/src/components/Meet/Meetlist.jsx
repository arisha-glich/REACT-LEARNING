import React from 'react';
import ParticipantList from './ParticipantList';

const participants = [
  { name: 'Shawal Ali', image: '/images/6.jpg', role: 'Developer' },
  { name: 'Maham Hafeez', image: '/images/2.jpeg', role: 'Devolper' },
  { name: 'Arisha Nawaz', image: '/images/1.jpg', role: 'Student' },
  { name: 'Kashmala', image: 'https://example.com/charlie.jpg', role: 'Student' },
  { name: 'Ethan Hunt', image: '/images/4.jpeg', role: 'Student' },
  { name: 'Fiona Gallagher', image: '/imagess/3.jpeg', role: 'Student' },
  { name: 'George Michael', image: '/images/4.jpeg', role: 'Student' },
  { name: 'Hannah Montana', image: '/images/6.jpg', role: 'Student' },
  { name: 'Iris West', image: '/images/1.jpg', role: 'Student' },
  { name: 'Jack Dawson', image: '/images/9.jpg', role: 'Student' },
  { name: 'Katherine Pierce', image: 'https://example.com/katherine.jpg', role: 'Student' },
  { name: 'Liam Neeson', image: 'https://example.com/liam.jpg', role: 'Student' },
];

function Meetlist() {
  return (
    <div>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Meeting Participants</h1>
      <ParticipantList participantList={participants} />
    </div>
  );
}

export default Meetlist;