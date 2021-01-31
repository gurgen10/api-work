import React, { useState } from 'react';

import { ListGroup, FormControl, InputGroup, Button } from 'react-bootstrap'
import './AddItem.css';

export default function ( { addItem, title }) {
  const [textValue, setTextValue] = useState('')

  const addText = () => {
    addItem(textValue, title)
    setTextValue('')
  }

  return (
    <>
      <ListGroup.Item>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="add text"
            value={textValue}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e) => setTextValue(e.target.value)}

          />
          <InputGroup.Append>

            <Button onClick={addText} variant="outline-secondary">Add</Button>
          </InputGroup.Append>
        </InputGroup>
      </ListGroup.Item>
    </>
  )
}   