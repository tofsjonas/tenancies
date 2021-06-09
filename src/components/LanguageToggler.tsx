import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from 'react-bootstrap/Button'
import { supported_i18n_languages } from '../i18n/config'

const LanguageToggler = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLInputElement).value
    localStorage.setItem('language', value)
    // console.log(i18n.languages) changes between clicks, no idea why...
    i18n.changeLanguage(value)
  }

  return (
    <div className="LanguageToggler">
      {supported_i18n_languages.map((lang) => (
        <Button variant={lang === i18n.language ? 'dark' : 'light'} key={lang} onClick={changeLanguage} value={lang}>
          {lang}
        </Button>
      ))}
    </div>
  )
}
export default LanguageToggler
