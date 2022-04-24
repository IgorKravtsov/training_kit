import { Organization } from './organization.type'

export interface GetOrganizationByEmailRequest {
  email: string
}

export interface GetOrganizationByEmailResponse {
  organizations: Organization[]
}
