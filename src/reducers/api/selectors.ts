import { RootState } from "../store.ts";

export const selectApiState = (state: RootState) => state.api;
