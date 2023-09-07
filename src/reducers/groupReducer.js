const initialState = {
  groups: [
    {
      "id": 101,
      "name": "Shirts",
      "parent_id": null,
      "substring": []
    },
    {
      "id": 102,
      "name": "Scarves",
      "parent_id": null
    },
    {
      "id": 103,
      "name": "Jeans",
      "parent_id": null
    },
    {
      "id": 1011,
      "name": "Long Sleeve",
      "parent_id": 101
    },
    {
      "id": 1012,
      "name": "Short Sleeve",
      "parent_id": 1011
    },
    {
      "id": 1031,
      "name": "Wide leg",
      "parent_id": 103
    },
    {
      "id": 10121,
      "name": "Graphic tee",
      "parent_id": 1012
    },
    {
      "id": 10122,
      "name": "Button down",
      "parent_id": 1012
    }
  ]

};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_GROUP':
      return {
        ...state,
        groups: [...state.groups, action.payload],
      };
    case 'EDIT_GROUP':
      return {
        ...state,
        groups: state.groups.map((group) =>
          group.id === action.payload.id ? action.payload : group
        ),
      };
    case 'DELETE_GROUP':
      const updatedGroups = state.groups.filter(
        (group) => group.id !== action.payload
      );
      return {
        ...state,
        groups: updatedGroups,
      };
    default:
      return state;
  }
};

export default groupReducer;
