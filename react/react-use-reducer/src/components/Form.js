import React, { useReducer } from 'react';

const CHANGE_NAME = 'CHANGE_NAME';
const CHANGE_LASTNAME = 'CHANGE_LASTNAME';
const CHANGE_EMAIL = 'CHANGE_EMAIL';

// function reducer(state, action) {
//   switch (action.type) {
//     case CHANGE_NAME:
//       return {
//         ...state,
//         name: action.payload,
//       };
//     case CHANGE_LASTNAME:
//       return {
//         ...state,
//         lastname: action.payload,
//       };
//     case CHANGE_EMAIL:
//       return {
//         ...state,
//         email: action.payload,
//       };
//     default:
//       return state;
//   }
// }

function reducer(prevState, newState) {
  return {
    ...prevState,
    ...newState,
  };
}

const initialState = {
  name: '',
  lastname: '',
  email: '',
};

export function Form() {
  const [state, setState] = useReducer(reducer, initialState);
  // const [name, setName] = useState('');
  // const [lastname, setLastname] = useState('');
  // const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setState({ [name]: value });
  }

  const { name, lastname, email } = state;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        id="name"
        // onChange={(e) => dispatch({ name: CHANGE_NAME, payload: e.target.value })}
        onChange={handleChange}
        value={name}
      />
      <input
        type="text"
        name="lastname"
        id="lastname"
        // onChange={(e) => dispatch({ type: CHANGE_LASTNAME, payload: e.target.value })}
        onChange={handleChange}
        value={lastname}
      />
      <input
        type="text"
        name="email"
        id="email"
        // onChange={(e) => dispatch({ type: CHANGE_EMAIL, payload: e.target.value })}
        onChange={handleChange}
        value={email}
      />
      <button>Submit</button>
    </form>
  )
}
