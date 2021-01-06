
const logMock = (outputs) => {
  return (message) => outputs.push(message)
}

module.exports = {
  logMock
}