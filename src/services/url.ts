import Constants from 'expo-constants';

const { manifest } = Constants;

export function getDevelopmentURL() {
  return `http://${manifest?.debuggerHost?.split(':').shift()}:8000`;
}
