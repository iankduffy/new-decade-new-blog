export const truncate = (str = '', length = 60) => {
  console.log(str)
  if (str.length > length){
    return str.substring(0, length) + '...';
  }
  else {
    return str
  }
}