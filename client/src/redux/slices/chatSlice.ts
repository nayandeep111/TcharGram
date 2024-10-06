import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ChatState {
  onlineUsers: string[]; // Store user IDs as strings
}

const initialState: ChatState = {
  onlineUsers: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setOnlineUsers: (state, action: PayloadAction<string[]>) => {
      state.onlineUsers = action.payload;
    }
  }
});

export const { setOnlineUsers } = chatSlice.actions;
export default chatSlice.reducer;