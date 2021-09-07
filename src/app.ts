import axios from 'axios';

const from = document.querySelector('form')!;
const addressInput = document.getElementById('address')! as HTMLInputElement;

const GOOGLE_API_KEY = 'Paste key everytime';

type googleGeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: 'OK' | 'ZERO_RESULTS';
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<googleGeocodingResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${GOOGLE_API_KEY}`
    )
    .then((response) => {
      console.log(response);
      if (response.data.status !== 'OK') {
        throw new Error('Could not fetch location!');
      }
      const coordinate = response.data.results[0].geometry.location;
      console.log(coordinate);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

from.addEventListener('submit', searchAddressHandler);
