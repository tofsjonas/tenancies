import axios from 'axios'
import { DAWATenancy } from '../types/global'

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
