import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { startAppListening } from '../../hooks';
import { setItem } from '../../utils/localStorage';

export interface IConfigState {
  UI_HOME_LEFT_SIDE_BAR?: boolean,
}

const initialConfig = {
  UI_HOME_LEFT_SIDE_BAR: true,
} as IConfigState;

export const configSlice = createSlice({
  name: 'configs',
  initialState: initialConfig,
  reducers: {
    updateConfig: (state, action: PayloadAction<IConfigState>) => {
      Object.assign(state, { ...state, ...action.payload });
    },
    resetConfig: (state) => {
      Object.assign(state, initialConfig);
    },
  },
});

// Get actions is generated by createSlice()
export const { updateConfig, resetConfig } = configSlice.actions;

// Create the middleware methods
startAppListening({
  matcher: isAnyOf(updateConfig, resetConfig),
  effect: (action, listenerApi) => {
    setItem('vbk_system', listenerApi.getState() as RootState);
  },
});

export const selectConfigs = (state: RootState) => state.configs;
// Get all reducers is generated by createSlice()
export default configSlice.reducer;