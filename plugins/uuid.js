export default ({ app }, inject) => {
  inject('uuid', () =>
    'RRRRRRRR-RRRR-4RRR-rRRR-RRRRRRRRRRRR'
      .split('')
      .map((e) => {
        if (e === 'R') return Math.floor(Math.random() * 16).toString(16)
        if (e === 'r') return (Math.floor(Math.random() * 4) + 8).toString(16)
        return e
      })
      .join('')
  )
}
