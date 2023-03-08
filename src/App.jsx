import Container from "./components/Container";
import Header from "./components/Header";
import MainCard from "./components/MainCard";
import { FiSearch, FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

const API_KEY = "119d0d9a233ef2bd01084eacf4006edc";

const formatDate = (date) =>
  new Intl.DateTimeFormat("pt-BR", {
    weekday: "long",
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
  }).format(date);

function App() {
  const [inputSearch, setInputSearch] = useState("");
  const [weather, setWeather] = useState(null);
  const [btnState, setBtnState] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const updateTime = () => setCurrentTime(new Date());

  const handleInput = (e) => {
    setInputSearch(e.target.value);
    setBtnState(e.target.value === "");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!inputSearch) return;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputSearch}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setWeather(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setWeather(data))
          .catch((err) => console.log(err));
      },
      (error) => console.log(error)
    );
  }, []);

  useEffect(() => {
    const timerId = setInterval(updateTime, 60000);
    return () => clearInterval(timerId);
  }, []);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`App h-screen ${isDarkMode ? "bg-gray-800" : ""}`}>
      <div
        className={`bg-gray-800 flex justify-between items-center p-4 ${
          isDarkMode ? "bg-gray-900 shadow-lg" : "shadow-md shadow-black/50"
        }`}
      >
        <Container>
          <Header />
        </Container>
      </div>
      <Container>
        <main className="mt-10">
          <div className="flex flex-col items-center">
            <h1
              className={`text-5xl  font-bold mb-10 ${
                isDarkMode ? "text-gray-100" : "text-gray-800"
              }`}
            >
              Veja o tempo agora!
            </h1>
            <div className="search w-full max-w-lg mb-10 relative">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    className="w-full h-14 px-4 py-2 rounded-md shadow-lg border-none bg-gray-100 text-gray-800"
                    id="search-bar"
                    type="text"
                    placeholder="Qual é a cidade?"
                    aria-label="busca"
                    onChange={handleInput}
                    value={inputSearch}
                  />
                  <button
                    className={`bg-blue-500 text-white font-bold py-2 px-2 rounded-full absolute right-0 top-0 -translate-y-1 mt-3 mr-3 transition-opacity duration-200 ${
                      btnState && "opacity-50 cursor-default"
                    }`}
                    disabled={btnState}
                  >
                    <FiSearch size={24} />
                  </button>
                </div>
              </form>
            </div>
            {weather?.cod != 200 ? (
              <p className="text-center mt-6 text-2xl font-bold">
                Cidade não encontrada.
              </p>
            ) : weather?.cod === 200 ? (
              <MainCard
                city={weather.name}
                temperature={weather.main.temp}
                humidity={weather.main.humidity}
                condition={weather.weather[0].main}
                icon={weather.weather[0].icon}
              />
            ) : (
              <p className="text-center mt-6 text-2xl font-bold">
                Carregando informações...
              </p>
            )}
          </div>
        </main>
      </Container>
      <div className="fixed bottom-5 right-5 z-10">
        <button
          className={`p-2 rounded-full bg-blue-500 text-white focus:outline-none focus:shadow-outline-blue ${
            isDarkMode ? "shadow-sm shadow-black/50" : ""
          }`}
          onClick={toggleDarkMode}
        >
          {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
        </button>
      </div>
    </div>
  );
}

export default App;
