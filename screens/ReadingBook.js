import React, {useEffect} from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { Slide, NativeBaseProvider } from "native-base"
import { useSelector, useDispatch } from 'react-redux';
import { getDetailBook , clearChapterBook, plusOneFont, lightMode, light2Mode, darkMode ,lowOneFont} from '../redux/actions';
import { COLORS, FONTS, SIZES, icons } from '../constants';

const ReadingBook = ({ route, navigation }) => {

  const [isOpen, setIsOpen] = React.useState(false);
  const { chapter, dataBookReadingNow, fontColor, backgroundColor, chapterReading,fontReading, fontTitleReading } = useSelector(state => state.booksReducer);
  const [book, setBook] = React.useState(null);

  const dispatch = useDispatch();

  const fetchBooks = (bookId) => dispatch(getDetailBook(bookId));
  const PlusOneFont = () => dispatch(plusOneFont());
  const LowOneFont = () => dispatch(lowOneFont());

  const LightMode = () => dispatch(lightMode());
  const Light2Mode = () => dispatch(light2Mode());
  const DarkMode = () => dispatch(darkMode());

  const ClearChapterBook = () => dispatch(clearChapterBook());


  useEffect(() => {
    let { book } = route.params;
        setBook(book)
    fetchBooks(book);
  }, [book]);

  useEffect(() => {
    console.log( book)
    console.log("chapter reading: " + chapterReading)

  }, [book]);
    return (
        <NativeBaseProvider>
            <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <SafeAreaView style={{ flex: 1 }}>
              {/* Navigation header */}
              <View style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius, height: '8%',justifyContent:'center', alignItems: 'center' , backgroundColor:COLORS.black}}>
                  <TouchableOpacity
                      style={{ marginLeft: SIZES.base }}
                      onPress={() => (ClearChapterBook(), navigation.goBack())}
                  >
                      <Image
                          source={icons.back_arrow_icon}
                          resizeMode="contain"
                          style={{
                              width: 25,
                              height: 25,
                              tintColor: COLORS.white
                          }}
                      />
                  </TouchableOpacity>
    
                  <View style={{ flex: 1, marginLeft: 10 ,alignItems: 'flex-start', justifyContent: 'center' }}>
                      <Text style={{ ...FONTS.h3, color: COLORS.white }}>{dataBookReadingNow.bookName}</Text>
                  </View>
                  <TouchableOpacity
                      style={{ marginRigth: SIZES.base }}
                      onPress={() => setIsOpen(!isOpen)}
                  >
                      <Image
                          source={icons.Aa}
                          resizeMode="contain"
                          style={{
                              width: 60,
                              height: 60,
                              tintColor: COLORS.white,
                              alignSelf: 'flex-end'
                          }}
                      />
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                      style={{ marginLeft: SIZES.base }}
                      onPress={() => navigation.navigate("AllChapter", {
                        chapter
                    })}
                  >
                      <Image
                          source={icons.hamburger_menu}
                          resizeMode="contain"
                          style={{
                              width: 40,
                              height: 40,
                              tintColor: COLORS.white
                          }}
                      />
                  </TouchableOpacity>
              </View>
              <ScrollView style={{backgroundColor: backgroundColor}}>
              <View style={{ flex: 1, justifyContent: "center", alignItems: "center", marginTop:10 }}>
                  <Text style={{flex:1,fontSize: fontTitleReading, color: fontColor, alignItems:'center', justifyContent:'center', textAlign:'center'}}>
                    {chapterReading.chapterName}
                    {/* Chương 99: Gió đưa cành trúc la đà */}
                  </Text> 
                  <Text style={{flex:9 , fontSize: fontReading, marginHorizontal: '3%', color: fontColor}}>
                  {chapterReading.content}
                  </Text>
              </View>
              </ScrollView>
                <Slide in={isOpen} >
                        <View style={{ flexDirection:'column', backgroundColor:'#27272a'}}>
                            <Text style={{marginTop:15, marginLeft: 20,marginBottom:7, fontSize: SIZES.h4 , color:COLORS.white}}>Màu trang</Text>
                            <View style={{flex:1, marginLeft:20, flexDirection:'row', alignItems:'center', justifyContent:'center', maxWidth:'90%'}}>
                                <TouchableOpacity 
                                onPress={() => LightMode() }
                                style={{flex:1 , alignItems:'center', justifyContent:'center' , borderColor: 'gray', borderWidth: 0.5, paddingTop:10, paddingBottom:10}}>
                                    <Image
                                        source={icons.sun}
                                        resizeMode="contain"
                                        style={{
                                            width: 30,
                                            height: 30,
                                            tintColor: COLORS.white
                                        }}
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity
                                onPress={() => Light2Mode() } 
                                style={{flex:1 , alignItems:'center', justifyContent:'center' ,borderColor: 'gray', borderWidth: 0.5,  paddingTop:10, paddingBottom:10}}>
                                    <Image
                                            source={icons.Sun_liter}
                                            resizeMode="contain"
                                            style={{
                                                width: 30,
                                                height: 30,
                                                tintColor: COLORS.white
                                            }}
                                        />
                                </TouchableOpacity>
                                <TouchableOpacity 
                                onPress={() => DarkMode() }
                                style={{flex:1 , alignItems:'center', justifyContent:'center' ,borderColor: 'gray', borderWidth: 0.5,  paddingTop:10, paddingBottom:10}}>
                                    <Image
                                            source={icons.moon_icon}
                                            resizeMode="contain"
                                            style={{
                                                width: 30,
                                                height: 30,
                                                tintColor: COLORS.white
                                            }}
                                        />
                                </TouchableOpacity>
                            </View>
                            <Text style={{marginTop:15, marginLeft: 20,marginBottom:7, fontSize: SIZES.h4 , color:COLORS.white}}>Phông chữ</Text>
                            
                            
                            <View style={{flex:1, marginLeft:20,marginBottom: 10, flexDirection:'row', alignItems:'center', justifyContent:'center', maxWidth:'90%'}}>
                                {fontReading<=28 ?
                                    <TouchableOpacity 
                                    onPress={() => PlusOneFont() }
                                    style={{flex:1 , alignItems:'center', justifyContent:'center', flexDirection:'row' , borderColor: 'gray', borderWidth: 0.5, paddingTop:5, paddingBottom:5}}>
                                        <Image
                                            source={icons.Aa}
                                            resizeMode="contain"
                                            style={{
                                                width: 40,
                                                height: 40,
                                                tintColor: COLORS.white
                                            }}
                                        />
                                        <Text style={{color:COLORS.white, fontSize: SIZES.h4, marginLeft: -3 }}>+</Text>
                                    </TouchableOpacity>
                                : <TouchableOpacity 
    
                                style={{flex:1 , alignItems:'center', justifyContent:'center', flexDirection:'row' , borderColor: 'gray', borderWidth: 0.5, paddingTop:5, paddingBottom:5}}>
                                    <Image
                                        source={icons.Aa}
                                        resizeMode="contain"
                                        style={{
                                            width: 40,
                                            height: 40,
                                            tintColor: COLORS.lightGray
                                        }}
                                    />
                                    <Text style={{color:COLORS.lightGray, fontSize: SIZES.h4, marginLeft: -3 }}>+</Text>
                                </TouchableOpacity>}
                                {fontReading >=12 ?
                                    <TouchableOpacity 
                                    onPress={() => LowOneFont() }
                                    style={{flex:1 , alignItems:'center', flexDirection:'row', justifyContent:'center' ,borderColor: 'gray', borderWidth: 0.5,  paddingTop:5, paddingBottom:5}}>
                                    <Image
                                            source={icons.Aa}
                                            resizeMode="contain"
                                            style={{
                                                width: 40,
                                                height: 40,
                                                tintColor: COLORS.white
                                            }}
                                        />
                                        <Text style={{color:COLORS.white, fontSize: SIZES.h4, marginLeft: -3 }}>--</Text>
                                    </TouchableOpacity>
                                : <TouchableOpacity 
                                style={{flex:1 , alignItems:'center', flexDirection:'row', justifyContent:'center' ,borderColor: 'gray', borderWidth: 0.5,  paddingTop:5, paddingBottom:5}}>
                                <Image
                                        source={icons.Aa}
                                        resizeMode="contain"
                                        style={{
                                            width: 40,
                                            height: 40,
                                            tintColor: COLORS.lightGray
                                        }}
                                    />
                                    <Text style={{color:COLORS.lightGray, fontSize: SIZES.h4, marginLeft: -3 }}>--</Text>
                                </TouchableOpacity>}
                                
                            </View>
                        </View>
                </Slide>
          </SafeAreaView>
        </NativeBaseProvider>             
      )
  
    
}

export default ReadingBook;

const styles = StyleSheet.create({
    plusFont: {
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderBottomColor: COLORS.lightGray,
      borderBottomWidth: 1,
    },
  });