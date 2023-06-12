export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY || "",
    "X-RapidAPI-Host": process.env.REACT_APP_RAPID_API_HOST || "",
  };

  console.log(process.env.REACT_APP_RAPID_API_KEY);

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla",
    {
      method: "GET",
      headers,
    }
  );

  const result = await response.json();

  return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const renttalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return renttalRatePerDay.toFixed(2);
};
