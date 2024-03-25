
import React, { useEffect } from 'react';
import RootNavigator from './src/navigators/RootNavigator';
import { Provider } from 'react-redux';
import store from './src/store/app/store';
import { useColorScheme } from 'react-native';
import { setThemeColor } from './src/store/features/theme/actions';
import { getLanguagePreference } from './src/utils/asyncStorage/getLanguagePreferenceFromStorage';
import i18 from './src/Services/i18next'


const App = () => {

  const theme = useColorScheme()

  useEffect(() => {


    if (theme == 'light' || theme == 'dark') {

      //If the user's phone  have a color theme,  set app's color theme that one
      setThemeColor(theme)
    } else {
      //If the user's phone doesn't have a color theme,  set app's color theme as light mode
      setThemeColor('light')
    }

    const getUsersLanguage = async () => {
      const language = await getLanguagePreference()

      //f the user has set a language, make the application language the same before starting the app.
      if (language) {
        i18.changeLanguage(language)
      }

    }
    getUsersLanguage()

  }, [])

  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App
