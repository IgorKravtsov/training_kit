import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Organization } from 'api/organization/organization.types'
import { RootState } from 'redux/store'

interface OrganizationState {
  organization: Organization | null
}

const initialState: OrganizationState = {
  organization: null,
}

const organizationSlice = createSlice({
  name: 'organization',
  initialState,
  reducers: {
    setOrganization(state, action: PayloadAction<Organization>) {
      state.organization = action.payload
    },
  },
})

export const { setOrganization } = organizationSlice.actions
export const organizationReducer = organizationSlice.reducer
export const selectOrganization = (state: RootState) => state.organization
