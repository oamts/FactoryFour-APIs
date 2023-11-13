import { AnyAction, createAsyncThunk, ThunkDispatch } from "@reduxjs/toolkit";
import { client } from "./services.ts";
import { Dispatch } from "react";
import { ApiState } from "./reducers.ts";

export const fetchAccounts = createAsyncThunk("api/fetchAccounts", async () =>
  client.get("accounts"),
);

export const fetchAssets = createAsyncThunk("api/fetchAssets", async () =>
  client.get("assets"),
);

export const fetchCustomers = createAsyncThunk("api/fetchCustomers", async () =>
  client.get("customers"),
);

export const fetchDatapoints = createAsyncThunk(
  "api/fetchDatapoints",
  async () => client.get("datapoints"),
);

export const fetchDevices = createAsyncThunk("api/fetchDevices", async () =>
  client.get("devices"),
);

export const fetchDocuments = createAsyncThunk("api/fetchDocuments", async () =>
  client.get("documents"),
);

export const fetchForms = createAsyncThunk("api/fetchForms", async () =>
  client.get("forms"),
);

export const fetchInvites = createAsyncThunk("api/fetchInvites", async () =>
  client.get("invites"),
);

export const fetchMedia = createAsyncThunk("api/fetchMedia", async () =>
  client.get("media"),
);

export const fetchMessages = createAsyncThunk("api/fetchMessages", async () =>
  client.get("messages"),
);

export const fetchNamespaces = createAsyncThunk(
  "api/fetchNamespaces",
  async () => client.get("namespaces"),
);

export const fetchOrders = createAsyncThunk("api/fetchOrders", async () =>
  client.get("orders"),
);

export const fetchPatients = createAsyncThunk("api/fetchPatients", async () =>
  client.get("patients"),
);

export const fetchRelationships = createAsyncThunk(
  "api/fetchRelationships",
  async () => client.get("relationships"),
);

export const fetchRules = createAsyncThunk("api/fetchRules", async () =>
  client.get("rules"),
);

export const fetchTemplates = createAsyncThunk("api/fetchTemplates", async () =>
  client.get("templates"),
);

export const fetchUsers = createAsyncThunk("api/fetchUsers", async () =>
  client.get("users"),
);

export const fetchWorkflows = createAsyncThunk("api/fetchWorkflows", async () =>
  client.get("workflows"),
);

export const apiFetch = [
  fetchAccounts(),
  fetchAssets(),
  fetchCustomers(),
  fetchDatapoints(),
  fetchDevices(),
  fetchDocuments(),
  fetchForms(),
  fetchInvites(),
  fetchMedia(),
  fetchMessages(),
  fetchNamespaces(),
  fetchOrders(),
  fetchPatients(),
  fetchRelationships(),
  fetchRules(),
  fetchTemplates(),
  fetchUsers(),
  fetchWorkflows(),
];
export const mapDispatchToProps = (
  dispatch: ThunkDispatch<{ api: ApiState }, undefined, AnyAction> &
    Dispatch<AnyAction>,
) => {
  apiFetch.map((action) => dispatch(action));
};
