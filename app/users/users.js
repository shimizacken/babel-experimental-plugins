export const getUserZip = (user) => user?.address?.zip;

export const isUserRent = (user) => user?.address?.isRent ?? 'not rent';