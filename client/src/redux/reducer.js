import { GET_DOG, GET_DETAILS, GET_SEARCH_BY_NAME, CLEAN_DETAIL, GET_TEMPERAMENTS, FILTER_BY_TEMP, ORDER_BY, CREATE, API_OR_OWN } from './action';

const initialState = {
    dog: [],
    allDog: [],
    temp: [],
    details: [],
};

export default function rootReducer(state = initialState, action) {

    switch (action.type) {

        case GET_DOG:
            return {
                ...state,
                dog: action.payload,
                allDog: action.payload,
            }

        case GET_DETAILS:
            return {
                ...state,
                details: action.payload,
            }

        case GET_SEARCH_BY_NAME:
            return {
                ...state,
                dog: action.payload,
            }

        case CLEAN_DETAIL:
            return {
                ...state,
                details: [],
            }

        case GET_TEMPERAMENTS:
            return {
                ...state,
                temp: action.payload,
            }

        case FILTER_BY_TEMP:
            let dogs = state.allDog;
            let filter = action.payload === 'All' ? dogs : dogs.filter((e) => e.temperament?.includes(action.payload))
            return {
                ...state,
                dog: filter,
            }

        case ORDER_BY:
            let order;
            if (action.payload === "A-Z") {
                order = state.dog.sort(function (a, b) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (b.name > a.name) {
                        return -1;
                    }
                    return 0;
                })
            }

            else if (action.payload === "Z-A") {
                order = state.dog.sort(function (a, b) {
                    if (a.name > b.name) {
                        return -1;
                    }
                    if (b.name > a.name) {
                        return 1;
                    }
                    return 0;
                })
            }

            else if (action.payload === "Asc") {
                order = state.dog.sort(function (a, b) {
                    if (a.min_weight > b.min_weight) {
                        return 1;
                    }
                    if (b.min_weight > a.min_weight) {
                        return -1;
                    }
                    return 0;
                })
            }

            else if (action.payload === "Des") {
                order = state.dog.sort(function (a, b) {
                    if (a.max_weight > b.max_weight) {
                        return -1;
                    }
                    if (b.max_weight > a.max_weight) {
                        return 1;
                    }
                    return 0;
                })
            }
            return {
                ...state,
                dog: order
            }
            
        case CREATE:
            return {
                ...state
            }

        case API_OR_OWN:
            let array;
            if (action.payload === 'Own') {
                array = state.allDog.filter((e) => e.createdOnDb === true)
            } else if (action.payload === 'Api') {
                array = state.allDog.filter((e) => e.createdOnDb === false)
            } else {
                array = state.allDog;
            }
            return {
                ...state,
                dog: array
            }

        default:
            return { ...state }
    }
};