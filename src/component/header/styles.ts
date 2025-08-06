import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#545d7e',
    borderBottomColor: '#ddd',
    elevation: 3,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
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
