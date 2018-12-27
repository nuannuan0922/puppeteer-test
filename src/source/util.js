const cookieStrToObject = (cookie) => {
  let arr = cookie.split('; ')
  let obj = {}
  arr.forEach(item => {
    let index = item.indexOf('=')
    obj[item.substr(0, index)] = item.substr(index +1)
  });
  return obj
}

module.exports = {
  cookieStrToObject
}