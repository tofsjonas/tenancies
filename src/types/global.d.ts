type TenancyMetaData = {
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
  x?: number | null
  y?: number | null
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

export type Tenancy = {
  tekst: string
  created?: string
  updated?: string
} & TenancyMetaData &
  AdgangsAdresseMetaData
