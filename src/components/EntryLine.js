import React from 'react'
import { Grid, Icon, Segment } from 'semantic-ui-react'

function EntryLine(props) {
    const {transactionLabel, transactionAmount, isExpense} = props
    return (
        <Segment color={isExpense? 'red' : 'green' }>
            <Grid columns={3} textAlign="right">
                <Grid.Row>
                    <Grid.Column width={10} textAlign="left">{transactionLabel}</Grid.Column>
                    <Grid.Column width={3} textAlign="right">${transactionAmount}</Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name="edit" bordered></Icon>
                        <Icon name="trash" bordered></Icon>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </Segment>
    )
}

export default EntryLine