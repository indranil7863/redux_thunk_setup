import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create action
export const createUser = createAsyncThunk("createUser", async (data)=>{
  const response = await fetch("https://69d296cf5043d95be972020d.mockapi.io/APIendpoints", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  try {
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
})

export const userDetails = createSlice({
  name: "userDetail",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  extraReducers:{
    [createUser.pending]: (state)=>{
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action)=>{
      state.loading = false;
      state.users.push(action.payload);
    },
    [createUser.rejected]: (state, action)=>{
      state.loading = false;
      state.users = action.payload;
    }
  }
});

export default userDetails.reducer;
