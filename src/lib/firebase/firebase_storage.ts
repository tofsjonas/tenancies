import { Tenancy, TenancyMetaData, DB_ID } from 'types/global'
import db, { firestore } from 'lib/firebase/firebase.config'
import { User } from 'contexts/AuthContext'

type updateTenancyInStorageParams = {
  id: DB_ID
  data: TenancyMetaData
}

export const updateTenancyInStorage = async ({ id, data }: updateTenancyInStorageParams) => {
  const new_obj = {
    ...data,
    updated: firestore.FieldValue.serverTimestamp(),
  }
  await db.collection('tenancies').doc(id).update(new_obj)
  return new_obj
}

export const deleteTenancyFromStorage = async (id: string, user: User) => {
  console.log(user)
  await db.collection('tenancies').doc(id).delete()
}

export const getTenanciesFromStorage = async (user: User) => {
  const result: Tenancy[] = []
  const docRef = db.collection('tenancies').where('owner', '==', user.is_anonymous ? null : user.uid)
  const data = await docRef.get()
  data.docs.forEach((item) => {
    const tenancy = {
      ...item.data(),
      db_id: item.id,
    } as Tenancy

    result.push(tenancy)
  })
  return result
}

export const addTenancyToStorage = async (obj: Tenancy, user: User) => {
  const temp = {
    ...obj,
    owner: user.is_anonymous ? null : user.uid,
    created: firestore.FieldValue.serverTimestamp(),
    updated: firestore.FieldValue.serverTimestamp(),
    location: new firestore.GeoPoint(obj.x, obj.y),
  }

  const res = await db.collection('tenancies').add(temp)
  temp.db_id = res.id
  return temp
}
