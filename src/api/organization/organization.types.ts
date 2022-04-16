import { Id } from 'shared-files/types/appId.type'

export type Organization = {
  id: Id
  title: string
  logo?: string
}

export interface GetOrganizationsResponse {
  organizations: Organization[]
}

export interface GetOrganizationByEmailRequest {
  email: string
}

export interface GetOrganizationByEmailResponse {
  organizations: Organization[]
}
