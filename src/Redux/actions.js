export const ACTION_TOGGLE_FAVOURITE = "ACTION_TOGGLE_FAVOURITE"
export const ACTION_SORT_CARDS = "ACTION_SORT_CARDS"
export const ACTION_FETCH_CARDS = "ACTION_FETCH_CARDS"
export const ACTION_FETCH_TOGGLE = "ACTION_FETCH_TOGGLE"
export const ACTION_GET_CATS_COUNT = "ACTION_GET_CATS_COUNT"


export const getCatsCount = (count) => {
    return {
        type: ACTION_GET_CATS_COUNT,
        payload: count
    }
}

export const fetchToggle = (value) => {
    return {
        type: ACTION_FETCH_TOGGLE,
        payload: value
    }
}

export const fetchCards = (results) => {
    return {
        type: ACTION_FETCH_CARDS,
        payload: results
    }
}

export const toggleSortCards = (newID) => {
    return {
        type: ACTION_SORT_CARDS,
        id: newID
    }
}

export const toggleIsFavourite = (newValue, newID) => {
    return {
        type: ACTION_TOGGLE_FAVOURITE,
        payload: newValue,
        id: newID
    }
}



export default fetchCards;

