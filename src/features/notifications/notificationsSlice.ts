import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';

import {
  getUnreadNotifications,
  readNotification,
  savePushToken,
} from './notificationsActions';

type Message = {
  title: string;
  description: string;
};

export type Notification = {
  id: string;
  recipientId: string;
  message: Message;
  seenAt: string | null;
  createdAt: string;
};

type NotificationsState = {
  isFetching: boolean;
  error: string | null;
  count: number;
  token?: string;
};

const notificationAdapter = createEntityAdapter<Notification>({
  selectId: (notification) => notification.id,
  sortComparer: (a, b) => b.createdAt.localeCompare(a.createdAt),
});

const initialState = notificationAdapter.getInitialState<NotificationsState>({
  isFetching: false,
  error: null,
  count: 0,
});

export const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUnreadNotifications.pending, (state) => {
      state.isFetching = true;
    });
    builder.addCase(getUnreadNotifications.fulfilled, (state, action) => {
      notificationAdapter.setAll(state, action.payload ?? []);
      state.isFetching = false;
      state.count = action.payload.length;
    });
    builder.addCase(getUnreadNotifications.rejected, (state) => {
      notificationAdapter.removeAll(state);
      state.isFetching = false;
      state.error = 'Failed to fetch notifications';
    });
    builder.addCase(readNotification.pending, (state, action) => {
      notificationAdapter.updateOne(state, {
        id: action.meta.arg,
        changes: {
          seenAt: new Date().toISOString(),
        },
      });
    });
    builder.addCase(readNotification.fulfilled, (state, action) => {
      state.count = state.count! - 1;

      if (state.count < 0) {
        state.count = 0;
      }
    });
    builder.addCase(savePushToken.fulfilled, (state, action) => {
      state.token = action.payload.token;
    });
    builder.addCase(savePushToken.rejected, (state, action) => {
      state.token = undefined;
      state.error = action.payload as string;
    });
  },
});

export const notificationsSelectors = notificationAdapter.getSelectors();
