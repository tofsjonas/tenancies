import axios from 'axios'
import { Tenancy } from '../types/global'

type AddressParams = {
  query: string
  success: (data: Tenancy[]) => void
  fail: (err: Error) => void
}

export const getAddressInfoFromDAWA = ({ query, success, fail }: AddressParams): void => {
  const remote_url = process.env.REACT_APP_DAWA_URL
  axios
    .get(remote_url + escape(query))
    .then((response) => {
      if (response.status === 200) {
        success(response.data)
      }
    })
    .catch((err) => {
      fail(err)
    })
}

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
      obj.created_date = new Date().toISOString()
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

export const updateTenancyInStorage = async (obj: Tenancy) => {
  return new Promise<Tenancy>((resolve, reject) => {
    const tenancies_as_json_string = localStorage.getItem('tenancies') || '[]'
    try {
      obj.updated_date = new Date().toISOString()
      const tenancies = (JSON.parse(tenancies_as_json_string) as Tenancy[]).map((tenancy) => {
        if (tenancy.adgangsadresse.id === obj.adgangsadresse.id) {
          return obj
        } else {
          return tenancy
        }
      })

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
