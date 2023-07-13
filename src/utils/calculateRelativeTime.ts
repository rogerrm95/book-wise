import dayjs from 'dayjs'

// Plugin //
import relativeTime from 'dayjs/plugin/relativeTime'

// LOCALE //
import ptBr from 'dayjs/locale/pt-br'

dayjs.locale(ptBr)
dayjs.extend(relativeTime)

export function calculateRelativeTime(date: string | number | Date) {
  const now = dayjs(date)

  return now.fromNow()
}
