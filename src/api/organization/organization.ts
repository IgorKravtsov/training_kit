import {
  getOrganizationByEmail,
  mocked_organizations,
} from '../MOCKED_DATA/organizations'
import {
  GetOrganizationsByEmailRequest,
  GetOrganizationsByEmailResponse,
  GetOrganizationsResponse,
} from './types'
// import axios from 'axios'
import { API_HOST } from '../api.constants'
import { $api } from '../_config'

export const GetOrganizations = async (): Promise<GetOrganizationsResponse> => {
  // return Promise.resolve({ organizations: mocked_organizations })
  const { data } = await $api.get<GetOrganizationsResponse>(
    'organization/get-organizations',
  )
  return data
}

export const GetOrganizationsByEmail = async (
  request: GetOrganizationsByEmailRequest,
): Promise<GetOrganizationsByEmailResponse> => {
  const { data } = await $api.post<GetOrganizationsByEmailResponse>(
    'organization/get-organization-by-email',
    request,
  )
  return data
  // return Promise.resolve(getOrganizationByEmail(request))
}
