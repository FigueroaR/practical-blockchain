// class DrivingRecordSmartContract {
//   apply(transaction, blocks) {
//     // go through all blocks
//     blocks.forEach(function(block){
//       block.transactions.forEach( trans => {
//         if(transaction.driverLicenseNumber == trans.driverLicenseNumber) {
//           console.log("inside smart contract")
//           transaction.noOfViolations += 1

//           if(transaction.noOfViolations > 5) {
//             transaction.isDriverLicenseSuspended = true
//           }

//         }
//       })
//     });
//   }
// }

// module.exports = DrivingRecordSmartContract

class DrivingRecordSmartContract {

  apply(transaction, blocks) {

    // go through all blocks
    blocks.forEach(function(block){

      block.transactions.forEach(function(trans){

        if(transaction.driverLicenseNumber == trans.driverLicenseNumber) {

            console.log("here ===")
            
            transaction.noOfViolations += 1;

            console.log("here ===", transaction.noOfViolations)
          if(transaction.noOfViolations > 5) {
            console.log("x > 5")
            transaction.isDriverLicenseSuspended = true
          }

        }

      })

    })

  }

}

module.exports = DrivingRecordSmartContract