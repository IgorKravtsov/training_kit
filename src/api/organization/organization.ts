import { getOrganizationByEmail, mocked_organizations } from '../MOCKED_DATA/organizations'
import { GetOrganizationByEmailRequest, GetOrganizationByEmailResponse, GetOrganizationsResponse } from './types'

export const GetOrganizations = (): Promise<GetOrganizationsResponse> => {
  return Promise.resolve({ organizations: mocked_organizations })
}

export const GetOrganizationByEmail = (request: GetOrganizationByEmailRequest): Promise<GetOrganizationByEmailResponse> => {
  return Promise.resolve(getOrganizationByEmail(request))
}
