import { createSlice } from "@reduxjs/toolkit";
import { PALETTE, PALETTE_PREDEFINITA } from "../../data/palette";

const MODI = ["auto", "chiaro", "scuro"];

// Legge una scelta salvata dall'utente, ignorando valori non validi
const leggi = (chiave, predefinito, valide) => {
  try {
    const valore = window.localStorage.getItem(chiave);
    return valore && valide.includes(valore) ? valore : predefinito;
  } catch {
    return predefinito;
  }
};

const initialState = {
  menuAperto: false,
  palette: leggi("tema-palette", PALETTE_PREDEFINITA, PALETTE.map((voce) => voce.id)),
  modo: leggi("tema-modo", "auto", MODI),
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleMenu: (state) => {
      state.menuAperto = !state.menuAperto;
    },
    chiudiMenu: (state) => {
      state.menuAperto = false;
    },
    impostaPalette: (state, action) => {
      state.palette = action.payload;
    },
    impostaModo: (state, action) => {
      state.modo = action.payload;
    },
  },
});

export const { toggleMenu, chiudiMenu, impostaPalette, impostaModo } = uiSlice.actions;
export default uiSlice.reducer;
