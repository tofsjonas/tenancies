import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button'

const LanguageToggler = () => {
  const { i18n } = useTranslation()
  const languages = [
    { key: 'sv', val: 'Sv' },
    { key: 'en', val: 'En' },
  ]

  const changeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLInputElement).value
    i18n.changeLanguage(value)
  }

  return (
    <div className="LanguageToggler">
      {languages.map((lang) => (
        <Button
          variant={lang.key === i18n.language ? 'dark' : 'light'}
          key={lang.key}
          onClick={changeLanguage}
          value={lang.key}
        >
          {lang.val}
        </Button>
      ))}
    </div>
  )
}
export default LanguageToggler
