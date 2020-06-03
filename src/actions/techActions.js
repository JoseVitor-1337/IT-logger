export const getTechs = () => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: "GET_TECHS",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "TECHS_ERROR",
      payload: error.response.statusText,
    });
  }
};

export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();

    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech), // Format JSON
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
    dispatch({
      type: "ADD_TECH",
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "TECHS_ERROR",
      payload: error.response.statusText,
    });
  }
};

export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();

    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: "DELETE_TECH",
      payload: id,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "TECHS_ERROR",
      payload: error.response.statusText,
    });
  }
};

// Set a loading when the data don´t appears
export const setLoading = () => {
  return {
    type: "SET_LOADING",
  };
};
