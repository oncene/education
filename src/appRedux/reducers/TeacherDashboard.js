import {
	GET_USER_DETAILS,
	GET_SCHOOL_DETAILS,
	SHOW_PARALLEL,
	NEW_PARALLEL,
	SHOW_SUBJECT,
	NEW_SUBJECT
} from "constants/ActionTypes";


const INIT_STATE = {
  loader: false,
  user_details:[],
  school_details:[],
  parallels:[],
  subjects:[]
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USER_DETAILS: {
      return {
        ...state,
        user_details: action.user_details
      }
    }
    case GET_SCHOOL_DETAILS: {
      return {
        ...state,
        school_details: action.school_details
      }
    }
    case NEW_PARALLEL: {
      return {
        ...state,
        parallels: action.parallels
      }
    }
    case SHOW_PARALLEL: {
      return {
        ...state,
        parallels: action.parallels
      }
    }
    default:
      return state;
  }
}