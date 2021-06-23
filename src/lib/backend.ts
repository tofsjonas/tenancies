import axios from 'axios'
import { Tenancy, DAWATenancy } from '../types/global'
import db, { firestore } from '../firebase/firebase.config'

type AddressParams = {
  query: string
  success: (data: DAWATenancy[]) => void
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

export const updateTenancyInStorage = async (obj: Tenancy) => {
  return new Promise<Tenancy>((resolve, reject) => {
    const tenancies_as_json_string = localStorage.getItem('tenancies') || '[]'
    try {
      obj.updated = new Date().toISOString()
      const tenancies = (JSON.parse(tenancies_as_json_string) as Tenancy[]).map((tenancy) => {
        if (tenancy.id === obj.id) {
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
      const new_tenancies = tenancies.filter((obj: Tenancy) => obj.id !== id)
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

export const fetchBlogs = async () => {
  const response = db.collection('tenancies')
  const data = await response.get()
  data.docs.forEach((item) => {
    // console.log(item.id, item.data())
    // console.log(item.metadata.docs)
    // item.collection('metadata').docs.forEach((res) => {
    //   console.log(res)
    // })
    // setBlogs([...blogs, item.data()])
  })
}

/**
 * @todo ensure unique addresses
 */

export const addTenancyToStorage = async (obj: Tenancy) => {
  return new Promise<Tenancy>((resolve, reject) => {
    const tenancies_as_json_string = localStorage.getItem('tenancies') || '[]'
    try {
      obj.created = new Date().toISOString()
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
