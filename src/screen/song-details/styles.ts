import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545d7e',
  },
  image: { width: 100, height: 100, borderRadius: 12 },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#dadce0',
    maxWidth: '90%',
    lineHeight: 28,
  },
  subTitle: {
    fontSize: 18,
    color: '#ffffff',
    maxWidth: '90%',
    lineHeight: 22,
  },
  textView: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subView: { gap: 15 },
  sondDetailViewstye: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#00000060',
    padding: 5,
    alignItems: 'flex-end',
  },
  playIconStyle: { height: 50, width: 50 },
  songButtonStyle: {
    position: 'absolute',
    backgroundColor: 'white',
    borderRadius: 25,
  },
  textViewstyle: {
    gap: 15,
    paddingHorizontal: 10,
  },
  albumviewTexStyle: { gap: 5 },
  artistname: { color: '#ffa500' },
});
export default styles;
