import React, { useState, useEffect, FC } from "react";
import axios from "axios";

interface elemnt {
  name: string;
  sys: any;
  id: number;
}

const SearchButton: FC<any> = ({
  data,
  setData,
  units,
  sidebar,
  setSidebar,
  setContryId,
}) => {
  const [countryName, setCountryName] = useState<string>(" ");
  const [filteredData, setFilteredData] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      countryName.length < 3
        ? "cargando"
        : await axios(
            `http://api.openweathermap.org/data/2.5/find?q=${countryName}&appid=${
              import.meta.env.VITE_APP_REACT_APP_API_KEY
            }&units=${units}`
          )
            .then((result) => {
              setFilteredData(result.data);
            })
            .catch((error) => {
              console.error(error);
            });
    };

    fetchData();
  }, [countryName]);

  function handleSearch(e: any) {
    setCountryName(e.target.value);
  }

  const handleToggle = () => {
    setSidebar(!sidebar);
  };

  return (
    <>
      <div
        className={
          sidebar == true ? "search-container-close" : "search-container"
        }
      >
        <span onClick={handleToggle}>X</span>
        <label htmlFor="Search city">Search City </label>
        <input
          onChange={(e) => handleSearch(e)}
          value={countryName}
          type="text"
          id="Search city"
          placeholder="Search location"
        />

        {countryName.length <= 1 || filteredData === undefined
          ? "   "
          : filteredData.list.map((el: elemnt) => (
              <ul>
                <li
                  className="list-city"
                  key={el.id}
                  onClick={() => (
                    setData(filteredData.list[filteredData.list.indexOf(el)]),
                    setContryId(el.id),
                    setCountryName(" "),
                    setSidebar(!sidebar)
                  )}
                >
                  {el.name} {el.sys.country}
                </li>
              </ul>
            ))}
      </div>
    </>
  );
};

export default SearchButton;
