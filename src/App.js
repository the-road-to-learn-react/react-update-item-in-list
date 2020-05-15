import React from 'react';

const initialList = [
  {
    id: 'a',
    task: 'Learn React',
    isComplete: false,
  },
  {
    id: 'b',
    task: 'Learn GraphQL',
    isComplete: true,
  },
];

// ** with useState ** //

// const App = () => {
//   const [list, setList] = React.useState(initialList);

//   function handleToggleComplete(id) {
//     const newList = list.map((item) => {
//       if (item.id === id) {
//         const updatedItem = {
//           ...item,
//           isComplete: !item.isComplete,
//         };

//         return updatedItem;
//       }

//       return item;
//     });

//     setList(newList);
//   }

//   return <List list={list} onToggleComplete={handleToggleComplete} />;
// };

// const List = ({ list, onToggleComplete }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item.id}>
//         <span
//           style={{
//             textDecoration: item.isComplete ? 'line-through' : 'none',
//           }}
//         >
//           {item.task}
//         </span>
//         <button
//           type="button"
//           onClick={() => onToggleComplete(item.id)}
//         >
//           {item.isComplete ? 'Undo' : 'Done'}
//         </button>
//       </li>
//     ))}
//   </ul>
// );

// ** with useReducer ** //

// const listReducer = (state, action) => {
//   switch (action.type) {
//     case 'UPDATE_ITEM':
//       return state.map((item) => {
//         if (item.id === action.id) {
//           const updatedItem = {
//             ...item,
//             isComplete: !item.isComplete,
//           };

//           return updatedItem;
//         }

//         return item;
//       });
//     default:
//       throw new Error();
//   }
// };

// const App = () => {
//   const [list, dispatchList] = React.useReducer(
//     listReducer,
//     initialList
//   );

//   function handleToggleComplete(id) {
//     dispatchList({ type: 'UPDATE_ITEM', id });
//   }

//   return <List list={list} onToggleComplete={handleToggleComplete} />;
// };

// const List = ({ list, onToggleComplete }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item.id}>
//         <span
//           style={{
//             textDecoration: item.isComplete ? 'line-through' : 'none',
//           }}
//         >
//           {item.task}
//         </span>
//         <button
//           type="button"
//           onClick={() => onToggleComplete(item.id)}
//         >
//           {item.isComplete ? 'Undo' : 'Done'}
//         </button>
//       </li>
//     ))}
//   </ul>
// );

// ** with useState and complex object ** //

// const App = () => {
//   const [listData, setListData] = React.useState({
//     list: initialList,
//     isShowList: true,
//   });

//   function handleToggleComplete(id) {
//     const newList = listData.list.map((item) => {
//       if (item.id === id) {
//         const updatedItem = {
//           ...item,
//           isComplete: !item.isComplete,
//         };

//         return updatedItem;
//       }

//       return item;
//     });

//     setListData({ ...listData, list: newList });
//   }

//   if (!listData.isShowList) {
//     return null;
//   }

//   return (
//     <List
//       list={listData.list}
//       onToggleComplete={handleToggleComplete}
//     />
//   );
// };

// const List = ({ list, onToggleComplete }) => (
//   <ul>
//     {list.map((item) => (
//       <li key={item.id}>
//         <span
//           style={{
//             textDecoration: item.isComplete ? 'line-through' : 'none',
//           }}
//         >
//           {item.task}
//         </span>
//         <button
//           type="button"
//           onClick={() => onToggleComplete(item.id)}
//         >
//           {item.isComplete ? 'Undo' : 'Done'}
//         </button>
//       </li>
//     ))}
//   </ul>
// );

// ** with useReducer and complex object ** //

const listReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_ITEM': {
      const newList = state.list.map((item) => {
        if (item.id === action.id) {
          const updatedItem = {
            ...item,
            isComplete: !item.isComplete,
          };

          return updatedItem;
        }

        return item;
      });

      return { ...state, list: newList };
    }
    default:
      throw new Error();
  }
};

const App = () => {
  const [listData, dispatchListData] = React.useReducer(listReducer, {
    list: initialList,
    isShowList: true,
  });

  function handleToggleComplete(id) {
    dispatchListData({ type: 'UPDATE_ITEM', id });
  }

  if (!listData.isShowList) {
    return null;
  }

  return (
    <List
      list={listData.list}
      onToggleComplete={handleToggleComplete}
    />
  );
};

const List = ({ list, onToggleComplete }) => (
  <ul>
    {list.map((item) => (
      <li key={item.id}>
        <span
          style={{
            textDecoration: item.isComplete ? 'line-through' : 'none',
          }}
        >
          {item.task}
        </span>
        <button
          type="button"
          onClick={() => onToggleComplete(item.id)}
        >
          {item.isComplete ? 'Undo' : 'Done'}
        </button>
      </li>
    ))}
  </ul>
);

export default App;
