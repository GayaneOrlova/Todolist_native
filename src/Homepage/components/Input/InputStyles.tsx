import {StyleSheet} from 'react-native';

const InputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderBottomWidth: 4,
    borderColor: 'grey',
    borderRadius: 5,
  },
  input: {
    fontSize: 20,
    color: 'grey',
    fontStyle: 'italic',
    width: 260,
    height: 50,
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 20,
  },
  add: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});

export default InputStyles;
