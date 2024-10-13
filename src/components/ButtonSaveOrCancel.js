import React from 'react'
import { Button } from 'semantic-ui-react'

function ButtonSaveOrCancel( props) {
    const {addEntry , resetForm} = props

    const handleSave = () => {
        addEntry()
        resetForm()
    }
    return (
        <Button.Group style={{ marginTop: 20 }}>
            <Button>Cancel</Button>
            <Button.Or />
            <Button primary onClick={handleSave}>Ok</Button>
        </Button.Group>
    )
}

export default ButtonSaveOrCancel