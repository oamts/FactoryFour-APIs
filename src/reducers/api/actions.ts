import { createAsyncThunk } from "@reduxjs/toolkit";
import { client } from "./service.ts";

export const fetchAccounts = createAsyncThunk("api/fetchAccounts", async () =>
  client.get("accounts"),
);

export const fetchAssets = createAsyncThunk("api/fetchAssets", async () =>
  client.get("assets"),
);
