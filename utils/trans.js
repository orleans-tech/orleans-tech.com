'use strict'

import fr from './locales/fr.json'

export function _(key) {
  return key in fr ? fr[key] : key
}
