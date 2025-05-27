import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  firstname: string,
  lastname: string,
  age: number
}

const initialState: UserState = {
  firstname: "Julia",
  lastname: "Chu",
  age: 30
}

export const userSlice = createSlice({
 name: "userSlice",
  initialState,
  reducers: {
    setFirstname: (state, action) => {
      state.firstname = action.payload
    },
    setLastname: (state, action) => {
      state.lastname = action.payload
    },
    incrementAge: (state) => {
      state.age += 1
    }
  },
})

export const { setFirstname, setLastname, incrementAge } = userSlice.actions
export default userSlice.reducer