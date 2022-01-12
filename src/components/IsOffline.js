import React from 'react';

export default class IsOffline extends React.Component {
  constructor(props) {
    super(props)
    this.state = { onLine: navigator ? navigator.onLine : true }
  }

  componentDidMount() {
    if( ! window ) return

    window.addEventListener('online', this.goOnline)
    window.addEventListener('offline', this.goOffline)
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.goOnline)
    window.removeEventListener('offline', this.goOffline)
  }

  goOnline = () => this.setState({ onLine: true })
  goOffline = () => this.setState({ onLine: false })

  render() {
    const { onLine } = this.state

    if( onLine ) return null

    return <div
    style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
    <span
      style={{ background: '#bababa', padding: '10px', margin: '10px', borderRadius: 10, color: 'white', fontWeight: 700 }}
    >No tienes conexión a internet</span>
  </div>
  }
}