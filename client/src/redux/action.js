import axios from 'axios';

export const GET_DOG = 'GET_DOG';
export const GET_DETAILS = 'GET_DETAILS';
export const GET_SEARCH_BY_NAME = 'GET_SEARCH_BY_NAME';
export const CLEAN_DETAIL = 'CLEAN_DETAIL';
export const GET_TEMPERAMENTS = 'GET_TEMPERAMENTS';
export const FILTER_BY_TEMP = 'FILTER_BY_TEMP';
export const ORDER_BY = 'ORDER_BY';
export const CREATE = 'CREATE';
export const API_OR_OWN = "API_OR_OWN";


// FUNCTION FOR GET ALL DOGS //
export function getAllDog() {
    return async function (dispatch) {
        try {
            let allDog = await axios.get('/dog');
            return dispatch({
                type: GET_DOG,
                payload: allDog.data
            })
        } catch (error) {
            console.log({ 'Fail actions getAllDog': error });
        };
    };
};

// ACTION TO RENDER CARD OF DETAILS //
export function details(id) {
    return async function (dispatch) {
        try {
            const details = await axios.get(`/dog/${id}`);
            console.log(details.data)
            return dispatch({
                type: GET_DETAILS,
                payload: details.data[0]
            })
        } catch (error) {
            console.log({ 'Fail actions details': error });
        }
    }
};

// ACTION TO RESET DETAIL STATE //
export function cleanDetail() {
    return ({
        type: CLEAN_DETAIL
    })
}

// ACTION TO FIND BY NAME IN THE SEARCHBAR //
export function searchByName(name) {
    return async function (dispatch) {
        try {
            const search = await axios.get(`/dogs?name=${name}`);
            //console.log(search.data)
            return dispatch({
                type: GET_SEARCH_BY_NAME,
                payload: search.data
            });
        } catch (error) {
            console.log({ 'Fail actions searchByName': error });
        }
    }
};

// ACTION TO GET ALL TEMPERAMENT FROM THE BACKEND //
export function getTemp() {
    return async function (dispatch) {
        try {
            const temperament = await axios.get('/temperament');
            //console.log('action Temp',temperament.data)
            return dispatch({
                type: GET_TEMPERAMENTS,
                payload: temperament.data,
            });
        } catch (error) {
            console.log({ 'Fail actions getTemperaments': error })
        }
    }
}

//FUNCTION TO FILTER BY TEMPERAMENT //
export function filterByTemp(payload) {
    return {
        type: FILTER_BY_TEMP,
        payload
    }
}

// ACTION TO ORDER //
export function orderBy(payload) {
    return {
        type: ORDER_BY,
        payload
    }
}

//ACTION TO SELECT THE ORIGIN OF INFORMATION //
export function apiOrOwn(payload) {
    return {
        type: API_OR_OWN,
        payload
    }
}

// ACTION TO SEND THE INFORMATION COLLECT IN THE FORM, FOR CREATE A NEW BREED//
export function dogCreator(payload) {
    return async function (dispatch) {
        try {
            let creator = await axios.post('/dog', payload);
            return dispatch({
                type: CREATE,
                payload: creator.data
            })
        } catch (error) {
            console.log({ 'Fail dogCreator': error })
        }
    }
}