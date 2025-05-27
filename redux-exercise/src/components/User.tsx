import { useSelector, useDispatch } from "react-redux"
import type { AppDispatch } from "../app/store"
import { setFirstname, setLastname, incrementAge } from "./UserSlice"
import { useState, type FormEvent } from "react"

type UserState = {
  userSlice: {
    firstname: string,
    lastname: string,
    age: number
  }
}

const User = () => {
  const firstname = useSelector((state: UserState) => state.userSlice.firstname)
  const lastname = useSelector((state: UserState) => state.userSlice.lastname)
  const age = useSelector((state: UserState) => state.userSlice.age)
  const dispatch = useDispatch<AppDispatch>() // Hook to run reducer actions/methods

  const [firstnameInput, setFirstnameInput] = useState<string>("");
  const [lastnameInput, setLastnameInput] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setFirstname(firstnameInput));
    dispatch(setLastname(lastnameInput));
    setFirstnameInput("");
    setLastnameInput("");
  }

  const handleIncrementAge = () => {
    dispatch(incrementAge())
  }

  if (!firstname || !lastname || age === undefined) {
    return <p>Error loading user state</p>
  }

  return (
    <div>
      <h2>User</h2>
      <h3>{firstname} {lastname}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input 
            type="text" 
            value={firstnameInput}
            onChange={(e) => setFirstnameInput(e.target.value)} />
        </label>
        <label>
          Last Name:
          <input 
            type="text"
            value={lastnameInput}
            onChange={(e) => setLastnameInput(e.target.value)} />
        </label>
        <button type="submit">Update Name</button>
      </form>
      <p>Age: {age}</p>
      <button onClick={handleIncrementAge}>Age + 1</button>
    </div>
  )
}

export default User