import { useQuery } from '@tanstack/react-query';

import { userService } from '@/shared/api/modules/user';

import { mapUserDtoToDomain } from '../lib/map-user-dto-to-domain';

export const useCurrentUserQuery = () =>
  useQuery({
    queryKey: ['users', 'me'],
    queryFn: async () => {
      const user = await userService.getCurrent();
      return mapUserDtoToDomain(user);
    },
  });
