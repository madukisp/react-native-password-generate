
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flexDirection: 'column',
    borderColor: '#3ca9d0', // borda ao redor do logo
    borderWidth: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 60,
    paddingTop: 20,
    paddingBottom: 10,
    backgroundColor: '#1a2037',
  },
  inputContainer: {
    width: '80%',
    flexDirection: 'column',
    alignItems: 'center',
    borderColor: '#3ca9d0', // borda ao redor do botão
    borderWidth: 2,
  },
});
