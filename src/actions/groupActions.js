export const addGroup = (group) => ({
  type: 'ADD_GROUP',
  payload: group,
});

export const editGroup = (group) => ({
  type: 'EDIT_GROUP',
  payload: group,
});

export const deleteGroup = (groupId) => ({
  type: 'DELETE_GROUP',
  payload: groupId,
});
