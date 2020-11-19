import * as Location from 'expo-location'

export const getLocation = async () => {
    let { status } = await Location.requestPermissionsAsync()
    let error
    if (status !== 'granted') {
        error = 'Permission to access location was denied'
    }

    const location = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
    })
    return { location, status, error }
}

