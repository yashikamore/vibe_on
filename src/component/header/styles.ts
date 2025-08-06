import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#545d7e',
    borderBottomColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerFontStyle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
    letterSpacing: 2,
  },
  subView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
  },
  butttonView: { position: 'absolute', left: 0, paddingHorizontal: 10 },
  iconStyle: { height: 24, width: 24 },
});
export default styles;
