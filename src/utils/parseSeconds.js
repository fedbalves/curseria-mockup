
const parseSeconds = value => {
  var addZeroBefore = n => n < 10 ? `0${n}` : n
  var secs, minutes, hours
  var parsed_value

  if (value >= 3600) {
    hours = Math.floor(value/3600)
    minutes = Math.floor((value - (hours*3600))/60)
    secs = parseInt(value - (hours*3600) - (minutes*60),0)

    hours = addZeroBefore(hours)
    minutes = addZeroBefore(minutes)
    secs = addZeroBefore(secs)

    parsed_value = `${hours}:${minutes}:${secs}`
  }
  else if (value >= 60) {
    minutes = Math.floor(value/60)
    secs = parseInt(value - Math.floor(minutes*60),0)

    minutes = addZeroBefore(minutes)
    secs = addZeroBefore(secs)

    parsed_value = `00:${minutes}:${secs}`
  }
  else {
    secs = addZeroBefore(value)

    parsed_value = `00:00:${secs}`
  }

  return parsed_value
}

export default parseSeconds
