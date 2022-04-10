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
