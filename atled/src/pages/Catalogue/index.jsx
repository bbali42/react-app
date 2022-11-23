import React from 'react'
import styled from 'styled-components'
import Card from '../../components/Card'

const exampleCatalogues = [
  {
    sattelite: 'S2',
    description: 'Multi-spectre',
  },
  {
    sattelite: 'ERA5',
    description: 'Swiss knife',
  },
  {
    sattelite: 'S5P',
    description: 'Atmosphere',
  },
]

const CardContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

function Catalogue() {
  return (
    <div>
      <h1>Example catalogue</h1>
      <CardContainer>
        {exampleCatalogues.map((item, index) => (
          <Card
            sattelite={item.sattelite}
            description={item.description}
            picture={item.picture}
            title={42}
          />
        ))}
      </CardContainer>
    </div>
  )
}

export default Catalogue
