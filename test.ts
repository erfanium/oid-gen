import { oid, oidHex, getDate } from './oid-gen'

console.log(oid())

const hex = oidHex()
console.log(hex)

console.log(getDate(hex))
console.log(new Date())
