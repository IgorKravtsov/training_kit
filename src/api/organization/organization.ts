import { GetOrganizationsResponse } from './organization.types'
import { mocked_organizations } from '../MOCKED_DATA/organizations'

export const GetOrganizations = (): Promise<GetOrganizationsResponse> => {
  return Promise.resolve({ organizations: mocked_organizations })
}
