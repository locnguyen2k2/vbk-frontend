import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { startAppListening } from '../../hooks';
import { setItem } from '../../utils/localStorage';
import { PermissionEnum, SystemRoleEnum } from '../../generated/graphql';

export interface IUserState {
  lastName?: string,
  firstName?: string,
  username?: string,
  email?: string,
  token?: string,
  isActive?: boolean,
  refreshToken?: string,
  roles: SystemRoleEnum[] | [],
  userPermissions: PermissionEnum[] | [],
  isAuthenticated?: boolean,
}

const initialUser = {
  lastName: undefined,
  firstName: undefined,
  username: undefined,
  email: undefined,
  token: undefined,
  refreshToken: undefined,
  isActive: false,
  roles: [],
  userPermissions: [],
  isAuthenticated: false,
} as IUserState;

export const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    updateUser: (state, action: PayloadAction<IUserState>) => {
      Object.assign(state, action.payload);
    },
    logout: (state) => {
      Object.assign(state, initialUser);
    },
  },
});

// Get actions is generated by createSlice()
export const { updateUser, logout } = userSlice.actions;

// Create the middleware methods
startAppListening({
  matcher: isAnyOf(updateUser, logout),
  effect: (action, listenerApi) => {
    setItem('vbk_system', listenerApi.getState() as RootState);
  },
});

export const selectUser = (state: RootState) => state.user;
// Get all reducers is generated by createSlice()
export default userSlice.reducer;