import React, { useState } from 'react'
import styles from './Item.module.css'


const Item = (props) => {

    const [showLess, setShowLess] = useState(true)
    return (
        <div>
            <article className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={props.image} alt={props.title} className={styles.image} />
                </div>
                <div className={styles.headerCard}>
                    <h3 className={styles.name}>{props.title}</h3>
                    <h4 className={styles.price}> <span className={styles.dollar}>$</span><span className={styles.amount}>{props.price}</span></h4>
                </div>
                <div className={styles.productInfo}>
                    <div className={styles.productDesc}>
                        {showLess ? `${props.description.substring(0, 100)}` : `${props.description}`}<button onClick={() => setShowLess(!showLess)}>{showLess ? `...Read More` : `Show Less`}</button>
                    </div>
                    <div className={styles.productCateg}>
                        {props.category}
                    </div>
                </div>
                <button className={styles.addToCartBtn} onClick={props.clicked} id={props.id}>Add To Cart</button>
            </article>
        </div>
    )
}

export default Item
