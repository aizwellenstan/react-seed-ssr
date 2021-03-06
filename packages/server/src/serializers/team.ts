// import { PartialDeep } from 'type-fest';
import * as G from 'src/generated/graphql';
import { Team } from 'src/entity/team';
import { Serialized } from './serializers';
import { serializePerformer } from './performer';
// import { serializePerformer } from './performer';

export const serializeTeam = (
  entity: Team,
): Serialized<G.Team, 'activities' | 'members'> => {
  return {
    ...entity,
    members:
      entity.members &&
      entity.members.map(member => serializePerformer(member)),
    activities: undefined,
  };
};
