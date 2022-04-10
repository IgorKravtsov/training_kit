import { GetOrganizationByEmailRequest, GetOrganizationByEmailResponse, GetOrganizationsResponse } from './organization.types'
import { getOrganizationByEmail, mocked_organizations } from '../MOCKED_DATA/organizations'

export const GetOrganizations = (): Promise<GetOrganizationsResponse> => {
  return Promise.resolve({ organizations: mocked_organizations })
}

export const GetOrganizationByEmail = (request: GetOrganizationByEmailRequest): Promise<GetOrganizationByEmailResponse> => {
  return Promise.resolve(getOrganizationByEmail(request))
}
