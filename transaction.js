class Transaction {

  constructor(driverLicenseNumber, violationDate, vioationType) {
    this.driverLicenseNumber = driverLicenseNumber
    this.violationDate = violationDate 
    this.vioationType = vioationType
    this.noOfViolation = 1
    this.isDriverLicenseSuspensed = false
  }

}
module.exports = Transaction