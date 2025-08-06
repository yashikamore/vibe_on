import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderColor: '#ddd',
    elevation: 2,
    backgroundColor: '#d3e3fd',
    margin: 8,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: { width: 90, height: 90, marginRight: 10, borderRadius: 6 },
  title: { fontSize: 18, fontWeight: '700', color: '#1f1f1f' },
  artist: { fontSize: 15, color: '#202124' },
});
export default styles;
