export const checkCanVisit = (trainingDate: Date | string): boolean | void => {
  let tDate = trainingDate
  if (!tDate) return
  if (typeof tDate === 'string') {
    tDate = new Date(trainingDate)
  }

  const THIRTY_MINUTES = 1000 * 60 * 30
  const startVisitTime = new Date(tDate.getDate() - THIRTY_MINUTES)
  const endVisitTime = new Date(tDate.getDate() + THIRTY_MINUTES)

  return startVisitTime >= endVisitTime
}

// export const lessThanOneHourAgo = (date: Date | string): boolean => {
//   const HOUR = 1000 * 60 * 60
//   const anHourAgo = new Date(Date.now() - HOUR)

//   console.log(anHourAgo)

//   return date > anHourAgo
// }
