export const formatPhoneNumber = (phoneNumber: number): string => {
  const phoneNumberStr = phoneNumber.toString();
  if (phoneNumberStr.length === 8) {
    return `${phoneNumberStr.slice(0, 4)}-${phoneNumberStr.slice(4)}`;
  }
  return phoneNumberStr;
};
