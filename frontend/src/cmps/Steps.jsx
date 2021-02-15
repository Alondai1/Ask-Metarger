import React from 'react'
import { Icon, Step } from 'semantic-ui-react'


export default function Steps({ step, onMoveStep }) {
    return (
        <div className="steps elementOne">
            <Step.Group>
                <Step onClick={() => onMoveStep(0)} completed={step > 0} active={step === 0}>
                    <Icon name='user' />
                    <Step.Content>
                        <Step.Title>בחר\י מתרגל</Step.Title>
                        <Step.Description>ניתן לבחור מבין מבחר רב של טובי מתרגלינו</Step.Description>
                    </Step.Content>
                </Step>

                <Step onClick={() => onMoveStep(1)} completed={step > 1} active={step === 1}>
                    <Icon name='question' />
                    <Step.Content>
                        <Step.Title>שאל\י שאלה</Step.Title>
                        <Step.Description>ניתן לשאול שאלה מכל סוג</Step.Description>
                    </Step.Content>
                </Step>

                <Step onClick={() => onMoveStep(2)} completed={step > 2} active={step === 2}>
                    <Icon name='info' />
                    <Step.Content>
                        <Step.Title>קבל\י תשובה מידית</Step.Title>
                    </Step.Content>
                </Step>
            </Step.Group>
        </div>
    )
}
