/* import axios from "axios";

const useProducts = async () => {
    const url = ` www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
  try {
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error("Failed to fetch data");
    }
    console.log(response.data.json())
    return [response.data, false, null];
  } catch (error) {
    return [null, false, error.message];
  }
};

export default useProducts;
 */