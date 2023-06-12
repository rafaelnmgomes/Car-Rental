export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "35f795d087msh28622d59081824fp15d944jsneb6dc7f914c9",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

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