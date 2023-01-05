import { useState } from "react";
import styled from "styled-components";
import { useImmer } from "use-immer";

import Episode from "../Episode";
import Season from "../Season";

const Title = styled.h1`
  text-decoration: underline;
  font-size: 1.7rem;
  text-decoration-color: var(--nemo);
  text-underline-offset: 2px;
  text-decoration-thickness: 2px;
  margin: 0;
`;

const StyledShow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export default function Show({ initialSeasons = [] }) {
  const [seasons, setSeasons] = useImmer(initialSeasons);

  function handleToggleHasSeen(seasonNumber, episodeNumber) {
    // setSeasons((prevSeasons) => {
    //   const season = prevSeasons.find(({ number }) => number === seasonNumber);

    //   const episode = season.episodes.find(
    //     ({ number }) => number === episodeNumber
    //   );

    //   episode.hasSeen = !episode.hasSeen; //mutation

    //   console.log(prevSeasons);

    //   return prevSeasons; //is das selbe object, wird überprüft mit `Object.is`
    //   //updated nicht weil: bail out -> performance optimierung
    // });

    // setSeasons((prevSeasons) => {
    //   return prevSeasons.map((season) => {
    //     if (season.number === seasonNumber) {
    //       //dinge verändern
    //       return { //shallow copy
    //         ...season,
    //         episodes: season.episodes.map((episode) => {
    //           if (episode.number === episodeNumber) {
    //             //dinge verändern
    //             return {
    //               ...episode,
    //               hasSeen: !episode.hasSeen,
    //             };
    //           } else {
    //             return episode;
    //           }
    //         }),
    //       };
    //     } else {
    //       return season;
    //     }
    //   });
    // });

    setSeasons((draft) => {
      const season = draft.find((season) => season.number === seasonNumber);
      const episode = season.episodes.find(
        (episode) => episode.number === episodeNumber
      );

      episode.hasSeen = !episode.hasSeen;
    });
  }

  console.log(seasons);

  return (
    <StyledShow>
      <Title>A Series of Unfortunate Events</Title>
      {seasons.map((season) => (
        <Season key={season.number} number={season.number}>
          {season.episodes.map((episode) => (
            <Episode
              key={episode.number}
              number={episode.number}
              title={episode.title}
              hasSeen={episode.hasSeen}
              onToggleHasSeen={() => {
                handleToggleHasSeen(season.number, episode.number);
              }}
            />
          ))}
        </Season>
      ))}
    </StyledShow>
  );
}
