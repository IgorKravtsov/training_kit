import { GetOrganizationByEmailRequest, GetOrganizationByEmailResponse, Organization } from 'api/organization/organization.types'

export const mocked_organizations: Organization[] = [
  {
    id: 1,
    title: 'Karate',
  },
  {
    id: 2,
    title: 'Box',
  },
  {
    id: 3,
    title: 'Running',
  },
  {
    id: 4,
    title: 'Swimming',
  },
]

export const getOrganizationByEmail = ({ email }: GetOrganizationByEmailRequest) => {
  switch (email) {
    case 'superletsplay7@gmail.com':
      return { organizations: mocked_organizations }

    case 'test@test.com':
      return { organizations: mocked_organizations }

    default:
      throw new Error('Неверный email')
  }
}
