import string from './css.js'

const player = {
  n: 1,
  time: 80,
  id: undefined,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: () => {
    player.ui.demo.innerText = string.substring(0, player.n)
    player.ui.demo2.innerHTML = string.substring(0, player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) if (player.events.hasOwnProperty(key)) {
      const value = player.events[key]
      document.querySelector(key).onclick = player[value]
    }
  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.id)
      return
    }
    player.ui.demo.innerText = string.substring(0, player.n)
    player.ui.demo2.innerHTML = string.substring(0, player.n)
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight
  },
  play: () => {
    player.id = setInterval(player.run, player.time)
  },
  pause: () => {
    window.clearInterval(player.id)
  },
  slow: () => {
    player.pause()
    player.time = 300
    player.play()
  },
  normal: () => {
    player.pause()
    player.time = 80
    player.play()
  },
  fast: () => {
    player.pause()
    player.time = 10
    player.play()
  }
}

player.init()