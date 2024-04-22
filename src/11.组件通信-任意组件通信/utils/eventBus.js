export class LyEventBus {
  constructor() {
    this.eventsObj = {}
  }
  on(eventName, eventFn) {
    let eventFns = this.eventsObj[eventName]
    if (!eventFns) {
      eventFns = []
      this.eventsObj[eventName] = eventFns
    }
    eventFns.push(eventFn)
  }
  emit(eventName, ...args) {
    const fns = this.eventsObj[eventName]
    if (!fns) return
    fns.forEach(fn => {
      fn(...args)
    })
  }
  off(eventName, eventFn) {
    let fns = this.eventsObj[eventName]
    if (!fns) return
    fns.forEach((item, i) => {
      if (item === eventFn) fns.splice(i, 1)
    })

    if (fns.length === 0) delete this.eventsObj[eventName]
  }
}

