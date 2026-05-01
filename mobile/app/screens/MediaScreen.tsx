import { View, ScrollView } from 'react-native';
import { MediaTile } from '../components/MediaTile';
import { styles } from '../index.styles';

export function MediaScreen() {
  return (
    <View style={styles.mediaContainer}>
      <ScrollView 
        style={styles.mediaScrollView}
        contentContainerStyle={styles.mediaContent}
        showsVerticalScrollIndicator={false}
      >
        <MediaTile
          imagePath={require('@assets/images/post-placeholder-1.jpg')}
          iconName="play-circle"
          title="Lorem Ipsum"
          description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque."
        />
        <MediaTile
          imagePath={require('@assets/images/post-placeholder-1.jpg')}
          iconName="musical-notes"
          title="Dolor Sit"
          description="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
        />
        <MediaTile
          imagePath={require('@assets/images/post-placeholder-1.jpg')}
          iconName="headset"
          title="Consectetur"
          description="Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur."
        />
        <MediaTile
          imagePath={require('@assets/images/post-placeholder-1.jpg')}
          iconName="chatbubbles"
          title="Adipiscing"
          description="Ut enim ad minima veniam quis nostrum exercitationem ullam corporis suscipit."
        />
        <MediaTile
          imagePath={require('@assets/images/post-placeholder-1.jpg')}
          iconName="document-text"
          title="Eiusmod"
          description="Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil."
        />
      </ScrollView>
    </View>
  );
}
