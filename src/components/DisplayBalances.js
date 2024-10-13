import React from 'react'
import DsiplayBalance from './DsiplayBalance'
import { Grid, Segment } from 'semantic-ui-react'

function DisplayBalances() {
  return (
    <Segment textAlign="center">
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <DsiplayBalance  color="green" label="Income" value="1,000.00" />
        </Grid.Column>
        <Grid.Column>
          <DsiplayBalance color="red" label="Expenses" value="250.00" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default DisplayBalances