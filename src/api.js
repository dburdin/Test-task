import axios from "axios";

const BASE_URL = "https://6468f4a203bb12ac2082d457.mockapi.io/users";

export const FetchData = async (page) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        limit: 3,
        page: page,
      },
    });
    if (response) {
      return response.data;
    }
  } catch (error) {
    console.log(error.message);
  }
};
