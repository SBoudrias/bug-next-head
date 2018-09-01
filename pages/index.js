import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'

const Example = dynamic(
  import('../components/Example'),
  { ssr: false }
)

export default class Index extends React.Component {
  render () {
    return (
      <div>
        <Head>
          <title>Does Head works inside dynamic components?</title>
        </Head>
        Some static content
        <Example />
      </div>
    )
  }
}
