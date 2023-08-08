import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2E9E7',
    paddingVertical: 10,

    marginHorizontal: 10,
    borderRadius: 10,
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
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
    width: '50%',
    justifyContent: 'center',
    backgroundColor: 'light-grey',
  },
  contentContainer: {
    display: 'flex',
    width: '50%',
  },
  img: {
    height: 200,
    resizeMode: 'contain',
  },
  titleContainer: {
    paddingTop: 10,
    height: 70,
  },
  flexContainer: {
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  flexContainerInner: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
  },
  buttonContainer: {
    marginTop: 10,
    paddingVertical: 5,
    width: '90%',
  },
  smallButtonRd: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 5,
    margin: 3,
  },
  smallButtonGreen: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    borderRadius: 5,
    margin: 3,
  },
  btnText: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    fontSize: 17,
    color: '#fff',
    fontWeight: 'bold',
  },
  quantityText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  mainQty: {
    width: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    color: 'black',
  },
});

export default styles;
