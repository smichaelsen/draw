import { orderBy, range } from 'lodash';

import { findFirstSolution } from '#utils/backtrack';
import { type Country } from '#model/types';
import cartesian from '#utils/cartesian';

interface Team {
  country: Country;
}

export default ({
  teams,
  numPots,
  numTeamsPerPot,
  numMatchdays,
  numGamesPerMatchday,
  allGames,
  pickedMatches,
}: {
  teams: readonly Team[];
  numPots: number;
  numTeamsPerPot: number;
  numMatchdays: number;
  numGamesPerMatchday: number;
  allGames: readonly (readonly [number, number])[];
  pickedMatches: readonly (readonly [number, number])[];
}) => {
  const potIndices = range(numPots);
  const maxGamesAtHome = Math.ceil(numMatchdays / 2);

  const numHomeGamesByTeam: Record<number, number> = {};
  const numAwayGamesByTeam: Record<number, number> = {};
  const numOpponentCountriesByTeam: Record<`${number}:${Country}`, number> = {};

  /**
   * team:pot:home?
   */
  const hasPlayedWithPotMap: Record<
    `${number}:${number}:${'h' | 'a'}`,
    boolean
  > = {};

  for (const m of pickedMatches) {
    const homeTeam = teams[m[0]];
    const awayTeam = teams[m[1]];

    const homePot = Math.floor(m[0] / numTeamsPerPot);
    const awayPot = Math.floor(m[1] / numTeamsPerPot);
    numHomeGamesByTeam[m[0]] = (numHomeGamesByTeam[m[0]] ?? 0) + 1;
    numAwayGamesByTeam[m[1]] = (numAwayGamesByTeam[m[1]] ?? 0) + 1;
    numOpponentCountriesByTeam[`${m[0]}:${awayTeam.country}`] =
      (numOpponentCountriesByTeam[`${m[0]}:${awayTeam.country}`] ?? 0) + 1;
    numOpponentCountriesByTeam[`${m[1]}:${homeTeam.country}`] =
      (numOpponentCountriesByTeam[`${m[1]}:${homeTeam.country}`] ?? 0) + 1;
    hasPlayedWithPotMap[`${m[0]}:${awayPot}:h`] = true;
    hasPlayedWithPotMap[`${m[1]}:${homePot}:a`] = true;
  }

  const remainingGames = allGames.filter(([a, b]) => {
    if (
      pickedMatches.some(
        m => (m[0] === a && m[1] === b) || (m[0] === b && m[1] === a),
      )
    ) {
      // already played before
      return false;
    }

    if (numHomeGamesByTeam[a] === maxGamesAtHome) {
      return false;
    }
    if (numAwayGamesByTeam[b] === maxGamesAtHome) {
      return false;
    }

    const aPot = Math.floor(a / numTeamsPerPot);
    const bPot = Math.floor(b / numTeamsPerPot);

    if (hasPlayedWithPotMap[`${a}:${bPot}:h`]) {
      return false;
    }

    if (hasPlayedWithPotMap[`${b}:${aPot}:a`]) {
      return false;
    }

    return true;
  });

  const unorderedPotPairs = cartesian(potIndices, potIndices);
  const potPairs = orderBy(unorderedPotPairs, [m => m[0], m => m[1]]);

  const orderedRemainingGames = orderBy(remainingGames, [
    m => {
      const hPot = Math.floor(m[0] / numTeamsPerPot);
      const aPot = Math.floor(m[1] / numTeamsPerPot);
      return potPairs.findIndex(([a, b]) => a === hPot && b === aPot);
    },
    m => m[0],
  ]);

  return orderedRemainingGames.find(m => {
    const solution = findFirstSolution(
      {
        source: remainingGames,
        target: pickedMatches,
        numHomeGamesByTeam,
        numAwayGamesByTeam,
        numOpponentCountriesByTeam,
        hasPlayedWithPotMap,
        picked: m,
      },
      {
        reject: c => {
          const [m1, m2] = c.picked;

          // Ensure the teams play same number of games at home & away
          if (c.numHomeGamesByTeam[m1] === maxGamesAtHome) {
            return true;
          }
          if (c.numAwayGamesByTeam[m2] === maxGamesAtHome) {
            return true;
          }

          const homeTeamPotIndex = Math.floor(m1 / numTeamsPerPot);
          const awayTeamPotIndex = Math.floor(m2 / numTeamsPerPot);

          if (c.hasPlayedWithPotMap[`${m1}:${awayTeamPotIndex}:h`]) {
            return true;
          }

          if (c.hasPlayedWithPotMap[`${m2}:${homeTeamPotIndex}:a`]) {
            return true;
          }

          if (
            c.numOpponentCountriesByTeam[`${m1}:${teams[m2].country}`] === 2
          ) {
            return true;
          }

          if (
            c.numOpponentCountriesByTeam[`${m2}:${teams[m1].country}`] === 2
          ) {
            return true;
          }

          return false;
        },

        accept: c => c.target.length === numMatchdays * numGamesPerMatchday - 1,

        generate: c => {
          const newTarget = [...c.target, c.picked];
          const newNumHomeGamesByTeam = {
            ...c.numHomeGamesByTeam,
            [c.picked[0]]: (c.numHomeGamesByTeam[c.picked[0]] ?? 0) + 1,
          } as typeof c.numHomeGamesByTeam;
          const newNumAwayGamesByTeam = {
            ...c.numAwayGamesByTeam,
            [c.picked[1]]: (c.numAwayGamesByTeam[c.picked[1]] ?? 0) + 1,
          } as typeof c.numAwayGamesByTeam;

          const newNumOpponentCountriesByTeam = {
            ...c.numOpponentCountriesByTeam,
            [`${c.picked[0]}:${teams[c.picked[1]].country}`]:
              (c.numOpponentCountriesByTeam[
                `${c.picked[0]}:${teams[c.picked[1]].country}`
              ] ?? 0) + 1,
            [`${c.picked[1]}:${teams[c.picked[0]].country}`]:
              (c.numOpponentCountriesByTeam[
                `${c.picked[1]}:${teams[c.picked[0]].country}`
              ] ?? 0) + 1,
          };

          const pickedHomePotIndex = Math.floor(c.picked[0] / numTeamsPerPot);
          const pickedAwayPotIndex = Math.floor(c.picked[1] / numTeamsPerPot);

          const newHasPlayedWithPotMap: typeof c.hasPlayedWithPotMap = {
            ...c.hasPlayedWithPotMap,
            [`${c.picked[0]}:${pickedAwayPotIndex}:h`]: true,
            [`${c.picked[1]}:${pickedHomePotIndex}:a`]: true,
          } satisfies typeof c.hasPlayedWithPotMap;

          const newSource = c.source.filter(([h, a]) => {
            if (
              (h === c.picked[0] && a === c.picked[1]) ||
              (h === c.picked[1] && a === c.picked[0])
            ) {
              return false;
            }
            if (newNumHomeGamesByTeam[h] === maxGamesAtHome) {
              return false;
            }
            if (newNumAwayGamesByTeam[a] === maxGamesAtHome) {
              return false;
            }

            const homePot = Math.floor(h / numTeamsPerPot);
            const awayPot = Math.floor(a / numTeamsPerPot);

            if (newHasPlayedWithPotMap[`${h}:${awayPot}:h`]) {
              return false;
            }

            if (newHasPlayedWithPotMap[`${a}:${homePot}:a`]) {
              return false;
            }

            return true;
          });

          const currentPotPairIndex = Math.floor(
            newTarget.length / numTeamsPerPot,
          );
          const [potPairHomePot, potPairAwayPot] =
            potPairs[currentPotPairIndex];
          const newHomeTeam =
            numTeamsPerPot * potPairHomePot +
            (newTarget.length % numTeamsPerPot);

          const candidates: (typeof c)[] = [];

          for (const newPicked of newSource) {
            const awayPot = Math.floor(newPicked[1] / numTeamsPerPot);

            const isMatchGood =
              newPicked[0] === newHomeTeam && awayPot === potPairAwayPot;
            if (isMatchGood) {
              candidates.push({
                source: newSource,
                target: newTarget,
                picked: newPicked,
                numHomeGamesByTeam: newNumHomeGamesByTeam,
                numAwayGamesByTeam: newNumAwayGamesByTeam,
                numOpponentCountriesByTeam: newNumOpponentCountriesByTeam,
                hasPlayedWithPotMap: newHasPlayedWithPotMap,
              });
            }
          }

          return candidates;
        },
      },
    );
    return solution !== undefined;
  })!;
};
