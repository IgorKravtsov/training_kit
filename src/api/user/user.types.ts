export enum UserRoles {
  ANONYMOUS = 'anonymous',
  LEARNER = 'learner',
  TRAINER = 'trainer',
  ADMIN = 'admin',
}

export interface AppUser {
  uid: string
  email: string | null
  emailVerified: boolean
  isAnonymous: boolean
  phoneNumber: string | null
  photoURL: string | null
  displayName: string | null
  role: UserRoles
}
