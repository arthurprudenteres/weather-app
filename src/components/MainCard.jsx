import React from "react";

function MainCard({ city, temperature, humidity, icon, condition }) {
  const today = new Date();
  const iconImgUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
  const weatherImgUrl =
    "https://images.unsplash.com/photo-1598484033793-fb6a544f4ba2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80";

  const formatDate = (date) => {
    const options = {
      weekday: "long",
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "numeric",
    };
    const formattedDate = new Intl.DateTimeFormat("pt-BR", options).format(
      date
    );
    return formattedDate;
  };

  return (
    <div className="card w-full h-[250px] bg-white mt-10 rounded-md flex items-center px-8 shadow-lg">
      <div className="">
        <img
          width={250}
          className="rounded-md"
          src={weatherImgUrl}
          alt={`${city} weather`}
          title={`${city} weather`}
        />
      </div>
      <div className="flex flex-col gap-12 relative flex-1 ml-10">
        <div className="content flex items-center gap-4">
          <div className="flex items-center gap-8">
            <h2 className="text-7xl self-end text-gray-800">{city}</h2>
            <p className="text-6xl text-gray-800 self-end">
              {temperature !== null ? `${Number(temperature).toFixed(1)}°` : "--"}
              <span className="text-3xl font-semibold text-gray-500">C</span>
            </p>
            <div className="absolute right-16 brightness-75">
              <img
                width={150}
                src={iconImgUrl}
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex items-end gap-8">
          <p className="text-xl text-gray-500 capitalize">
            {formatDate(today)}
          </p>
          <div className="flex gap-4">
            <p className="text-gray-500">
              Clima: <span className="text-gray-800 text-xl">{condition}</span>
            </p>
            <p className="text-gray-500">
              Umidade:{" "}
              <span className="text-gray-800 text-xl">
                {humidity !== null ? `${humidity}%` : "--"}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <a href="#">
          <button className="px-6 py-3 bg-gray-700 rounded-full font-medium text-white hover:bg-gray-600 transition-all duration-200 ease-in-out">
            Ver Mais
          </button>
        </a>
      </div>
    </div>
  );
}

export default MainCard;
