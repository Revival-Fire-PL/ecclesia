import { View, ScrollView } from 'react-native';
import { MediaTile } from '../components/MediaTile';
import { styles } from '../index.styles';

export function StoreScreen() {
  return (
    <View style={styles.mediaContainer}>
      <ScrollView 
        style={styles.mediaScrollView}
        contentContainerStyle={styles.mediaContent}
        showsVerticalScrollIndicator={false}
      >
        <MediaTile
          imagePath={require('@assets/images/book.jpg')}
          iconName="book"
          title="Laborum"
          description="Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus."
        />
        <MediaTile
          imagePath={require('@assets/images/shop.jpg')}
          iconName="bag"
          title="Bonorum"
          description="Nam libero tempore cum soluta nobis est eligendi optio cumque nihil impedit quo minus."
        />
      </ScrollView>
    </View>
  );
}
