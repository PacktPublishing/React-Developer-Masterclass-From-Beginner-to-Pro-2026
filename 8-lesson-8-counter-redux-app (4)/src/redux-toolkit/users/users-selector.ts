import { createSelector } from "reselect";
import { type RootState } from "../store";

// Base selector
const selectUsersState = (state: RootState) => state.users;

export const selectAllUsers = createSelector(
  [selectUsersState],
  (usersState) => usersState.items
);

export const selectActiveUsers = createSelector([selectAllUsers], (users) => {
  console.log("🔄 Recomputing selectActiveUsers...");
  return users.filter((u) => u.isActive);
});

export const selectInactiveUsers = createSelector([selectAllUsers], (users) => {
  console.log("🔄 Recomputing selectInactiveUsers...");
  return users.filter((u) => !u.isActive);
});
