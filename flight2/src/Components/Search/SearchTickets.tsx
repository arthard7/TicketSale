import React, {ChangeEvent, useCallback, useContext, useRef, useState} from 'react';
import styles from './SearchTickets.module.scss'
// @ts-ignore
import {debounce} from "lodash";
import {useDispatch} from "react-redux";
import {setSearchValue} from "../../redux/slice/filterSlice";





const SearchTickets:React.FC = () => {
    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)





    const SearchDebounce = useCallback(
        debounce((str:string) => {
            dispatch(setSearchValue(str))
        },250),[]
)


    const OnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
        SearchDebounce(event.target.value)
    }





    const ClearInput = () => {
        // @ts-ignore
        dispatch(setSearchValue(''))
        setValue('')

        // @ts-ignore

        setValue('')
        inputRef.current?.focus()

    }

    return (
        <div className={styles.root}>
            <img className={styles.icon} width={20} height={20} src='.././image/search.png' alt='loop'/>

            <input
                ref={inputRef}
                value={value}
                onChange={OnChangeInput}
                className={styles.input}
                placeholder='Search for tickets...'/>
            {value && (
                <img
                    onClick={() => ClearInput()}
                    className={styles.iconCross} width={14} height={14} src='.././image/crossForSearch.png'
                    alt='cross'/>)}


        </div>
    );
};

export default SearchTickets;