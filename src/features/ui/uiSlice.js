import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  menuAperto: false,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuAperto = !state.menuAperto
    },
    chiudiMenu: (state) => {
      state.menuAperto = false
    },
  },
})

export const { toggleMenu, chiudiMenu } = uiSlice.actions
export default uiSlice.reducer
