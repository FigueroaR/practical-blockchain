
class Transaction {
  constructor(driverLicenseNumber, violationDate, violationType) {
    this.driverLicenseNumber = driverLicenseNumber;
    this.violationDate = violationDate;
    this.violationType = violationType;
    this.noOfViolation = 1;
    this.isDriverLicenseSuspended = false;
  }
}

module.exports = Transaction
