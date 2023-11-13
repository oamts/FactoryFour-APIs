import { createSlice } from "@reduxjs/toolkit";
import { routes, typeRoutes } from "../../const.ts";
import {
  fetchAccounts,
  fetchAssets,
  fetchCustomers,
  fetchDatapoints,
  fetchDevices,
  fetchDocuments,
  fetchForms,
  fetchInvites,
  fetchMedia,
  fetchMessages,
  fetchNamespaces,
  fetchOrders,
  fetchPatients,
  fetchRelationships,
  fetchRules,
  fetchTemplates,
  fetchUsers,
  fetchWorkflows,
} from "./actions.ts";

export interface Info {
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

export type ApiState = {
  [key in typeRoutes]: Info;
};

const initialState: ApiState = {
  ...routes.reduce<ApiState>((acc, elem) => {
    acc[elem] = initialInfo;
    return acc;
  }, {} as ApiState),
};

const ApiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      //accounts
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
      //assets
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
      })
      //customers
      .addCase(fetchCustomers.pending, (state) => {
        state.customers.status = "loading";
        state.customers.data = initialData;
      })
      .addCase(fetchCustomers.fulfilled, (state, { payload }) => {
        state.customers.status = "succeeded";
        state.customers.data = payload.data;
      })
      .addCase(fetchCustomers.rejected, (state) => {
        state.customers.status = "failed";
        state.customers.data = initialData;
      })
      //datapoints
      .addCase(fetchDatapoints.pending, (state) => {
        state.datapoints.status = "loading";
        state.datapoints.data = initialData;
      })
      .addCase(fetchDatapoints.fulfilled, (state, { payload }) => {
        state.datapoints.status = "succeeded";
        state.datapoints.data = payload.data;
      })
      .addCase(fetchDatapoints.rejected, (state) => {
        state.datapoints.status = "failed";
        state.datapoints.data = initialData;
      })
      //devices
      .addCase(fetchDevices.pending, (state) => {
        state.devices.status = "loading";
        state.devices.data = initialData;
      })
      .addCase(fetchDevices.fulfilled, (state, { payload }) => {
        state.devices.status = "succeeded";
        state.devices.data = payload.data;
      })
      .addCase(fetchDevices.rejected, (state) => {
        state.devices.status = "failed";
        state.devices.data = initialData;
      })
      //documents
      .addCase(fetchDocuments.pending, (state) => {
        state.documents.status = "loading";
        state.documents.data = initialData;
      })
      .addCase(fetchDocuments.fulfilled, (state, { payload }) => {
        state.documents.status = "succeeded";
        state.documents.data = payload.data;
      })
      .addCase(fetchDocuments.rejected, (state) => {
        state.documents.status = "failed";
        state.documents.data = initialData;
      })
      //forms
      .addCase(fetchForms.pending, (state) => {
        state.forms.status = "loading";
        state.forms.data = initialData;
      })
      .addCase(fetchForms.fulfilled, (state, { payload }) => {
        state.forms.status = "succeeded";
        state.forms.data = payload.data;
      })
      .addCase(fetchForms.rejected, (state) => {
        state.forms.status = "failed";
        state.forms.data = initialData;
      })
      //invites
      .addCase(fetchInvites.pending, (state) => {
        state.invites.status = "loading";
        state.invites.data = initialData;
      })
      .addCase(fetchInvites.fulfilled, (state, { payload }) => {
        state.invites.status = "succeeded";
        state.invites.data = payload.data;
      })
      .addCase(fetchInvites.rejected, (state) => {
        state.invites.status = "failed";
        state.invites.data = initialData;
      })
      //media
      .addCase(fetchMedia.pending, (state) => {
        state.media.status = "loading";
        state.media.data = initialData;
      })
      .addCase(fetchMedia.fulfilled, (state, { payload }) => {
        state.media.status = "succeeded";
        state.media.data = payload.data;
      })
      .addCase(fetchMedia.rejected, (state) => {
        state.media.status = "failed";
        state.media.data = initialData;
      })
      //messages
      .addCase(fetchMessages.pending, (state) => {
        state.messages.status = "loading";
        state.messages.data = initialData;
      })
      .addCase(fetchMessages.fulfilled, (state, { payload }) => {
        state.messages.status = "succeeded";
        state.messages.data = payload.data;
      })
      .addCase(fetchMessages.rejected, (state) => {
        state.messages.status = "failed";
        state.messages.data = initialData;
      })
      //namespaces
      .addCase(fetchNamespaces.pending, (state) => {
        state.namespaces.status = "loading";
        state.namespaces.data = initialData;
      })
      .addCase(fetchNamespaces.fulfilled, (state, { payload }) => {
        state.namespaces.status = "succeeded";
        state.namespaces.data = payload.data;
      })
      .addCase(fetchNamespaces.rejected, (state) => {
        state.namespaces.status = "failed";
        state.namespaces.data = initialData;
      })
      //orders
      .addCase(fetchOrders.pending, (state) => {
        state.orders.status = "loading";
        state.orders.data = initialData;
      })
      .addCase(fetchOrders.fulfilled, (state, { payload }) => {
        state.orders.status = "succeeded";
        state.orders.data = payload.data;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.orders.status = "failed";
        state.orders.data = initialData;
      })
      //patients
      .addCase(fetchPatients.pending, (state) => {
        state.patients.status = "loading";
        state.patients.data = initialData;
      })
      .addCase(fetchPatients.fulfilled, (state, { payload }) => {
        state.patients.status = "succeeded";
        state.patients.data = payload.data;
      })
      .addCase(fetchPatients.rejected, (state) => {
        state.patients.status = "failed";
        state.patients.data = initialData;
      })
      //relationships
      .addCase(fetchRelationships.pending, (state) => {
        state.relationships.status = "loading";
        state.relationships.data = initialData;
      })
      .addCase(fetchRelationships.fulfilled, (state, { payload }) => {
        state.relationships.status = "succeeded";
        state.relationships.data = payload.data;
      })
      .addCase(fetchRelationships.rejected, (state) => {
        state.relationships.status = "failed";
        state.relationships.data = initialData;
      })
      //rules
      .addCase(fetchRules.pending, (state) => {
        state.rules.status = "loading";
        state.rules.data = initialData;
      })
      .addCase(fetchRules.fulfilled, (state, { payload }) => {
        state.rules.status = "succeeded";
        state.rules.data = payload.data;
      })
      .addCase(fetchRules.rejected, (state) => {
        state.rules.status = "failed";
        state.rules.data = initialData;
      })
      //templates
      .addCase(fetchTemplates.pending, (state) => {
        state.templates.status = "loading";
        state.templates.data = initialData;
      })
      .addCase(fetchTemplates.fulfilled, (state, { payload }) => {
        state.templates.status = "succeeded";
        state.templates.data = payload.data;
      })
      .addCase(fetchTemplates.rejected, (state) => {
        state.templates.status = "failed";
        state.templates.data = initialData;
      })
      //users
      .addCase(fetchUsers.pending, (state) => {
        state.users.status = "loading";
        state.users.data = initialData;
      })
      .addCase(fetchUsers.fulfilled, (state, { payload }) => {
        state.users.status = "succeeded";
        state.users.data = payload.data;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.users.status = "failed";
        state.users.data = initialData;
      })
      //workflows
      .addCase(fetchWorkflows.pending, (state) => {
        state.workflows.status = "loading";
        state.workflows.data = initialData;
      })
      .addCase(fetchWorkflows.fulfilled, (state, { payload }) => {
        state.workflows.status = "succeeded";
        state.workflows.data = payload.data;
      })
      .addCase(fetchWorkflows.rejected, (state) => {
        state.workflows.status = "failed";
        state.workflows.data = initialData;
      });
  },
});

export default ApiSlice.reducer;
