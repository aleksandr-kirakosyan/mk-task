import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GroupItem from './GroupItem';
import { addGroup, deleteGroup } from '../actions/groupActions';
import "./GroupList.css";

const GroupList = () => {
  const groups = useSelector((state) => state.groups);
  const dispatch = useDispatch();

  const handleAddGroup = () => {
    dispatch(addGroup({
      id: Math.floor(1000 + Math.random() * 9000),
      name: 'New Group',
      subgroups: [], 
      parent_id: null,
    }));    
    
  };

  const topLevelGroups = groups.filter((group) => group.parent_id === null);

  return (
    <div className='GroupList'>
      <button className='GroupListAdd' onClick={handleAddGroup}>
        Add Group (*at the bottom)
      </button>
      <ul className='GroupListAll'>
      {topLevelGroups.map((group) => {
        return (
          <GroupItem
            key={group.id}
            group={group}
            onDelete={() => dispatch(deleteGroup(group.id))}
          />
        );
      })}

      </ul>
    </div>
  );
};

export default GroupList;
