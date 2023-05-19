import { notification } from "antd";

export const showStatusMessage = (messages, types) => {
  notification.open({
    message: types,
    type: types,
    duration: 3,
    description: messages,
  });
};
