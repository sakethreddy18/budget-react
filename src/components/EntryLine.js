import React, { Fragment, useState } from "react";
import { Grid, Icon, Segment } from "semantic-ui-react";
import ModalEdit from "./ModalEdit";

function EntryLine(props) {
  const { id, transactionLabel, transactionAmount, isExpense, deleteEntry ,editEntry } = props;
  

  return (
    <Fragment>
      <Segment color={isExpense ? "red" : "green"}>
        <Grid columns={3} textAlign="right">
          <Grid.Row>
            <Grid.Column width={10} textAlign="left">
              {transactionLabel}
            </Grid.Column>
            <Grid.Column width={3} textAlign="right">
              ${transactionAmount}
            </Grid.Column>
            <Grid.Column width={3}>
              <Icon name="edit" 
                bordered 
                style={{ cursor: "pointer" }}
                onClick={() => editEntry(id)}>
              </Icon>
              <Icon
                name="trash"
                bordered
                onClick={() => deleteEntry(id)}
                style={{ cursor: "pointer" }}
              ></Icon>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      
    </Fragment>
  );
}

export default EntryLine;
