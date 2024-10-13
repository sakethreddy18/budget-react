import { Container, Statistic } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";

import NewEntryForm from "./components/NewEntryForm";

import DisplayBalances from "./components/DisplayBalances";
import EntryLine from "./components/EntryLine";


function App() {
  return (
    <Container>
      <MainHeader title="Budget" />

      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>2,550.53</Statistic.Value>
      </Statistic>

      <DisplayBalances />

      <MainHeader title="History" type='h3' />
      <EntryLine transactionLabel="Salary" transactionAmount="1,000.00" isExpense={false} />
      <EntryLine transactionLabel="Shoes" transactionAmount="250.00" isExpense={true} />
      <EntryLine transactionLabel="Tax Refund" transactionAmount="1,000.00" isExpense={false} />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
