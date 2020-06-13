import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { SafeAreaView, View, Text, Button, FlatList,Image, ActivityIndicator, Alert, Appearance} from 'react-native'
import {Item, SearchBar} from './components'


const Main = () => {
  const [originalList, setoriginalList] = useState([])
  const [myList, setList] = useState([])
  const [loading, setLoading] = useState(false)

  const userColor = Appearance.getColorScheme()
  
  useEffect(()=>{
    fetchData()
  }, [])

  const fetchData = () => {

    console.log("İstek başlasın")
    axios.get("https://rallycoding.herokuapp.com/api/music_albums")

    .then((response) => {
      setLoading(true)
      setList(response.data)
      setoriginalList(response.data)
      console.log("cevap alındı")
      setLoading(false)
    })

    .catch((error) => {
      //Hata alınırsa gösterilecek durum
      setLoading(false)
      Alert.alert("ProjectAPI", "Bir hata oluştu.")
    })
    console.log("istek tamamlandı")
  }

  const renderSongs = ({ item }) => {
    return (
      <Item data={item}/>
    )
  }
  const SearchSong = (text) => {
    let filteredList = originalList.filter(function (item){
      const itemData = item.title.toUpperCase()
      const textData = text.toUpperCase()
      return (
        itemData.indexOf(textData) > -1
      )
    })
    setList(filteredList)
  }
  return(
    <SafeAreaView style={{flex:1, backgroundColor: userColor == "Light" ? "gray" : "#ccafaf"}}>
      <View style={{flex:1}}>
        <SearchBar onSearch={SearchSong}>
        </SearchBar>
        {  //Conditional render
            <FlatList
              refreshing ={loading}
              onRefresh={fetchData}
              keyExtractor={(item,index) => index.toString()} 
              data={myList} 
              renderItem={renderSongs}
            ></FlatList>
        }
      </View>
    </SafeAreaView>
  )
}

export default Main