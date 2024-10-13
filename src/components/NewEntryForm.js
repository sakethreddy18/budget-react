import React, { useState } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import ButtonSaveOrCancel from './ButtonSaveOrCancel'
import EntryForm from './EntryForm'

function NewEntryForm(props) {
  const { addEntry, description, setDescription, value, setValue, isExpense, setIsExpense , editEntry } = props

  const resetForm = () => {
    setDescription('');
    setValue('');
    setIsExpense(false);
  };

  return (
    <Form unstackble>
      <EntryForm
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}

      ></EntryForm>

      <ButtonSaveOrCancel
        addEntry={addEntry}
        resetForm={resetForm}
      />
    </Form>
  )
}

export default NewEntryForm