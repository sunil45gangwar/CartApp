import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E9E7',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    ...Platform.select({
      ios: {
        shadowRadius: 5,
        shadowOpacity: 0.3,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  imgContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: 'light-grey',
  },
  img: {
    height: 300,
    resizeMode: 'contain',
  },
  titleContainer: {
    paddingTop: 10,
    height: 70,
  },
  priceContainer: {
    paddingBottom: 10,
  },
  buttonContainer: {
    paddingVertical: 10,
  },
  name: {
    color: 'black',
  },
});

export default styles;
