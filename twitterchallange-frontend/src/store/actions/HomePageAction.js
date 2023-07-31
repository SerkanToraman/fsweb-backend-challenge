import axiosWithAuth from "../../endpoints/AxiosAuth";
export const GET_USER_LIST = 'GET_USER_LIST'


export const getUsersActionCreator = () => (dispatch, getState) => {
  //console.log("getState(): ", getState());
  axiosWithAuth.get("/users").then((res) => {
    // bu dispatch Thunk middle ware inden başlar
    dispatch({
      type:GET_USER_LIST,
      payload: res.data,
    });
  });
};

