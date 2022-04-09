import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Login } from 'api/auth/auth'
import { LoginRequest, LoginResponse } from 'api/auth/auth.types'
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

// export const register = createAsyncThunk('user/register', async ({ email, password }: LoginRegisterRequest) => {
//   const response: AppUser = await registerUser(email, password)
//   return response
// })

export const login = createAsyncThunk('user/login', async (request: LoginRequest) => {
  const response: LoginResponse = await Login(request)
  return response
})

// export const logout = createAsyncThunk('user/logout', async () => {
//   return await logoutUser()
// })

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
      // .addCase(register.fulfilled, (state, action: PayloadAction<AppUser>) => {
      //   state.user = action.payload
      // })
      // .addCase(register.rejected, (state, action) => {
      //   state.error = action.error
      // })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user
      })
      .addCase(login.rejected, (state, action) => {
        state.error = action.error
      })
    // .addCase(logout.fulfilled, (state, action) => {
    //   state.user = null
    // })
    // .addCase(logout.rejected, (state, action) => {
    //   state.error = action.error
    // })
  },
})

export const { setUser, logOutUser } = userSlice.actions
export const userReducer = userSlice.reducer
export const selectUser = (state: RootState) => state.user
