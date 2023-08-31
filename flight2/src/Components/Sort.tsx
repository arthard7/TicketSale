import React, {useEffect, useRef, useState} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {setSort} from "../redux/slice/filterSlice";
type SortItem = {
    name: string;
    sortProperty: string;
}






export const list: SortItem[] = [
    {name: 'популярности', sortProperty: 'rating'},
    {name: 'цене', sortProperty: 'price'},
    {name: 'алфавиту', sortProperty: 'title'}
]


type SortProps = {
    setOrderType: (str:string) => void;
}

const Sort: React.FC<SortProps> = ({setOrderType}) => {
    const dispatch = useDispatch()
    const sort = useSelector((state:any) => state.filterSlice.sort)

    const [open, setOpen] = useState(false)



    const HandleClickList = (obj: SortItem) => {
        //@ts-ignore
        dispatch(setSort(obj))
        setOpen(false)
    }


    // ниже исправляем баг с добавлением нескольких обработчиков(вынесением в отдельную функцию и в UseEffect удаляем функцию после отработки) и делаем так чтобы по клику на любое место приложение сворачивался поп ап (меню популярность, цена и алфавит)

    const sortRef = useRef<HTMLDivElement>(null) // + добавляем в главный див сорт ref={sortRef}

    const HandleClickSort = ((event: MouseEvent) => {
        if (sortRef.current&& !event.composedPath().includes(sortRef.current)) {
            setOpen(false)
        }
    })
    useEffect(() => {
        document.body.addEventListener('click', HandleClickSort)
        return () => {                                                           // ретёрн  удалет обработчик когда переходишь на другую страницу(умирает юзеффект), обязательно, без него не работает
            document.body.removeEventListener('click', HandleClickSort)
        }
    }, [])

     // выше исправляем баг с добавлением нескольких обработчиков и делаем так чтобы по клику на любое место приложение сворачивался поп ап (меню популярность, цена и алфавит)

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                <svg
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={() => setOpen(!open)}>{sort.name} </span>
            </div>
            <div className='button-sort'>
                <button onClick={() => setOrderType('asc')}> ↓ </button>
                <button onClick={() => setOrderType('desc')}> ↑ </button>
            </div>
            {open && (
                <div className="sort__popup">
                    <ul>
                        {list.map((value, index) => <li
                            key={index}
                            onClick={() => HandleClickList(value)}
                            className={sort.sortProperty === value.sortProperty ? 'active' : ''}>{value.name}</li>)}
                    </ul>
                </div>
            )}

        </div>

    );
};

export default Sort;