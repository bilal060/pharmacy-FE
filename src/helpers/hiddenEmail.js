export const hiddenEmail = (email) => {
  var hiddenEmail = '';
  for (let i = 0; i < email.length; i++) {
    if (i > 2 && i < email.indexOf('@')) {
      hiddenEmail += '*';
    } else {
      hiddenEmail += email[i];
    }
  }
  return hiddenEmail;
};
