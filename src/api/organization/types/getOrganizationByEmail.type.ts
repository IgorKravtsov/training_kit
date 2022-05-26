import { Organization } from './organization.type'

export interface GetOrganizationsByEmailRequest {
  email: string
}

export interface GetOrganizationsByEmailResponse {
  organizations: Organization[]
}
