import axios from "axios";

export const FETCH_SMURF = "Fetch Smurf";
export const GOT_SMURF = "Got Smurf";
export const ADD_SMURF = "New Smurf";
export const SET_ERROR = "Set Error";
export const ERROR = "Error";
export const LOADING = "LOADING";

export const fetchSmurfs = () => (dispatch) => {
	dispatch({ type: LOADING });

	axios
		.get(`http://localhost:3333/smurfs`)
		.then((res) => {
			console.log(res.data);
			dispatch({ type: GOT_SMURF, payload: res.data });
		})
		.catch((err) => {
			dispatch({ type: ERROR, payload: err.message });
		});
};

export const addSmurf = (text) => {
	return { type: ADD_SMURF, payload: text };
};

export const gotError = (text) => {
	return { type: ERROR, text };
};

export const setError = (text) => {
	return { type: SET_ERROR, text };
};
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)*
//3. Add a standard action that allows us to set the value of the error message slice of state.*
