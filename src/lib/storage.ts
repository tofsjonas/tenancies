import axios from 'axios'
import { Tenancy, DAWATenancy, TenancyMetaData } from '../types/global'
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

export const updateTenancyInStorage = async (id: string, obj: TenancyMetaData) => {
  const new_obj = {
    ...obj,
    updated: firestore.FieldValue.serverTimestamp(),
  }
  await db.collection('tenancies').doc(id).update(new_obj)
  return new_obj
}

export const deleteTenancyFromStorage = async (id: string) => {
  await db.collection('tenancies').doc(id).delete()
}

export const getTenanciesFromStorage = async () => {
  const result: Tenancy[] = []
  const response = db.collection('tenancies')
  const data = await response.get()
  data.docs.forEach((item) => {
    result.push(item.data() as Tenancy)
  })
  return result
}

export const addTenancyToStorage = async (obj: Tenancy) => {
  const new_obj = {
    ...obj,
    created: firestore.FieldValue.serverTimestamp(),
    updated: firestore.FieldValue.serverTimestamp(),
    location: new firestore.GeoPoint(obj.x, obj.y),
  }
  await db.collection('tenancies').doc(obj.id).set(new_obj)
  return new_obj
}
