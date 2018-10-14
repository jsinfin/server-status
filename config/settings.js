class Settings {
  constructor() {
    this.isStatusOn = false
  }

  get status() {
    return this.isStatusOn
  }

  setStatusOn() {
    return this.isStatusOn = true
  }

  setStatusOff() {
    return this.isStatusOn = false
  }
}

export default Settings
