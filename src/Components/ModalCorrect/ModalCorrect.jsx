import React, {useState} from 'react';
import styles from './modalCorrect.module.scss'
import Button from '@mui/material/Button';

const ModalCorrect = (props) => {
    // console.log(props)
const [changeName, setChangeName] = useState('');
const [changePrice, setChangePrice] = useState('');
const [changeCount, setChangeCount] = useState('');
const [inputNameGood, setInputNameGood] = useState(false);
const inputName = inputNameGood ? styles.borderError : styles.borderNone ;

const [inputPriceGood, setInputPriceGood] = useState(false);
const inputPrice = inputPriceGood ? styles.borderError : styles.borderNone ;
const [inputCountGood, setInputCountGood] = useState(false);
const inputCount = inputCountGood ? styles.borderError : styles.borderNone ;

const closeModalCorrected = () => {
         props.setCorrectModal(false);
         props.setBtnNewGood(false);
         props.setBtnCorrect(false);
         props.setBtnRemove(false);
         setInputNameGood(false);
         setInputPriceGood(false);
         setInputCountGood(false);
         setChangeName('');
                setChangePrice('');
                setChangeCount('');
    }

    const addChangeGood = (e) => {
        e.preventDefault();

            if(changeName !== '' && changePrice !== '' && changeCount !== ''){
                console.log(changeName)
                props.item.nameGood = changeName;
                props.item.price = changePrice;
                props.item.count = changeCount;
                setChangeName('');
                setChangePrice('');
                setChangeCount('');
                closeModalCorrected();
            }
             if(!changeName){
                setInputNameGood(true);
            }else{
                setInputNameGood(false);
            }
            if(!changePrice){
                setInputPriceGood(true);
            }else{
                setInputPriceGood(false);
            }
            if(!changeCount){
                setInputCountGood(true);
            }else{
                setInputCountGood(false);
            }
        }


    return (
        <form
        className={styles.modal}
        >
            <label htmlFor="label-name">
            Изменить название:
            </label>
            <input className={inputName} value={changeName} onChange={e => setChangeName(e.target.value)} type="text" id="label-name" name="nameGood" placeholder={props.item.nameGood}
            />
            <br></br>

            <label htmlFor="label-price">
            Изменить стоимость:
            </label>
            <input className={inputPrice} value={changePrice} onChange={e => setChangePrice(e.target.value)} type="text" id="label-price" name="goodPrice" placeholder={props.item.price}/>
            <br></br>

            <label htmlFor="label-count">
            Изменить количество:
            </label>
            <input className={inputCount} value={changeCount} onChange={e => setChangeCount(e.target.value)} type="text" id="label-count" name="goodCount" placeholder={props.item.count}/>
            <div style={{marginTop: '20px'}}>
                <Button variant="contained" size="small"
                onClick={closeModalCorrected}
                >
                    Отмена
                </Button>

                <Button
                type='submit'
                variant="contained" size="small" style={{marginLeft: '10px'}}
                 onClick={addChangeGood}
                 >
                    Сохранить
                </Button>
                {/* <button onClick={addChangeGood}>Сохранить</button> */}
            </div>


        </form>
    );
};

export default ModalCorrect;