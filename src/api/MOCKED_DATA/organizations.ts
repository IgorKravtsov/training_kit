import { GetOrganizationByEmailRequest, GetOrganizationByEmailResponse, Organization } from 'api/organization/organization.types'

export const mocked_organizations: Organization[] = [
  {
    id: 1,
    title: 'Karate',
    logo: 'https://i.pinimg.com/originals/44/c3/b2/44c3b2d58b9c3a94f4ea3f1aa264e249.jpg',
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
      return { organizations: [mocked_organizations[0], mocked_organizations[1]] }

    default:
      throw new Error('У такой эл. почты нет организаций')
  }
}
