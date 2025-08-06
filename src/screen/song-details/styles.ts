import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545d7e',
    padding: 10,
  },
  image: { width: 100, height: 100, borderRadius: 12 },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dadce0',
    maxWidth: '90%',
    lineHeight: 20,
  },
  subTitle: { fontSize: 12, color: '#ffffff', maxWidth: '90%', lineHeight: 14 },
  textView: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subView: { flexDirection: 'row', gap: 15 },
  sondDetailViewstye: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#00000060',
    padding: 5,
    alignItems: 'flex-end',
  },
  playIconStyle: { height: 24, width: 24 },
  songButtonStyle: {
    position: 'absolute',
    left: 38,
    top: 38,
  },
  textViewstyle: {
    gap: 8,
    flex: 1,
  },
  alumviewTexStyle: { gap: 1, flex: 1 },
});
export default styles;
