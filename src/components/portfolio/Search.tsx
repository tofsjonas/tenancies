import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Tenancy } from '../../types/global'
import { useNavigate } from 'react-router-dom'
import 'react-bootstrap-typeahead/css/Typeahead.css'

/**
 * @todo react-highlight-words ?
 */

type SearchProps = {
  tenancies: Tenancy[]
}

const Search = ({ tenancies }: SearchProps) => {
  const { t } = useTranslation()
  const navigate = useNavigate()

  // eslint-disable-next-line
  const [selected, setSelected] = useState<Tenancy[]>([]) // setSelected never used..

  const handleTenancyPick = (pick: Tenancy[]) => {
    if (pick[0]) {
      navigate(`/tenancy/${pick[0].adgangsadresse.id}`)
    }
  }

  return (
    <Typeahead
      align="right"
      id="async-tenancy-search"
      labelKey="tekst"
      minLength={1}
      selected={selected}
      onChange={handleTenancyPick}
      options={tenancies}
      placeholder={t('overview_navbar_placeholder_search')}
      renderMenuItemChildren={(option: Tenancy) => <span>{option.tekst}</span>}
    />
  )
}
export default Search
