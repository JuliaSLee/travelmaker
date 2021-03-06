import axios from 'axios'

const GET_TRIPS = 'GET_TRIPS'
const GET_SINGLETRIP = 'GET_SINGLETRIP'

let initialState = {allTrips: [], singleTrip: {}}

export const getTrips = trips => ({
  type: GET_TRIPS,
  trips
})

export const getSingleTrip = trip => ({
  type: GET_SINGLETRIP,
  trip
})

export const fetchTrips = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/trip')
    dispatch(getTrips(data))
  } catch (err) {
    console.log(err)
  }
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TRIPS:
      return {...state, allTrips: [...action.trips]}
    case GET_SINGLETRIP:
      return {...state, singleTrip: action.trip}
    default:
      return state
  }
}
