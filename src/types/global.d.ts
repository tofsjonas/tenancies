export type TenancyMetaData = {
  size?: number
  nbr_of_rooms?: number
  utilities?: string
  tenant_information?: string
}
type AdgangsAdresseMetaData = {
  id: string
  status?: number
  darstatus?: number
  vejkode?: string | null
  vejnavn?: string | null
  adresseringsvejnavn?: string | null
  husnr?: string | null
  supplerendebynavn?: string | null
  postnr?: string | null
  postnrnavn?: string | null
  stormodtagerpostnr?: string | null
  stormodtagerpostnrnavn?: string | null
  kommunekode?: string | null
  x: number
  y: number
  href?: string | null
}

export type DAWATenancy = {
  tekst: string
  adgangsadresse: AdgangsAdresseMetaData
  created_date?: string
  updated_date?: string
  metadata?: TenancyMetaData
}

// export type Tenancy = {
//   tekst: string
//   adgangsadresse: AdgangsAdresseMetaData
//   created_date?: string
//   updated_date?: string
//   metadata?: TenancyMetaData
// }
type FirestoreTimestamp = import('firebase').firestore.Timestamp
type FirestoreLocation = import('firebase').firestore.Location
export type Tenancy = {
  tekst: string
  created?: FirestoreTimestamp
  updated?: FirestoreTimestamp
  location?: FirestoreLocation
} & TenancyMetaData &
  AdgangsAdresseMetaData
