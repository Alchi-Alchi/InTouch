import { createSelector } from "reselect";

const getContactsSelector = (state) => {
  return state.contactsPage.contacts;
};
export const getContacts =  createSelector (getContactsSelector, (contacts) => {
  return contacts.filter (contact => true);
});

export const getPageSize = (state) => {
  return state.contactsPage.pageSize;
};
export const getContactsCount = (state) => {
  return state.contactsPage.contactsCount;
};
export const getCurrentPage = (state) => {
  return state.contactsPage.currentPage;
};
export const getIsFetching = (state) => {
  return state.contactsPage.isFetching;
};
export const getFollowingProcess = (state) => {
  return state.contactsPage.followingProcess;
};