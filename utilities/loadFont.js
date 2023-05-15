import * as Font from 'expo-font';

export async function fonts() {
    try{
        await Font.loadAsync({
            "PoppinsBold": require("../assets/fonts/Poppins-Bold.ttf"),
            "RalewayItalic": require("../assets/fonts/Raleway-Italic.ttf"),
          });
    }
    catch(e){
        console.warn(e);
        return false;
    }
    finally{
        return true;
    }
    
  }