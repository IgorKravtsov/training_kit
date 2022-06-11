import { format } from 'date-fns'
import { ru } from 'date-fns/locale'

export const formatDate = (
  date?: Date | string,
  formatString = 'dd MMMM yyyy',
): string => {
  if (!date) return ''
  if (typeof date === 'string') date = new Date(date)
  return format(date, formatString, { locale: ru })
}

export const formatTime = (
  date?: Date | string,
  formatString = 'H:mm',
): string => {
  if (!date) return ''
  if (typeof date === 'string') date = new Date(date)
  return format(date, formatString, { locale: ru })
}
