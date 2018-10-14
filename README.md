## `server-status`

A reusable React component that shows you the status of your server; on or off

### Installation 

`server-status` comes under a scoped package `@jsinfin`:

`npm install --save @jsinfin/server-status`

### Is `@jsinfin/...' a Mono Repo?

Well, yes and no. `<ServerStatus />` is one component out of the numerous to come under the scope `@jsinfin`. At the core of the build is:

* Lerna
* Storybook
* Usual Suspects

However, as an author/publisher I decided to release each individual component to the world before releasing the entire collection
(where you could sample components via storybook + addons)

#### Parcel Bundler

I have my reasons, some will agree, others might not. Within this effort I chose to use Parcel for each individual component that I 
open-sourced on Github from scoped `@jsinfin` packages as a way for consumers to not only get the source, but to also view and 
interact with them.

#### Other Implications

Instead of storybook documentation initially please read the docs below. Once the final release is out you'll have Storybook to fiddle
around with.

Of course, *this is just for Github* - the components are distributed from NPM, and published on NPM.

#### Installation

* `npm install`
* You'll need parcel, so `npm install parcel -g`, you can install it globally or add it to `package.json`
* Each repo will have an `index.html`. From the command line just run: `$ parcel index.html` and you're good to go


### Prop Types & Defaults

1. @height: [number] {default: 10}
2. @width: [number] {default: 10}
3. @border: [number] {default: 0}
4. @borderColor: [string] {default: none}
5. @borderStyle: [string] {default: #4c924c}

### Usage

`<ServerStatus />` is a stateless component, keep that in mind.

`<ServerStatus />` takes in one variable from the outside world that controls the condition to the ternary in the `backgroundColor` prop. 
This is usually set to `false` or `off` as default, but it's up to you.

`backgroundColor={_*condition*_ ? '#14f1b9' : '#FF0000'}`

> This variable needs to be created by the consumer, /ie: you:

You can then easily toggle that variable or even add it to state on a class level component whilst returning the `<ServerStatus />` 
component:

```
import ServerStatus from '@jsinfin/server-status'

// or similar variation in class level component, off by default
let isStatusOn = false

toggleStatus() {
  isStatusOn = !isStatusOn
}

<ServerStatus
  backgroundColor={
    isStatusOn ?
      '#14f1b9'
      : '#FF0000'
  }
/>
```

> If you wanted a more verbose solution you could use get/set from a class and set status where-ever you deemed fit: 

```javascript
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
```

...then:

```
import ServerStatus from '@jsinfin/server-status'
import settings from 'config/settings'

<ServerStatus
  backgroundColor={
    settings.status ? // gotcha!
      '#14f1b9'
      : '#FF0000'
  }
/>

// of course elsewhere you would have:
import Settings from 'path_to_config_settings'

let settings = new Settings()

server.listen(port, (err) => {
  if (err) {
    return console.log('something's not quite right, err)
  }
  settings.setStatusOn()
  console.log(`server is listening on ${port}`)
})
}
```

> Basic usage: On / Off

```
import ServerStatus from '@jsinfin/server-status'
import settings from 'config/settings'

// off by default
<ServerStatus
  backgroundColor={
    settings.status ?
      '#14f1b9'
      : '#FF0000'
    }
/>

// turn on, i explicitly called the method below,
// you would instead call setting.setStatusOn() elsewhere
// or declare your variable / state locally
<ServerStatus
   backgroundColor={
     settings.setStatusOn() ?
       '#14f1b9'
       : '#FF0000'
     }
/>

```

> Override Defaults Props

```
import ServerStatus from '@jsinfin/server-status'
import settings from 'config/settings'

// off by default
<ServerStatus
  height={12}
  width={12}
  border={1}
  backgroundColor={
    settings.status() ?
      '#14f1b9'
      : '#FF0000'
  }
/>

```
