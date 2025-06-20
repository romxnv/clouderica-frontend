import type { UserDto } from '@/shared/api/modules/user';

import type { User } from '../model/types';

export const mapUserDtoToDomain = (userDto: UserDto): User => {
  return {
    id: userDto.id,
    email: userDto.email,
    name: userDto.name,
    avatar: userDto.avatar,
    createdAt: new Date(userDto.createdAt),
    updatedAt: new Date(userDto.updatedAt),
  };
};
