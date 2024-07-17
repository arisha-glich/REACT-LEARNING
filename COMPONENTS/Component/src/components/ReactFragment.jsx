import React, { Fragment } from 'react'
import PressMe from './PressMe'
import styles from './ReactFragment.module.css'

function ReactFragment() {
  return (
    <Fragment>
    <div>ReactFragment
        <h1> Hello Arisha</h1>
    </div>
    <section>
        <h2>
            I am fragment , Used for returning more than one div's
        </h2>
        <PressMe label='Hello User, You can Click me!' className={styles.button}/>
     
    </section>
    </Fragment>
  )
}

export default ReactFragment