import axios from 'axios';

const fetchCapsuleData = async () => {
    try {
        const response = await axios.get('https://api.spacexdata.com/v3/capsules');
        return response.data;
    } catch (error) {
        console.error('Error fetching capsule data:', error);
        return [];
    }
};


export default fetchCapsuleData;
