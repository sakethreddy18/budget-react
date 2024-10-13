import React from 'react'
import { Button, Modal } from 'semantic-ui-react'
import NewEntryForm from './NewEntryForm'

function ModalEdit(props) {
    const {
        isOpen,
        setIsOpen,
        addEntry,
        description,
        setDescription,
        value,
        setValue,
        isExpense,
        setIsExpense,
        editEntry
    } = props
    return (
        <Modal open={isOpen}>
            <Modal.Header>Edit Entry</Modal.Header>
            <Modal.Content>
                <NewEntryForm
                    addEntry={addEntry}
                    description={description}
                    setDescription={setDescription}
                    value={value}
                    setValue={setValue}
                    isExpense={isExpense}
                    setIsExpense={setIsExpense}
                    editEntry={editEntry}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>Close</Button>
                <Button onClick={() => setIsOpen(false)} primary>Ok</Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit