import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editGroup, deleteGroup, addGroup } from '../actions/groupActions';
import "./GroupItem.css"

const GroupItem = ({ group, onDelete }) => {
  const [editing, setEditing] = useState(false);
  const [groupName, setGroupName] = useState(group.name);
  const [groupId, setGroupId] = useState(group.id);
  const [showSubgroups, setShowSubgroups] = useState(false);
  const dispatch = useDispatch();
  const groups = useSelector(state => state.groups);

  const handleEdit = () => {
    if (editing) {
      dispatch(editGroup({ ...group, name: groupName }));
    }
    setEditing(!editing);
  };

  const toggleSubgroups = () => {
    setShowSubgroups(!showSubgroups);
  };

  const handleAddSubgroup = () => {
    const newSubgroup = {
      id: Math.floor(1000 + Math.random() * 9000),
      name: 'New Subgroup',
      parent_id: group.id, 
    };
    dispatch(addGroup(newSubgroup));
  };

  return (
    <>
      <li className='GroupItem'>
        <div className='GroupItemTitleNSub'>
          <button onClick={handleAddSubgroup}>Add subgroups</button>
          <button onClick={toggleSubgroups}>Open subgroups</button>
          {editing ? (
            <>
              <input
                type="text"
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
              />
            </>
          ) : (
            <div className='GroupItemTitle'>
              <span>{group.id}</span>
              <span>{group.name}</span>
            </div>
          )}
        </div>
        <div className='GroupItemButtons'>
          <button onClick={handleEdit}>{editing ? 'Save' : 'Edit'}</button>
          <button onClick={onDelete}>Delete</button>
        </div>
      </li>
      <div>
        {showSubgroups && (
          <div className='SubgroupList'>
            {groups
              .filter(subgroup => subgroup.parent_id === group.id)
              .map(subgroup => (
                <GroupItem
                  key={subgroup.id}
                  group={subgroup}
                  onDelete={() => dispatch(deleteGroup(subgroup.id))}
                />
              ))}
          </div>
        )}
      </div>
    </>
  );
};

export default GroupItem;
