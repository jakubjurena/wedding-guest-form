import { PersonRemove } from "@mui/icons-material";

import { NumberInput } from './NumberInput'
import { TextAreaInput } from './TextAreaInput'
import { TextInput } from './TextInput'
import { ActionButton } from './ActionButton/ActionButton'

import styles from './App.module.scss'
import { FormSection } from "./FormSection";

function App() {
  const renderActionButton = () => {
    return <ActionButton onClick={() => alert("delete")}><PersonRemove/></ActionButton>
  }

  return (
    <>
      <h1>Mock Form</h1>

      <div className={styles.demoContainer}>
        <FormSection title="Hosté">
          <TextInput id='test-text-input' rightAction={renderActionButton()}/>
          <TextInput id='test-text-input-2' rightAction={renderActionButton()}/>

          <div className={styles.formRow}>
            <ActionButton onClick={() => alert("Add more participants")}>Add participant</ActionButton>
          </div>
        </FormSection>
        <FormSection title="Jídlo">
          <div className={styles.formRow}>
            <NumberInput id='test-number-input-1' label='Test number 1' min={0} max={5}/>
            <NumberInput id='test-number-input-2' label='Test number 2' min={0} max={5}/>
            {/* <NumberInput id='test-number-input-3' label='Test number 3' min={0} max={5}/> */}
          </div>
          <TextAreaInput id='test-text-area-input' label='Test text area' cols={1}/>
        </FormSection>

      </div>
    </>
  )
}

export default App
