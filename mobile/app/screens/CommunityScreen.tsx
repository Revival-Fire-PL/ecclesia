import { View, ScrollView } from 'react-native';
import { MediaTile } from '../components/MediaTile';
import { styles } from '../index.styles';

export function CommunityScreen() {
  return (
    <View style={styles.mediaContainer}>
      <ScrollView 
        style={styles.mediaScrollView}
        contentContainerStyle={styles.mediaContent}
        showsVerticalScrollIndicator={false}
      >
        <MediaTile
          imagePath={require('@assets/images/news.jpg')}
          iconName="newspaper-outline"
          title="Tempor"
          description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium."
        />
        <MediaTile
          imagePath={require('@assets/images/team.jpeg')}
          iconName="people-outline"
          title="Incididunt"
          description="Et harum quidem rerum facilis est et expedita distinctio nam libero tempore."
        />
        <MediaTile
          imagePath={require('@assets/images/team-2.jpg')}
          iconName="information-circle-outline"
          title="Voluptatem"
          description="Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe."
        />
      </ScrollView>
    </View>
  );
}
