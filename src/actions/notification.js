import { actions as notifActions } from 're-notif';
const { notifSend } = notifActions;

export function sendSuccessNofif(msg) {
  return dispatch => dispatch(notifSend({
    message: msg, kind: 'success', dismissAfter: 2000
  }));
}

export function sendFailureNofif(msg) {
  return dispatch => dispatch(notifSend({
    message: msg, kind: 'danger', dismissAfter: 2000
  }));
}
