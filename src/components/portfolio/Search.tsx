import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { useTranslation } from 'react-i18next'

const Search = () => {
  const { t } = useTranslation()

  const [query, setQuery] = useState('')

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
  }

  return (
    <Form inline>
      <FormControl
        type="search"
        placeholder={t('overview_navbar_placeholder_search')}
        value={query}
        onChange={handleQueryChange}
        className="mr-sm-2"
      />
    </Form>
  )
}
export default Search
