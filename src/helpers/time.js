function timeToText() {
  const date = new Date()
  const hours = date.getHours()
  let time = ''
  if (hours >= 0 && hours < 10) {
    time = 'Pagi'
  } else if (hours >= 10 && hours < 15) {
    time = 'Siang'
  } else if (hours >= 15 && hours < 18) {
    time = 'Sore'
  } else {
    time = 'Malam'
  }
  return time
}

export default timeToText;