import React from 'react'
import DsiplayBalance from './DsiplayBalance'
import { Grid, Segment } from 'semantic-ui-react'

function DisplayBalances( props ) {
  const {totalIncome, totalExpenses} = props
  return (
    <Segment textAlign="center">
    <Grid columns={2}>
      <Grid.Row>
        <Grid.Column>
          <DsiplayBalance  color="green" label="Income" value={totalIncome} />
        </Grid.Column>
        <Grid.Column>
          <DsiplayBalance color="red" label="Expenses" value={totalExpenses}/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
  )
}

export default DisplayBalances