// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)




function humanReadable (seconds) {
  let h='00',m='00',s='00';
  
    if((seconds / 60 ) >= 1){
      s = seconds % 60
      m = Math.floor(seconds / 60)
      if( m >= 60){
        h = Math.floor(m / 60)
        m = m % 60
      }
    }else { s = seconds}
  
  
  if(String(m).length < 2) m = '0'+m
  if(String(s).length < 2) s = '0'+s
  if(String(h).length < 2) h = '0'+h
  
  
  return h +":"+ m + ":" + s;
}
console.log(humanReadable(3600))