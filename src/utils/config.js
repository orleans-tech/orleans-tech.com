'use strict'

import defaultConfiguration from './conf/default.json'
import devConfiguration from './conf/development.json'

class Config {
  constructor() {
    let data = defaultConfiguration
    if (process.env.NODE_ENV == 'development') {
      data = Object.assign({}, defaultConfiguration, devConfiguration)
    }
    this.data = Object.assign(data, { env: process.env.NODE_ENV })
  }

  get(key, def) {
    return key in this.data ? this.data[key] : def
  }
}

const config = new Config()

export default config
