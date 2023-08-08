import axios from 'axios';

const url =
  'https://my-json-server.typicode.com/benirvingplt/products/products';

export const fetchData = async () => {
  try {
    const result = await axios.request({
      url: url,
      method: 'GET',
    });
    const response = result.data;
    return response;
  } catch (error) {
    console.log(error);
  }
};
