import React, {useState} from 'react';
import styles from './modalCorrect.module.scss'
import Button from '@mui/material/Button';

const ModalCorrect = (props) => {
    // console.log(props)
const [changeName, setChangeName] = useState('')
    const closeModalCorrected = () => {
         props.setCorrectModal(false);
         props.setBtnNewGood(false);
         props.setBtnCorrect(false);
         props.setBtnRemove(false);
    }

    const addChangeGood = (e) => {
        e.preventDefault();

            setChangeName(e.target.value);
            console.log(changeName);
            // setChangeName('')
            if(changeName !== ''){
                props.setGoodName(changeName);
            props.products.map((i) => {
                    if(i.nameGood === props.goodName){
                        i.nameGood = changeName
                    }
                })

            }

    }

    return (
        <form className={styles.modal}>
            <label htmlFor="label-name">
            Изменить название:
            </label>
            <input value={changeName} onChange={e => setChangeName(e.target.value)} type="text" id="label-name" name="nameGood" placeholder={props.goodName}/>
            <br></br>

            <label htmlFor="label-price">
            Изменить стоимость:
            </label>
            <input type="text" id="label-price" name="goodPrice" placeholder={props.price}/>
            <br></br>

            <label htmlFor="label-count">
            Изменить количество:
            </label>
            <input type="text" id="label-count" name="goodCount" placeholder={props.count}/>
            <div style={{marginTop: '20px'}}>
                <Button variant="contained" size="small" onClick={closeModalCorrected} >
                    Отмена
                </Button>
                <Button type='submit' variant="contained" size="small" style={{marginLeft: '10px'}} onClick={addChangeGood} >
                    Сохранить
                </Button>
            </div>


        </form>
    );
};

export default ModalCorrect;