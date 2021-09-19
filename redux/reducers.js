import {
  GET_BOOKS,
  GET_BOOKS_BEST_SELLER,
  GET_BOOKS_THE_LATEST,
  GET_BOOKS_COMING_SOON,
  ADD_TO_BOOKMARK_LIST,
  REMOVE_FROM_BOOKMARK_LIST,
  SEARCH_BOOK_LIST,
  CANCEL_SEARCH_BOOK,
  GET_CHAPTER,
  CHOICE_CHAPTER_LIST,
  DATA_BOOK_READING,
  CLEAR_CHAPTER_BOOK,
  PLUS_ONE_FONT,
  LOW_ONE_FONT,
  LIGHT_MODE,
  LIGHT2_MODE,
  DARK_MODE,
  LOGIN_ACTION,
  SIGN_UP_ACTION
} from './actions';

const initialState = {
  books: [],
  chapter: [],
  booksSearch: [],
  booksBestSeller: [],
  booksTheLatest: [],
  booksComingSoon: [],
  bookmarks: [],
  search: '',
  loadReadingBook: false,
  chapterReading:[],
  dataBookReadingNow: [],
  fontReading: 18,
  fontTitleReading: 26,
  fontColor: '#000',
  backgroundColor: '#FFF',
  userToken: null,
  mesLogin: null,
  mesRegister: null,


};

function booksReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return { ...state, userToken: action.payload.token , mesLogin: action.payload.message};
    case SIGN_UP_ACTION:
    return { ...state , mesRegister: action.payload.message };
    case GET_BOOKS:
      return { ...state, books: action.payload , booksSearch: action.payload};
    case GET_CHAPTER:
      return { ...state, chapter: action.payload, chapterReading: action.payload[0] };
    case ADD_TO_BOOKMARK_LIST:
      return { ...state, bookmarks: [...state.bookmarks, action.payload] };
    case REMOVE_FROM_BOOKMARK_LIST:
      return {
        ...state,
        bookmarks: state.bookmarks.filter(book => book._id !== action.payload._id)
      };
    case GET_BOOKS_BEST_SELLER:
      return { 
        ...state, 
        booksBestSeller: action.payload
      };
    case GET_BOOKS_THE_LATEST:
    return { 
      ...state, 
      booksTheLatest: action.payload
    };
    case GET_BOOKS_COMING_SOON:
    return { 
      ...state, 
      booksComingSoon: action.payload
    };
    case SEARCH_BOOK_LIST:{
      const text = action.payload;
      if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = state.booksSearch.filter(
        function (item) {
          const itemData = item.bookName
            ? item.bookName.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      state.booksSearch= newData;
      state.search= text;
      // state.booksSearch(newData)
      // state.search(text)
      } else {
        state.booksSearch= state.books;
        state.search= text;
        // state.booksSearch(books)
        // state.search(text)
      }
      return {...state };
    }
    case CANCEL_SEARCH_BOOK: {
      state.search='';
      state.booksSearch= state.books;
      return {...state };
    }

    case CHOICE_CHAPTER_LIST: {
      state.chapterReading= action.payload;
      return {...state };
    }

    case DATA_BOOK_READING: {
      state.dataBookReadingNow= action.payload;
      return {...state };
    }

    case CLEAR_CHAPTER_BOOK: {
      state.chapterReading= [];
      return {...state };
    }

    case PLUS_ONE_FONT: {
      state.fontReading= state.fontReading + 2;
      state.fontTitleReading= state.fontTitleReading + 4;
      return {...state };
    }

    case LOW_ONE_FONT: {
      state.fontReading= state.fontReading - 2;
      state.fontTitleReading= state.fontTitleReading - 4;
      return {...state };
    }

    case LIGHT_MODE: {
      state.fontColor= '#000000' ;
      state.backgroundColor= '#FFF';
      return {...state };
    }

    case LIGHT2_MODE: {
      state.fontColor= '#111827' ;
      state.backgroundColor= '#ffedd5';
      return {...state };
    }

    case DARK_MODE: {
      state.fontColor= '#FFF' ;
      state.backgroundColor= '#111827';
      return {...state };
    }
    default:
      return state;
  }
}

export default booksReducer;
