import React from 'react';

function CharacterCard({ name, teamName, programmingStyle, description }) {
  return (
    <div className="character-card">
      <h2 className="character-name">{name}</h2>
      <h4 className='character-team-name'>{teamName}</h4>
      <p className="character-programming-style">{programmingStyle}</p>
      <p className="character-description">{description}</p>
    </div>
  );
}

export default CharacterCard;
