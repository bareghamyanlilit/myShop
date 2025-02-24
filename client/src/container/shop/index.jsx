import { useTranslation } from 'react-i18next'
import { BasketImg, BasketItem, MainDiv } from "./styled"
import { useState} from "react"
import { Link } from 'react-router-dom'
export const MyBasketPage = ({setBasketCount}) => {
	const { t } = useTranslation()

    const [value , setValue] = useState(JSON.parse(localStorage.getItem("basket")) || [])
    console.log(value);
    const deleteItem = (index) => {
        let basket = value.slice()
        basket = basket.filter((e , i) => {
            return i !== index
        })
        setValue(basket)
        setBasketCount(basket.length)
        localStorage.setItem("basket" , JSON.stringify(basket))
        
    }
    return (
        <>
            <MainDiv>
               {value?.length > 0 ? value?.map((e , i) => {
                return(
                    <BasketItem key={e+i}>
                        
						<Link to={`/product/${e.id}`} state={e}>
                            <BasketImg src={e.src}/>
                        </Link>
                        <p>{t('Price')}: {e.price}</p> 
                        <button onClick={() => deleteItem(i)}>X</button>
                    </BasketItem>
                )
               })
            :
            <h1>datark e</h1>}
            </MainDiv>
        </>
    )
}

