import { createSlice } from "@reduxjs/toolkit";
import { routes, typeRoutes } from "../../const.ts";
import { fetchAccounts, fetchAssets } from "./actions.ts";

interface Info {
  data: {
    success: boolean;
    message: string;
    hostname: string;
    time: number;
  };
  status: "loading" | "succeeded" | "failed";
}

const initialData = {
  success: false,
  message: "",
  hostname: "",
  time: 0,
};

const initialInfo: Info = {
  data: initialData,
  status: "loading",
};

type AppState = {
  [key in typeRoutes]: Info;
};

const initialState: AppState = {
  ...routes.reduce<AppState>((acc, elem) => {
    acc[elem] = initialInfo;
    return acc;
  }, {} as AppState),
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAccounts.pending, (state) => {
        state.accounts.status = "loading";
        state.accounts.data = initialData;
      })
      .addCase(fetchAccounts.fulfilled, (state, { payload }) => {
        state.accounts.status = "succeeded";
        state.accounts.data = payload.data;
      })
      .addCase(fetchAccounts.rejected, (state) => {
        state.accounts.status = "failed";
        state.accounts.data = initialData;
      })
      .addCase(fetchAssets.pending, (state) => {
        state.assets.status = "loading";
        state.assets.data = initialData;
      })
      .addCase(fetchAssets.fulfilled, (state, { payload }) => {
        state.assets.status = "succeeded";
        state.assets.data = payload.data;
      })
      .addCase(fetchAssets.rejected, (state) => {
        state.assets.status = "failed";
        state.assets.data = initialData;
      });
  },
});

export default AppSlice.reducer;
