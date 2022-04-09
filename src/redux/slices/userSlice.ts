import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Login, Logout, Register } from 'api/auth/auth'
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from 'api/auth/auth.types'
import { AppUser } from 'api/user/user.types'
// import { AppUser, LoginRegisterRequest, LoginRegisterResponse } from 'api/auth/auth.types'
// import { loginUser, logoutUser, registerUser } from 'api/auth/auth'
import { RootState } from 'redux/store'

interface UserSlice {
  user: AppUser | null
  error: any
}

const initialState: UserSlice = {
  user: null,
  error: null,
}

export const register = createAsyncThunk('user/register', async (request: RegisterRequest) => {
  const response: RegisterResponse = await Register(request)
  return response
})

export const login = createAsyncThunk('user/login', async (request: LoginRequest) => {
  const response: LoginResponse = await Login(request)
  return response
})

export const logout = createAsyncThunk('user/logout', async () => {
  return await Logout()
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<AppUser>) {
      state.user = action.payload
    },
    logOutUser(state) {
      state.user = null
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.error
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error
      })
      .addCase(logout.fulfilled, state => {
        state.user = null
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error
      })
  },
})

export const { setUser, logOutUser } = userSlice.actions
export const userReducer = userSlice.reducer
export const selectUser = (state: RootState) => state.user
