import { VulcanRuntimeError } from '@vulcan/errors'

export class Registry {
  constructor () {
    this.$registry = {}
    this.$app = null
  }

  setApp (app) {
    this.$app = app
    return this
  }

  getApp () {
    if (!this.$app) {
      throw new VulcanRuntimeError('App not registered in registry.')
    }
    return this.$app
  }

  exists (name) {
    return !!this.$registry[name]
  }

  create (name) {
    this.$registry[name] = []
    return this.$registry[name]
  }

  add (name, item) {
    if (!this.exists(name)) {
      this.create(name)
    }

    this.$registry[name].push(item)
    return this
  }

  get (name) {
    if (!this.exists(name)) {
      return this.create(name)
    }
    return this.$registry[name]
  }
}

export default new Registry()
