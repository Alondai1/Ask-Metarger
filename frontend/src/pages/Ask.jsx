import React, { useEffect, useState, createRef } from 'react'
import { loadItems } from '../actions/itemActions'
import { connect } from 'react-redux'
import ItemList from '../cmps/ItemList'
import Loader from "react-loader-spinner";
import { Steps, Hints } from 'intro.js-react';

import { Ref, Sticky, Divider, Progress, Input, Icon } from 'semantic-ui-react'
import StepsCmp from '../cmps/Steps'
import Collapse from '../cmps/Collapse'




function Ask({ items, loadItems }) {

    const contextRef = createRef()
    useEffect(() => {
        loadItems()
    }, [])


    const [step, setStep] = useState(0)
    const onMoveStep = (idx) => {
        if (idx >= 0) return setStep(idx)
        const newStep = step === 3 ? 0 : step + 1
        setStep(newStep)
    }


    const [quest, setQuest] = useState('')

    const handleChange = ({ target }) => {
        setQuest(target.value)
    }


    const [link, setLink] = useState('')
    const onSubmit = () => {
        console.log(quest);
        setStep(4)
        const link = `https://www.google.com/search?q=${quest}`
        setLink(link)
        setTimeout(() => {
            setIsDone(true)
        }, 4000);
    }


    const [selectedItem, setSelectedItem] = useState('')

    const onSelectItem = (name) => {
        console.log(name);
        setSelectedItem(name)
    }

    const [isIntroActive, setIsIntroActive] = useState(true)
    const [isDone, setIsDone] = useState(false)



    const steps = [

        {
            element: '.elementOne',
            intro: 'שלושה צעדים פשוטים לקבלת עזרת מתרגל',
        },
        {
            element: '.progress',
            intro: 'עקבו אחר ההתקדמות שלכם',
        },
        {
            element: '.item-list',
            intro: 'בחרו מתרגל\ת וצאו לדרך',
        }
    ];




    return (
        <div className="ask main-container">


            <Steps
                enabled={isIntroActive}
                steps={steps}
                initialStep={0}
                onExit={() => setIsIntroActive(false)}
            />



            {/* <Ref innerRef={contextRef}> */}
            <div>


                {/* <Sticky context={contextRef}> */}
                <StepsCmp onMoveStep={onMoveStep} step={step}></StepsCmp>
                {/* </Sticky> */}


                {step < 3 ? <div>

                    <Divider horizontal><Icon disabled name='user' /></Divider>

                    <Collapse isShow={step === 0}>
                        <ItemList selectedItem={selectedItem} onSelectItem={onSelectItem} items={items}></ItemList>
                        <button onClick={onMoveStep}>הבא</button>
                    </Collapse>


                    <Divider horizontal><Icon disabled name='question' /></Divider>

                    <Collapse isShow={step === 1}>
                        <Input icon='search' placeholder='שאל\י כאן...' onChange={handleChange} />
                        <button onClick={onMoveStep}>הבא</button>
                    </Collapse>

                    <Divider horizontal><Icon disabled name='info' /></Divider>

                    <Collapse isShow={step === 2}>
                        <button onClick={onSubmit}>שאל את {selectedItem}</button>
                    </Collapse>
                </div> : <div className="loader">
                        {!isDone ? <div className="loader">
                            <h1>{selectedItem} מחפש את התשובה הטובה ביותר, אנא המתינו</h1>
                            <Loader
                                type="Circles"
                                color="#ff63e7"
                                height={100}
                                width={100}
                                timeout={4000}
                            />
                        </div>
                            : <a href={link}>לחצו לתשובה</a>
                        
                        }
                    </div>


                }



            </div>

            {/* </Ref> */}
            <Progress className="progress" percent={(step) * 33 + 1} indicating />

        </div>
    )
}

const mapStateToProps = (state) => ({
    items: state.item.items,
    isLoading: state.system.isLoading
})

const mapDispatchToProps = {
    loadItems
}

export default connect(mapStateToProps, mapDispatchToProps)(Ask)





