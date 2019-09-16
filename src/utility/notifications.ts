import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

let token = '';

export const registerForPushNotificationsAsync = async () => {
  if (Constants.isDevice) {
    const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }
};

export const sendPushNotification = async (title: string, body: string, data?: object) => {
  const message = {
    data,
    body,
    title,
    to: token,
    sound: 'default'
  };
  // tslint:disable-next-line no-any
  const res: any = await fetch('https://exp.host/--/api/v2/push/send', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(message)
  });
  const resData = res._bodyInit;
  console.log(`Status & Response ID-> ${JSON.stringify(resData)}`);
};
