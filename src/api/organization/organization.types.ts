// export interface GetOrganizationRequest {

// }

export type Organization = {
  id: number | string
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
