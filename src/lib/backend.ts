// import axios from 'axios'
import { Tenancy } from '../types/global'
import { testdata } from './testdata'

type AddressParams = {
  query: string
  success: (data: Tenancy[]) => void
  fail: (err: Error) => void
}

export const getAddressInfoFromDawa = ({ query, success, fail }: AddressParams): void => {
  success(testdata.data)
  if (query === 'error') {
    fail(new Error('apa'))
  }
}

// export const getAddressInfoFromDawa = ({ query, success, fail }: AddressParams): void => {
//   const remote_url = 'https://api.dataforsyningen.dk/adgangsadresser/autocomplete?q='
//   axios
//     .get(remote_url + escape(query))
//     .then((response) => {
//       if (response.status === 200) {
//         success(response.data)
//       }
//     })
//     .catch((err) => {
//       fail(err)
//     })
// }
