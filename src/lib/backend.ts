// import axios from 'axios'
import { Tenancy } from '../types/global'
import { testdata } from './testdata'

type AddressParams = {
  query: string
  success: (data: Tenancy[]) => void
  fail: (err: Error) => void
}

export const getAddressInfoFromDAWA = ({ query, success, fail }: AddressParams): void => {
  success(testdata.data)
  if (query === 'error') {
    fail(new Error('apa'))
  }
}

// export const getAddressInfoFromDAWA = ({ query, success, fail }: AddressParams): void => {
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

export const getTenanciesFromStorage = async () => {
  return new Promise<Tenancy[]>((resolve, reject) => {
    const tenancies_as_json_string = localStorage.getItem('tenancies') || '[]'
    try {
      const parsed_json = JSON.parse(tenancies_as_json_string)
      // to fake load time
      setTimeout(() => {
        resolve(parsed_json)
      }, 200)
    } catch (error) {
      localStorage.setItem('tenancies', '')
      reject(new Error('Data corrupt, resetting!'))
    }
  })
}

/**
 * @todo ensure unique addresses
 */

export const addTenancyToStorage = async (obj: Tenancy) => {
  return new Promise<Tenancy>((resolve, reject) => {
    const tenancies_as_json_string = localStorage.getItem('tenancies') || '[]'
    try {
      const tenancies = JSON.parse(tenancies_as_json_string)
      tenancies.push(obj)
      localStorage.setItem('tenancies', JSON.stringify(tenancies))
      // to fake load time
      setTimeout(() => {
        resolve(obj)
      }, 600)
    } catch (error) {
      reject(error)
    }
  })
}

export const deleteTenancyFromStorage = async (id: string) => {
  return new Promise<void>((resolve, reject) => {
    const tenancies_as_json_string = localStorage.getItem('tenancies') || '[]'
    try {
      const tenancies = JSON.parse(tenancies_as_json_string)
      const new_tenancies = tenancies.filter((obj: Tenancy) => obj.adgangsadresse.id !== id)
      localStorage.setItem('tenancies', JSON.stringify(new_tenancies))
      // to fake load time
      setTimeout(() => {
        resolve()
      }, 200)
    } catch (error) {
      reject(error)
    }
  })
}

// const temp = [
//   {
//     tekst: 'Randlevvej 8, 8300 Odder',
//     adgangsadresse: {
//       id: '0a3f5094-7659-32b8-e044-0003ba298018',
//       status: 1,
//       darstatus: 3,
//       vejkode: '5911',
//       vejnavn: 'Randlevvej',
//       adresseringsvejnavn: 'Randlevvej',
//       husnr: '8',
//       supplerendebynavn: null,
//       postnr: '8300',
//       postnrnavn: 'Odder',
//       stormodtagerpostnr: null,
//       stormodtagerpostnrnavn: null,
//       kommunekode: '0727',
//       x: 10.15737503,
//       y: 55.97067305,
//       href: 'https://api.dataforsyningen.dk/adgangsadresser/0a3f5094-7659-32b8-e044-0003ba298018',
//     },
//   },
//   {
//     tekst: 'Rentemestervej 7A, 2400 København NV',
//     adgangsadresse: {
//       id: '0a3f507a-e175-32b8-e044-0003ba298018',
//       status: 1,
//       darstatus: 3,
//       vejkode: '5804',
//       vejnavn: 'Rentemestervej',
//       adresseringsvejnavn: 'Rentemestervej',
//       husnr: '7A',
//       supplerendebynavn: null,
//       postnr: '2400',
//       postnrnavn: 'København NV',
//       stormodtagerpostnr: null,
//       stormodtagerpostnrnavn: null,
//       kommunekode: '0101',
//       x: 12.53598846,
//       y: 55.70437954,
//       href: 'https://api.dataforsyningen.dk/adgangsadresser/0a3f507a-e175-32b8-e044-0003ba298018',
//     },
//   },
// ]

// localStorage.setItem('tenancies', JSON.stringify(temp))
