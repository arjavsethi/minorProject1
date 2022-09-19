
import { useState, useEffect } from 'react';
import useGeolocation from "./useGeolocation";
import axios from "axios";
const useCustomerAddress = () => {
    const [address, setAddress] = useState(null)
    const location = useGeolocation()
    const getAddress = async (location) => {

        try {
            if (location.loaded) {
                let url = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${location.coordinates.lat}%2C${location.coordinates.lng}&lang=en-US&apikey=5HNPBvlO16hb9iXsTrdNGVh6eB0tXSvhSrrgDS3QWrE`;
                let response = await axios({
                    method: "get",
                    url: url,
                    json: true,
                });
                setAddress(response.data.items[0].address)
                // setAddress(response)
            }


        } catch (err) {
            console.error(err);
        }

    };


    useEffect(() => {
        getAddress(location)
    }, [location])

    return address;
}

export default useCustomerAddress