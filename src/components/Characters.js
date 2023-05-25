
import React from 'react';
import CharacterCard from './CharacterCard';

function Characters() {
  return (
    <section>
       <div className="character-cards">
        <CharacterCard
          name="Lily Hane"
          teamName="The Circuit"
          programmingStyle="Offensive"
          description="Lily Hane is a qwerky girl who'll annoy you to know ends, but her loyalty is uncomparable. With her limitless knowledge of viruses and hacking, The Circuit might once again rise to the fame and glory they once called theirs."
        />
        <CharacterCard
          name="Peter Glascow"
          teamName="GreaTech"
          programmingStyle="Offensive"
          description="Just like the viruses he creates, Peter is an illusive, tricky guy who few can go head to head with. Having dominated the hacking industry for many years now, it comes as a pleasant surprise to see a new face in the hacking world that can once again test his hacking limits."
        />
        <CharacterCard
          name="Character 3"
          teamName=""
          programmingStyle="Programming Style 3"
          description="Description 3"
        />
      </div>

    </section>
  );
}

export default Characters;
