import { create } from "zustand";

const userStore = create((set,get) => ({
    user: ""
  }))

  export default userStore