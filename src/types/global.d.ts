type TenancyMetaData = {
  size?: number
  nbr_of_rooms?: number
  utilities?: string
  tenant_information?: string
}

export type Tenancy = {
  tekst: string
  adgangsadresse: {
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
  created_date?: string
  updated_date?: string
  metadata?: TenancyMetaData
}
