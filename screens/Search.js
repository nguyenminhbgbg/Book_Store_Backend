import React, {useEffect} from "react";
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    ScrollView,
    TextInput,
    StyleSheet,
    FlatList
} from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { useSelector, useDispatch } from 'react-redux';
import { getBooks, addBookmark, removeBookmark, searchBook,cancelSearch } from '../redux/actions';

const Search = ({ navigation }) => {
    const { books,booksSearch,search, bookmarks } = useSelector(state => state.booksReducer);
    const dispatch = useDispatch();
  
    const fetchBooks = () => dispatch(getBooks());
    const addToBookmarkList = book => dispatch(addBookmark(book));
    const SearchBook = text => dispatch(searchBook(text));
    const cancelSearchBook = () => dispatch(cancelSearch() );


    const removeFromBookmarkList = book => dispatch(removeBookmark(book));
  
    useEffect(() => {
      fetchBooks();
    }, []);
  
    const handleAddBookmark = book => {
      addToBookmarkList(book);
    };
  
    const handleRemoveBookmark = book => {
      removeFromBookmarkList(book);
    };
  
    const ifExists = book => {
      if (bookmarks.filter(item => item._id === book._id).length > 0) {
        return true;
      }
  
      return false;
    };
  
    const renderItem = ({ item }) => {
        return (
            <View style={{ marginVertical: SIZES.base }}>
                <TouchableOpacity
                    style={{ flex: 1, flexDirection: 'row' }}
                    onPress={() => navigation.navigate("BookDetail", {
                        book: item
                    })}
                >
                    {/* Book Cover */}
                    <Image
                        source={{uri: `http://10.0.2.2:3000${item.bookCover}`}}
                        resizeMode="cover"
                        style={{ width: 100, height: 150, borderRadius: 10 }}
                    />

                    <View style={{ flex: 1, marginLeft: SIZES.radius }}>
                        {/* Book name and author */}
                        <View>
                            <Text style={{ paddingRight: SIZES.padding, ...FONTS.h2, color: COLORS.white }}>{item.bookName}</Text>
                            <Text style={{ ...FONTS.h3, color: COLORS.lightGray }}>{item.author}</Text>
                        </View>

                        {/* Book Info */}
                        <View style={{ flexDirection: 'row', marginTop: SIZES.radius }}>
                            <Image
                                source={icons.page_filled_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.lightGray
                                }}
                            />
                            <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.pageNo}</Text>

                            <Image
                                source={icons.read_icon}
                                resizeMode="contain"
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: COLORS.lightGray
                                }}
                            />
                            <Text style={{ ...FONTS.body4, color: COLORS.lightGray, paddingHorizontal: SIZES.radius }}>{item.readed}</Text>
                        </View>

                        {/* Genre */}
                        <View style={{ flexDirection: 'row', marginTop: SIZES.base }}>
                            {
                                item.genre.includes("Adventure") &&
                                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkGreen, height: 40, borderRadius: SIZES.radius }}>
                                    <Text style={{ ...FONTS.body3, color: COLORS.lightGreen }}>Adventure</Text>
                                </View>
                            }
                            {
                                item.genre.includes("Romance") &&
                                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkRed, height: 40, borderRadius: SIZES.radius }}>
                                    <Text style={{ ...FONTS.body3, color: COLORS.lightRed }}>Romance</Text>
                                </View>
                            }
                            {
                                item.genre.includes("Drama") &&
                                <View style={{ justifyContent: 'center', alignItems: 'center', padding: SIZES.base, marginRight: SIZES.base, backgroundColor: COLORS.darkBlue, height: 40, borderRadius: SIZES.radius }}>
                                    <Text style={{ ...FONTS.body3, color: COLORS.lightBlue }}>Drama</Text>
                                </View>
                            }
                        </View>
                    </View>
                </TouchableOpacity>

                {/* Bookmark Button */}
                <TouchableOpacity
                    style={{ 
                        position: 'absolute', 
                        top: 5, 
                        right: 15, 
                        borderRadius: 20,
                        height: 40, 
                        width: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: ifExists(item) ? '#F96D41' : '#2D3038', }}
                    onPress={() =>
                        ifExists(item)
                          ? handleRemoveBookmark(item)
                          : handleAddBookmark(item)
                      }
                >
                    <Image
                        source={icons.bookmark_icon}
                        resizeMode="contain"
                        style={{
                            width: 25,
                            height: 25,
                            tintColor: COLORS.lightGray
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }
    
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#1E1B26' }}>
        <View style={{ flex: 1, paddingHorizontal: 16 , marginTop: 10}}>
          <Text style={{ paddingRight: SIZES.padding, ...FONTS.h1, color: COLORS.white , paddingLeft:15}}>Tìm kiếm sách</Text>
              <View style={{flex: 1, flexDirection: 'row',minWidth:'95%', maxWidth:'95%', maxHeight:60}}>
                  <TextInput
                    style={styles.textInputStyle}
                    onChangeText={(text) => SearchBook(text)}
                    value={search}
                    underlineColorAndroid="transparent"
                    placeholder="Search Here"
                />
                <TouchableOpacity 
                onPress={() => cancelSearchBook() }
                style={styles.cancelSearch}>
                <Text style={{...FONTS.h3, color: COLORS.white }}>Cancel</Text>
                </TouchableOpacity>
            </View>
          <View style={{ flex: 1, marginTop: 8 }}>
            <FlatList
              data={booksSearch}
              keyExtractor={item => item._id.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
  
// const Search = ({ navigation }) => {
//   const [search, setSearch] = React.useState('');

//   const [filteredDataSource, setFilteredDataSource] = React.useState([]);
//   const [masterDataSource, setMasterDataSource] = React.useState([]);

//   useEffect(() => {
//     axios.get('http://10.0.2.2:3000/api/book')
//         .then((response) => {
//             setFilteredDataSource(response.data);
//             setMasterDataSource(response.data);
//         })
//         .catch(function (error) {
//             alert(error.message);
//           });
//   }, []);

//   const searchFilterFunction = (text) => {
//     // Check if searched text is not blank
//     if (text) {
//       // Inserted text is not blank
//       // Filter the masterDataSource
//       // Update FilteredDataSource
//       const newData = masterDataSource.filter(
//         function (item) {
//           const itemData = item.bookName
//             ? item.bookName.toUpperCase()
//             : ''.toUpperCase();
//           const textData = text.toUpperCase();
//           return itemData.indexOf(textData) > -1;
//       });
//       setFilteredDataSource(newData);
//       setSearch(text);
//     } else {
//       // Inserted text is blank
//       // Update FilteredDataSource with masterDataSource
//       setFilteredDataSource(masterDataSource);
//       setSearch(text);
//     }
//   };

//   return (
//       <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
//           <ScrollView style={{ marginTop: SIZES.radius }}>
//             <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: SIZES.padding }}>

//                 <Text style={{ paddingRight: SIZES.padding, ...FONTS.h1, color: COLORS.white , paddingLeft:15}}>Tìm kiếm sách</Text>
//                 <View style={{flex: 1, flexDirection: 'row',minWidth:'95%', maxWidth:'95%'}}>
//                     <TextInput
//                         style={styles.textInputStyle}
//                         onChangeText={(text) => searchFilterFunction(text)}
//                         value={search}
//                         underlineColorAndroid="transparent"
//                         placeholder="Search Here"
//                     />
//                     <TouchableOpacity 
//                     onPress={() => searchFilterFunction('')}
//                     style={styles.cancelSearch}>
//                     <Text style={{...FONTS.h3, color: COLORS.white }}>Cancel</Text>
//                     </TouchableOpacity>
//                 </View>
                
//             </View>
//               {/* Books Section */}
//               <View>
//                   {renderMyBookSection(filteredDataSource)}
//               </View>

//             </ScrollView>
//       </SafeAreaView>
    
//   );
// }

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    itemStyle: {
      padding: 10,
    },
    textInputStyle: {
      height: 45,
      borderWidth: 1,
      paddingLeft: 20,
      margin: 5,
      borderColor: '#009688',
      backgroundColor: '#FFFFFF',
      borderRadius: 50,
      flex:5
    },
    cancelSearch: {
        borderColor: '#009688',
        backgroundColor: '#908e8e',
        borderRadius: 50,
        alignItems:'center',
        justifyContent:"center",
        paddingRight: SIZES.padding,
        height:35,
        ...FONTS.h2,
        color: COLORS.white,
        paddingLeft: 18,
        marginTop:10,
        marginBottom:10,

    }
  });

export default Search;