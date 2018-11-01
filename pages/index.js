import React from 'react'
import data from '../components/data'

const Home = () => (
  <div style={{ textAlign: 'center' }}>
      {data.map((data, index) =>
        <div key={index} style={{ marginBottom: 50 }}>
          <p><strong>Universitas</strong>: {data.universitas}</p>
          <p><strong>Didirikan</strong>: {data.info.didirikan}</p>
          <p><strong>Website</strong>: {data.info.website}</p>
        </div>
      )}
    </div>
)

export default Home
