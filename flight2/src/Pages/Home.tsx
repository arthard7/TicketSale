import React, {useCallback, useRef} from 'react';
import {useState, useEffect} from "react";
import qs from 'qs'
// import axios from "axios";
import {useNavigate} from 'react-router-dom'

import {useSelector} from "react-redux";
import { useWhyDidYouUpdate } from 'ahooks';


import Category from "../Components/Category";
import Sort, {list} from "../Components/Sort";
import TicketBlockSkeleton from "../Components/TicketBlock/TicketBlockSkeleton";
import TicketBlock from "../Components/TicketBlock/TicketBlock";
import Pagination from "../Components/Pagination/Pagination";
// import {useContext} from "react";
import {setCategoryId, setPageCount, setFilters} from "../redux/slice/filterSlice";
import {setItems, fetchTickets} from "../redux/slice/TicketSlice";
import {Link} from "react-router-dom";
import sort from "../Components/Sort";
import {useAppDispatch} from "../redux/store";
import {types} from "sass";
import String = types.String;
import {add} from "../utils/math";

const Home: React.FC = () => {
    const isMounted = useRef(false)
    const isSearch = useRef(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const selectedCategory = useSelector((state: any) => state.filterSlice.categoryId)
    const selectedSort = useSelector((state: any) => state.filterSlice.sort.sortProperty)
    const pageCount = useSelector((state: any) => state.filterSlice.pageCount)
    const {items, status} = useSelector((state: any) => state.ticket)
    const searchValue = useSelector((state: any) => state.filterSlice.searchValue)

    const setSelectedCategory = useCallback((id: number) => {
        //@ts-ignore
        dispatch(setCategoryId(id))
    },[])


    const [orderType, setOrderType] = useState('asc')
    const category = selectedCategory > 0 ? `category=${selectedCategory}` : ''
    const search = searchValue ? `&search=${searchValue}` : ''


    const onChangePage = (page: number) => {
        //@ts-ignore
        dispatch(setPageCount(page))
    }


    const getTickets = async () => {


        dispatch(
            fetchTickets({
                category,
                search,
                pageCount,
                orderType,
                selectedSort
            })
        )

        window.scrollTo(0, 0)
    }

// Если изменили параметры и был первый рендер ↓
    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                selectedSort: selectedSort,
                selectedCategory,
                pageCount
            })


            navigate(`?${queryString}`)
        }

        isMounted.current = true

    }, [selectedCategory, selectedSort, pageCount])


//    Если был первый рендер, то проверяем URL-параметры и сохраняем в редакс ↓
    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sort = list.find((obj) => obj.sortProperty === params.selectedSort)


            if(sort){
                params.selectedSort = sort
            }


            dispatch(
                setFilters({
                    //@ts-ignore
                    ...params, sort
                })
            )
            isSearch.current = true
        }
    }, [])

// Если был первый рендер то запрашиваем билеты с бэка
    useEffect(() => {
        if (!isSearch.current) {
            getTickets()
        }
        isSearch.current = false

        // setIsLoading(true)
        // axios.get(`https://64baabff5e0670a501d68343.mockapi.io/Items?page=${pageCount}&limit=4&${category}&sortBy=${selectedSort.sortProperty}&order=${orderType}${search}`)
        //     .then((res => {
        //     setItems(res.data)
        //     setIsLoading(false)
        // }))
        //
        // window.scrollTo(0, 0)
    }, [selectedCategory, selectedSort, orderType, searchValue, pageCount])


    const Skeleton = [...new Array(8)].map((elem, index) => <TicketBlockSkeleton key={index}/>)

    const RenderTickets = items
        .map((obj: any) => (
            <TicketBlock
                key={obj.id}
                title={obj.title}
                price={obj.price}
                imageUrl={obj.imageUrl}
                schedule={obj.sizes}
                types={obj.types}
                id={obj.id}
            />
        ))

    // const RenderTickets = items.map((obj) => (<TicketBlock key={obj.id} {... obj}/>))


add(555,666)

    return (

        <div className='container'>
            <div className="content__top">
                <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                <Sort setOrderType={setOrderType}/>
            </div>
            <h2 className="content__title">All tickets</h2>
            {
                status === 'error' ? <div className='cart cart--empty'>
                    <h2> Error </h2>
                    <p>
                        We were unable to load this page.<br/>
                        Please try again
                    </p>

                </div> : <div className="content__items">
                    {status === 'loading'
                        ? Skeleton
                        : RenderTickets}
                </div>
            }


            <Pagination pageCount={pageCount} onChangePage={onChangePage}/>

        </div>
    );
};

export default Home;