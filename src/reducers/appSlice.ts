import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client } from "../client.ts";

interface Info {
  data: {
    success: boolean;
    message: string;
    hostname: string;
    time: number;
  };
  status: "loading" | "succeeded" | "failed";
}

export const fetchAccounts = createAsyncThunk("fetchAccounts", async () => {
  const response = await client.get("accounts");
  return response.data;
});

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

const initialState: AppState = { accounts: initialInfo };

interface AppState {
  accounts: Info;
}

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
        state.accounts.data = payload;
      })
      .addCase(fetchAccounts.rejected, (state) => {
        state.accounts.status = "failed";
        state.accounts.data = initialData;
      });
  },
});

export default AppSlice.reducer;
