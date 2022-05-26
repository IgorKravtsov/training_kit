import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Login, Logout, Register } from 'api/auth/auth'
import { LoginRequest, RegisterRequest } from 'api/auth/types'
import { AppUser } from 'api/user/types'
import { RootState } from 'redux/store'

interface UserSlice {
  user: AppUser | null
  error: any
}

const initialState: UserSlice = {
  user: null,
  error: null,
}

export const register = createAsyncThunk(
  'user/register',
  async (request: RegisterRequest) => {
    return await Register(request)
  },
)

export const login = createAsyncThunk<AppUser, LoginRequest>(
  'user/login',
  async (request: LoginRequest) => {
    return await Login(request)
  },
)

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
    setError(state, action: PayloadAction<any>) {
      state.error = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user
      })
      .addCase(register.rejected, (state, action) => {
        state.error = action.error
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null
      })
      .addCase(logout.rejected, (state, action) => {
        state.error = action.error
      })
  },
})

export const { setUser, logOutUser, setError } = userSlice.actions
export const userReducer = userSlice.reducer
export const selectUser = (state: RootState) => state.user
