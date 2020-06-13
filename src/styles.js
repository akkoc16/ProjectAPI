import {StyleSheet,Dimensions} from 'react-native'

const styles = {
    item: StyleSheet.create({
        container : {
            backgroundColor: "#ffcac2",
            padding: 10,
            margin: 5,
            borderRadius: 10,
        },
        songname :{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center"
        },
        image : {
            height: Dimensions.get("window").height/ 2,
            borderRadius: 30,
            resizeMode: "cover",
            justifyContent: "center"
        },
        artistname: {
            fontSize: 15,
            color: "purple",
            textAlign: "center",
            marginTop: 5
        }
    }),
    search: StyleSheet.create({
        container: {
            backgroundColor: "#f4ebc1",
            margin: 10,
            padding: 10,
            borderRadius: 10,
            shadowOpacity: 10,
            shadowRadius: 10,
        }
    })
}

export default styles