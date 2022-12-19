import axios from 'axios';

import { BASE_URL, LATEST_URL,SELLER_URL, SOON_URL, CHAPTER_URL, LOGIN_URL } from '../config';

// Define action types
export const GET_BOOKS = 'GET_BOOKS';
export const GET_BOOKS_BEST_SELLER = 'GET_BOOKS_BEST_SELLER';
export const GET_BOOKS_THE_LATEST = 'GET_BOOKS_THE_LATEST';
export const GET_BOOKS_COMING_SOON = 'GET_BOOKS_COMING_SOON';

export const ADD_TO_BOOKMARK_LIST = 'ADD_TO_BOOKMARK_LIST';
export const REMOVE_FROM_BOOKMARK_LIST = 'REMOVE_FROM_BOOKMARK_LIST';

export const SEARCH_BOOK_LIST = 'SEARCH_BOOK_LIST';
export const CANCEL_SEARCH_BOOK = 'CANCEL_SEARCH_BOOK';

export const GET_CHAPTER = 'GET_CHAPTER';
export const GET_CHAPTER_LIST = 'GET_CHAPTER_LIST';
export const CHOICE_CHAPTER_LIST = 'CHOICE_CHAPTER_LIST';
export const DATA_BOOK_READING = 'DATA_BOOK_READING';

export const CLEAR_CHAPTER_BOOK = 'CLEAR_CHAPTER_BOOK';

export const PLUS_ONE_FONT = 'PLUS_ONE_FONT';
export const LOW_ONE_FONT = 'LOW_ONE_FONT';

export const LIGHT_MODE = 'LIGHT_MODE';
export const LIGHT2_MODE = 'LIGHT2_MODE';
export const DARK_MODE = 'DARK_MODE';

// LOGIN ACTION

export const LOGIN_ACTION = 'LOGIN_ACTION';
export const SIGN_UP_ACTION = 'SIGN_UP_ACTION';
export const LOGOUT_ACTION = 'LOGOUT_ACTION';

export const logOutAction = () => dispatch => {
  dispatch({
    type: LOGOUT_ACTION,
  });
};

export const getBooks = () => {
  try {
    return async dispatch => {
      const response = await axios.get(`${BASE_URL}`);
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: GET_BOOKS,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const getBookBestSeller = () => {
  try {
    return async dispatch => {
      const response = await axios.get(`${SELLER_URL}`);
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: GET_BOOKS_BEST_SELLER,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};


export const getBookTheLatest = () => {
  try {
    return async dispatch => {
      const response = await axios.get(`${LATEST_URL}`);
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: GET_BOOKS_THE_LATEST,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const getBookComingSoon = () => {
  try {
    return async dispatch => {
      const response = await axios.get(`${SOON_URL}`);
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: GET_BOOKS_COMING_SOON,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API BASE URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const addBookmark = book => dispatch => {
  dispatch({
    type: ADD_TO_BOOKMARK_LIST,
    payload: book
  });
};

export const removeBookmark = book => dispatch => {
  dispatch({
    type: REMOVE_FROM_BOOKMARK_LIST,
    payload: book
  });
};

export const searchBook = text => dispatch => {
  dispatch({
    type: SEARCH_BOOK_LIST,
    payload: text
  });
};

export const cancelSearch = () => dispatch => {
  dispatch({
    type: CANCEL_SEARCH_BOOK,
  });
};

export const getDetailBook = book => {
  try {
    return async dispatch => {
      const response = await axios.get(`${CHAPTER_URL}/${book._id}`);
      // console.log('DATA ========>', response.data);
      if (response.data) {
        dispatch({
          type: GET_CHAPTER,
          payload: response.data
        });
      } else {
        console.log('Unable to fetch data from the API CHAPTER URL!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const loadReadingBook = () => dispatch => {
  dispatch({
    type: LOAD_REDING_BOOK,
  });
};

export const getChapterList = () => dispatch => {
  dispatch({
    type: GET_CHAPTER_LIST,
  });
};

export const choiceChapterList = chapter => dispatch => {
  dispatch({
    type: CHOICE_CHAPTER_LIST,
    payload: chapter
  });
};

export const dataBookReading = book => dispatch => {
  dispatch({
    type: DATA_BOOK_READING,
    payload: book
  });
};

export const clearChapterBook = () => dispatch => {
  dispatch({
    type: CLEAR_CHAPTER_BOOK,
  });
};

export const plusOneFont = () => dispatch => {
  dispatch({
    type: PLUS_ONE_FONT,
  });
};

export const lowOneFont = () => dispatch => {
  dispatch({
    type: LOW_ONE_FONT,
  });
};

export const lightMode = () => dispatch => {
  dispatch({
    type: LIGHT_MODE,
  });
};

export const light2Mode = () => dispatch => {
  dispatch({
    type: LIGHT2_MODE,
  });
};

export const darkMode = () => dispatch => {
  dispatch({
    type: DARK_MODE,
  });
};

export const loginAction = (email, pass) => {
  try {
    return async dispatch => {
      const response = await axios.post('http://10.0.2.2:3000/api/login', {
        username: email,
        password: pass
      })
      if (response.data) {
        dispatch({
          type: LOGIN_ACTION,
          payload: response.data
        });
      } else {
        console.log('LOGIN ERR CONNECT!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};

export const signUpAction = (name, email, pass) => {
  try {
    return async dispatch => {
      const response = await axios.post('http://10.0.2.2:3000/api/register', {
        name: name,
        email: email,
        password: pass
      })
      if (response.data) {
        dispatch({
          type: SIGN_UP_ACTION,
          payload: response.data
        });
      } else {
        console.log('SIGN UP ERR CONNECT!');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};