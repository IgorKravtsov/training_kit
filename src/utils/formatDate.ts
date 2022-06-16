import { format, Locale } from 'date-fns'

export const formatDate = (
  locale: Locale,
  date?: Date | string,
  formatString = 'dd MMMM yyyy',
): string => {
  if (!date) return ''
  if (typeof date === 'string') date = new Date(date)
  return format(date, formatString, { locale })
}

export const formatTime = (
  locale: Locale,
  date?: Date | string,
  formatString = 'H:mm',
): string => {
  if (!date) return ''

  if (typeof date === 'string') date = new Date(date)
  return format(date, formatString, { locale })
}
