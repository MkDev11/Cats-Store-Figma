import { getCatsCount } from '../Actions/headerActions'
import { fetchCards, fetchToggle, setFetchErrorMessage, setFetchErrorStatus } from "../Actions/cardActions";
import url from "../../assets/images/no_photo.png";

const requestHandler = () => {
    return async function (dispatch) {
        try {
            const response = await fetch(`htps://api.thecatapi.com/v1/breeds?api_key=8df551cd-f3e4-4f5d-947a-5c7e82d333ca&limit=6&page=1`)
            const data = await response.json()

            setTimeout(() => {
                dispatch(fetchToggle(false))
            }, 900)

            const responseData = data
            const actualData = []

            responseData.forEach(item => {
                if (item["image"] === undefined) {
                    const wrongItem = item
                    wrongItem.image = { url }
                }
                if (Object.keys(item.image).length === 0 && item.image.constructor === Object) {
                    const wrongItem = item
                    wrongItem.image = { url }
                }
                // /. response validation
                actualData.push(
                    {
                        id: `${Math.random() + item.id}`,
                        image: item.image.url,
                        name: item.name,
                        location: item.origin,
                        paw: "4",
                        age: `${Math.floor(Math.random() * 12) + 1} мес.`,
                        price: `${Math.floor(Math.random() * 10000) + 1500} руб.`,
                        discount: `-${Math.floor(Math.random() * 60) + 10}%`,
                        discountStatus: Boolean(Math.round(Math.random())),
                        cardStatus: Boolean(Math.round(Math.random())),
                        isFavourite: false,
                    }
                )
            })
            dispatch(fetchCards(actualData))
            dispatch(getCatsCount(response.headers["pagination-count"]))
        } catch (error) {
            dispatch(setFetchErrorMessage(`There are some problems with resonse: ${error.message}.`))
            setTimeout(() => {
                dispatch(fetchToggle(false))
                dispatch(setFetchErrorStatus(true))
            }, 600);
        }
    }
}


export default requestHandler;

