// App.tsx

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SongList from '../screen/song-list';
import SongDetails from '../screen/song-details';
import SplashScreen from '../screen/splash-screen';
import { Song } from '../common/types';
import Header from '../component/header';

export type RootStackParamList = {
  SongList: undefined;
  SongDetail: { song: Song };
  SplashScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SongList"
        component={SongList}
        options={{
          header: () => <Header title="SONGS" />,
        }}
      />
      <Stack.Screen
        name="SongDetail"
        component={SongDetails}
        options={{
          header: ({ navigation }) => (
            <Header title="SONG DETAILS" onPress={() => navigation.goBack()} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

const Roots = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};
export default Roots;
