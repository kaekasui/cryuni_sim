import React from 'react'

export default class Tweets extends React.Component {
  componentDidMount() {
    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charSet = 'utf-8'
    document.body.appendChild(script)
  }

  render() {
    return (
      <div className='tweetsComponent'>
        <a className='twitter-timeline' href='https://twitter.com/cryuni_info?ref_src=twsrc%5Etfw' />
      </div>
    )
  }
}
