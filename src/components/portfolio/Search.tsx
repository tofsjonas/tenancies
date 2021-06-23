import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Typeahead } from 'react-bootstrap-typeahead'
import { Tenancy } from '../../types/global'
import { useNavigate } from 'react-router-dom'
import 'react-bootstrap-typeahead/css/Typeahead.css'
import styled from '@emotion/styled'

/**
 * @todo react-highlight-words ?
 * in the typeahead examples this happens automatically...
 */

const Pelle = styled.div`
  #async-tenancy-search {
    min-width: 20rem;
  }
`

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
      navigate(`/tenancy/${pick[0].id}`)
    }
  }

  return (
    <Pelle>
      <Typeahead
        id="async-tenancy-search"
        labelKey="tekst"
        minLength={1}
        selected={selected}
        onChange={handleTenancyPick}
        options={tenancies}
        placeholder={t('overview_navbar_placeholder_search')}
        renderMenuItemChildren={(option: Tenancy) => <span>{option.tekst}</span>}
      />
    </Pelle>
  )
}
export default Search
