import { Container, Statistic } from "semantic-ui-react";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import DisplayBalances from "./components/DisplayBalances";
import { useEffect, useState } from "react";
import EntryLines from "./components/EntryLines";
import ModalEdit from "./components/ModalEdit";


function App() {
  var initialEntries = [
    {
      id: 1,
      description: "Work Income",
      value: "1000.00",
      isExpense: false,
    },
    {
      id: 2,
      description: "Water Bill",
      value: "20.00",
      isExpense: true,
    },
    {
      id: 3,
      description: "Rent",
      value: "300.00",
      isExpense: true,
    },
    {
      id: 4,
      description: "Power Bill",
      value: "50.00",
      isExpense: true,
    },
    {
      id: 5,
      description: "Mobile Bill",
      value: "30.00",
      isExpense: true,
    },
    {
      id: 6,
      description: "Internet Bill",
      value: "30.00",
      isExpense: true,
    },
    {
      id: 7,
      description: "Salary",
      value: "3000.00",
      isExpense: false,
    }
  ]
  const [entries, setEntries] = useState(initialEntries)

  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const [entryId, setEntryId] = useState()
  const [totalIncome, setTotalIncome] = useState(0)
  const [totalExpenses, setTotalExpenses] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!isOpen && entryId) {
      console.log(`entryId`, entryId)
      const index = entries.findIndex(entry => entry.id === entryId)
      console.log(`index`, index)
      const newEntries = [...entries]
      newEntries[index] = { id: entryId, description, value, isExpense }
      setEntries(newEntries)
      resetEntry()

    }
  }, [isOpen])

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    entries.map(entry => {
      if(entry.isExpense){
        totalExpenses += Number(entry.value)
        setTotalExpenses(totalExpenses)
      } else {
        totalIncome += Number(entry.value)
        setTotalIncome(totalIncome)
      }


    })
    setTotal(totalIncome - totalExpenses)
    console.log(`totalIncome : ${totalIncome} totalExpense : ${totalExpenses}`)
  }, entries)

  function deleteEntry(id) {
    const result = entries.filter(entry => entry.id !== id)
    console.log(`entries`, entries)
    console.log(`result`, result)
    setEntries(result)
  }

  function addEntry() {
    const result = entries.concat({ id: entries.length + 1, description, value, isExpense })
    console.log(`entries`, entries)
    console.log(`result`, result)
    setEntries(result)
    resetEntry()
  }


  function editEntry(id) {
    console.log(`edit entry with id: ${id}`)
    if (id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index]
      setEntryId(id)
      console.log(`entry`, entry)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)

    }
  }

  function resetEntry() {
    setDescription('')
    setValue('')
    setIsExpense(false)
  }

  return (
    <Container>
      <MainHeader title="Budget" />

      <Statistic size='small'>
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>{total}</Statistic.Value>
      </Statistic>

      <DisplayBalances  totalIncome={totalIncome} totalExpenses={totalExpenses}/>

      <MainHeader title="History" type='h3' />
      <EntryLines entries={entries} deleteEntry={deleteEntry} editEntry={editEntry} />

      <MainHeader title="Add New Transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
        editEntry={editEntry}
      />
    </Container>
  );
}

export default App;


