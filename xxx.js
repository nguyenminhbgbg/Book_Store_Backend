import * as React from 'react';
import { Button, View, Text,Image,TextInput,TouchableOpacity,ScrollView, ImageBackground } from 'react-native';
import {Modalize} from 'react-native-modalize'


function LearningScreen({ navigation }) {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate('LearningList')}
                    style={{
                        flexDirection:"row",
                        backgroundColor:"#fdddf3",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>Thì của động từ(Verb tens)</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                Số bài: 23
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
            )
    }

    return (
        <ImageBackground
        source={require('../images/background1.jpg')}
        style={{width:"100%", height:"105%"}}
        >
        <ScrollView>
            {/* Header + Title */}
            <View style={{
                width:"100%",
                alignItems:"flex-end",
                paddingHorizontal:20
            }}>
                
            </View>
            <Text style={{
                paddingHorizontal:20,
                fontSize:35,
                paddingTop:40,
                fontFamily:"Bold",
                color:"#FFF"
            }}>
                LET START!!!
            </Text>
            <Text style={{
                color:"#ffffff",
                fontFamily:"Bold",
                fontSize:20,
                paddingHorizontal:20,
                marginTop:5,
                marginBottom:5
            }}>Danh sách bài học:</Text> 
            {/* End Title */}
            {/* List Bài học */}
            
                <TouchableOpacity
                onPress={() => navigation.navigate('LearningList')}
                    style={{
                        flexDirection:"row",
                        backgroundColor:"#fdddf3",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>Thì của động từ(Verb tens)</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                Số bài: 23
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('LearningList')}
                    style={{
                        flexDirection:"row",
                        backgroundColor:"#fef8e3",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>Động từ đặc biệt(Modal verbs)</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                Số bài: 11
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('LearningList')}
                    style={{
                        flexDirection:"row",
                        backgroundColor:"#fcf2ff",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>Câu điều kiện(Conditionals)</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                Số bài: 6
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('LearningList')}
                    style={{
                        flexDirection:"row",
                        backgroundColor:"#fff0ee",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>Dạng bị động(Passive)</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                Số bài: 5
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('LearningList')}
                    style={{
                        flexDirection:"row",
                        backgroundColor:"#fdddf3",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>Lời nói tương thuật(Reported speech)</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                Số bài: 2
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('LearningList')}
                    style={{
                        flexDirection:"row",
                        backgroundColor:"#fef8e3",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>Câu hỏi(Questions)</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                Số bài: 4
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('LearningList')}
                    style={{
                        flexDirection:"row",
                        backgroundColor:"#fcf2ff",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>Động từ -ING & động từ nguyên mẫu</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                Số bài: 4
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('LearningList')}
                    style={{
                        flexDirection:"row",
                        backgroundColor:"#fff0ee",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>Danh từ(Nouns) & Đại từ(Pronouns)</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                Số bài: 9
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('LearningList')}
                    style={{
                        flexDirection:"row",
                        backgroundColor:"#fdddf3",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>Mệnh đề quan hệ(Relative Clauses)</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                Số bài: 9
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('LearningList')}
                    style={{
                        flexDirection:"row",
                        backgroundColor:"#fef8e3",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>Tính từ(Adj) & trạng từ(Adv)</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                Số bài: 10
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate('LearningList')}
                    style={{
                        flexDirection:"row",
                        backgroundColor:"#fcf2ff",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>Trật Tự Từ(Word Order)</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                Số bài: 8
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
                <TouchableOpacity
                
                onPress={() => navigation.navigate('LearningList')}
                    style={{
                        flexDirection:"row",
                        backgroundColor:"#fff0ee",
                        padding:15,
                        marginHorizontal:5,
                        borderRadius:20,
                        alignItems:"center",
                        marginTop:5,
                        marginBottom:50
                    }}>
                        <Image
                        source={require('../images/unicorn.png')}
                        style={{width:40,height:40}}
                        />
                        <View>
                            <Text style={{
                                color:"#345c74",
                                fontFamily:"Bold",
                                fontSize:13,
                                paddingHorizontal:20,
                                width:250
                            }}>Giới Từ(Prepositions)</Text>
                            <Text style={{
                                color:"#f58084",
                                fontFamily:"Medium",
                                fontSize:15,
                                paddingHorizontal:20
                            }}>
                                Số bài: 16
                            </Text>
                        </View>
                        <Image
                        source={require('../images/pl.png')}
                        style={{width:20,height:20}}
                        />
                </TouchableOpacity>
            </ScrollView>
        </ImageBackground>
    );
}
export default LearningScreen;
