import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Login, Logout, Register } from 'api/auth/auth'
import { LoginRequest, RegisterRequest } from 'api/auth/types'
import { AppUser, PublicAppUserDto } from 'api/user/types'
import { ApiKnownError } from 'api/_config'
import { RootState } from 'redux/store'

interface UserSlice {
  user: AppUser | null
  error: any
  learnerList: PublicAppUserDto[] | null
}

const initialState: UserSlice = {
  user: null,
  error: null,
  learnerList: null,
}

export const register = createAsyncThunk<
  AppUser,
  RegisterRequest,
  { rejectValue: ApiKnownError }
>('user/register', async (request) => {
  return await Register(request)
})

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
    setLearnerList(state, action: PayloadAction<PublicAppUserDto[] | null>) {
      state.learnerList = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload
      })
      .addCase(register.rejected, (state, action) => {
        console.log(action)

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

export const { setUser, logOutUser, setError, setLearnerList } =
  userSlice.actions
export const userReducer = userSlice.reducer
export const selectUser = (state: RootState) => state.user
