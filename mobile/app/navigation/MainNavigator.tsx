import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { TopAppBar } from '../components/TopAppBar';
import { LatestScreen } from '../screens/LatestScreen';
import { MediaScreen } from '../screens/MediaScreen';
import { CommunityScreen } from '../screens/CommunityScreen';
import { StoreScreen } from '../screens/StoreScreen';
import { styles } from '../index.styles';
import { colors } from '../theme/colors';

const Tab = createBottomTabNavigator();

export function MainNavigator() {
  return (
    <View style={styles.container}>
      <TopAppBar />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Latest') {
              iconName = 'home-outline';
            } else if (route.name === 'Media') {
              iconName = 'play-circle-outline';
            } else if (route.name === 'Community') {
              iconName = 'time-outline';
            } else if (route.name === 'Store') {
              iconName = 'bag-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: colors.accent,
          tabBarInactiveTintColor: colors.white,
          tabBarStyle: {
            backgroundColor: colors.black,
            paddingBottom: 5,
            paddingTop: 5,
            height: 60,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '500',
          },
          headerShown: false,
        })}
      >
        <Tab.Screen name="Latest" component={LatestScreen} />
        <Tab.Screen name="Media" component={MediaScreen} />
        <Tab.Screen name="Community" component={CommunityScreen} />
        <Tab.Screen name="Store" component={StoreScreen} />
      </Tab.Navigator>
    </View>
  );
}
