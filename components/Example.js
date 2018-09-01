import React from 'react'
import Head from 'next/head'

export default () => (
  <div className="dynamic-style">
    <Head>
      <style dangerouslySetInnerHTML={{ __html: `
        .dynamic-style {
          background-color: green;
          height: 200px;
        }
      `}} />
    </Head>
    Dynamic component
  </div>
)
