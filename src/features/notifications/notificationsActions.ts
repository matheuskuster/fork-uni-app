import { createAsyncThunk } from '@reduxjs/toolkit';

import { Notification } from './notificationsSlice';

import {
  NotificationsServiceError,
  notificationsService,
} from '@/services/notifications-service';

type GetUnreadNotificationsResponse = Notification[];

export const getUnreadNotifications = createAsyncThunk(
  'notifications/getUnreadNotifications',
  async (_, { rejectWithValue }) => {
    try {
      const response = await notificationsService.get('/v1/my/unread');
      return response.data as GetUnreadNotificationsResponse;
    } catch (error) {
      const typedError = error as NotificationsServiceError;

      if (typedError?.response?.data?.message) {
        return rejectWithValue(typedError.response.data.message);
      } else {
        return rejectWithValue(typedError.message);
      }
    }
  },
);

export const readNotification = createAsyncThunk(
  'notifications/readNotification',
  async (notificationId: string, { rejectWithValue }) => {
    try {
      const response = await notificationsService.post(
        `/v1/${notificationId}/read`,
      );

      return response.data as Notification;
    } catch (error) {
      const typedError = error as NotificationsServiceError;

      if (typedError?.response?.data?.message) {
        return rejectWithValue(typedError.response.data.message);
      } else {
        return rejectWithValue(typedError.message);
      }
    }
  },
);
