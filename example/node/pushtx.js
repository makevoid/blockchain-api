const { pushTx } = require('blockchain-api-basic')
// const { pushTx } = require('../../')

const txRaw = "01000000013e733fe5e70c2029016fa41e78d6736717ce6f57cc1864a37a4a2853f172df0e020000006b483045022100ab54f9213ef45be88312650827abac37e3447dccd7528d3cbf111d1119c2e355022021378b1a0271148c2e9c52036f630a43da43a0d1b0c3692f6a1f40bd2e29325c012102a71da25bda25ef137b1347c4454dedaf5eb59e7b28797624336e1eee4133f870ffffffff02e8030000000000001976a914338d00956c970b9a2c69397085bf596dda39816f88ac0000000000000000066a047465737400000000"

;(async () => {
  const resp = await pushTx(txRaw)
  console.log("resp:", resp)
})()
