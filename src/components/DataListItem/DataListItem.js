import React, { useState } from 'react';

import { ListGroup, FormControl, InputGroup, Button } from 'react-bootstrap'
import './DataListItem.css';

export default function ({ data, deleteHandler, updateHandler, index }) {
  const [readonly, setreadonly] = useState(true)
  const [textValue, setTextValue] = useState(data)
  
  const editHandler = () => {
    setreadonly(false)
  }
  const update = () => {
    updateHandler(index, textValue);
    setreadonly(true)
  }

  return (
    <>
      <ListGroup.Item>
        <InputGroup className="mb-3">
          <FormControl
            placeholder="text"
            
            defaultValue={textValue}
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            readOnly={readonly}
            onChange={(e) => setTextValue(e.target.value)}

            
          />
          <InputGroup.Append>
          {readonly ? 
          (<Button onClick={editHandler} variant="outline-secondary">Edit</Button>):
          (<Button onClick={() => update()} variant="outline-secondary">Update</Button>)
          }
            
            <Button onClick={() => deleteHandler(index)} variant="outline-secondary">Delete</Button>
          </InputGroup.Append>
        </InputGroup>
      </ListGroup.Item>
    </>
  )
}   