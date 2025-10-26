import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import vwGolf from "../assets/images/volkswagen-golf.jpg";
import bmwX5 from "../assets/images/bmw-x5.jpg";
import audiA4 from "../assets/images/audi-a4.jpg";
import mercedesCclass from "../assets/images/mercedes-cclass.jpg";
import toyotaCorolla from "../assets/images/toyota-corolla.jpg";
import fordMustang from "../assets/images/ford-mustang.jpg";
import hondaCivic from "../assets/images/honda-civic.jpg";
import nissanAltima from "../assets/images/nissan-altima.jpg";
import camaro from "../assets/images/chevrolet-camaro.jpg";
import mazda6 from "../assets/images/mazda-6.jpg";
import wrangler from "../assets/images/jeep-wrangler.jpg";
import sportage from "../assets/images/kia-sportage.jpg";
import tucson from "../assets/images/hyundai-tucson.jpg";
import octavia from "../assets/images/skoda-octavia.jpg";
import peugeot3008 from "../assets/images/peugeot-3008.jpg";
import megane from "../assets/images/renault-megane.jpg";
import fiat500e from "../assets/images/fiat-500e.jpg";
import teslaModel3 from "../assets/images/tesla-model3.jpg";
import outback from "../assets/images/subaru-outback.jpg";
import citroenC3 from "../assets/images/citroen-c3.jpg";

const cars = [
  { id: 1, make: "Volkswagen", model: "Golf 7", price: 40, image: vwGolf },
  { id: 2, make: "BMW", model: "X5", price: 60, image: bmwX5 },
  { id: 3, make: "Audi", model: "A4", price: 50, image: audiA4 },
  {
    id: 4,
    make: "Mercedes",
    model: "C Class",
    price: 65,
    image: mercedesCclass,
  },
  { id: 5, make: "Toyota", model: "Corolla", price: 35, image: toyotaCorolla },
  { id: 6, make: "Ford", model: "Mustang", price: 70, image: fordMustang },
  { id: 7, make: "Honda", model: "Civic", price: 38, image: hondaCivic },
  { id: 8, make: "Nissan", model: "Altima", price: 42, image: nissanAltima },
  { id: 9, make: "Chevrolet", model: "Camaro", price: 75, image: camaro },
  { id: 10, make: "Mazda", model: "6", price: 45, image: mazda6 },
  { id: 11, make: "Jeep", model: "Wrangler", price: 80, image: wrangler },
  { id: 12, make: "Kia", model: "Sportage", price: 50, image: sportage },
  { id: 13, make: "Hyundai", model: "Tucson", price: 48, image: tucson },
  { id: 14, make: "Skoda", model: "Octavia", price: 43, image: octavia },
  { id: 15, make: "Peugeot", model: "3008", price: 47, image: peugeot3008 },
  { id: 16, make: "Renault", model: "Megane", price: 39, image: megane },
  { id: 17, make: "Fiat", model: "500e", price: 30, image: fiat500e },
  { id: 18, make: "Tesla", model: "Model 3", price: 90, image: teslaModel3 },
  { id: 19, make: "Subaru", model: "Outback", price: 55, image: outback },
  { id: 20, make: "Citroen", model: "C3", price: 36, image: citroenC3 },
];

export default function Home() {
  const { t } = useTranslation();

  const [filter, setFilter] = useState("All");
  const makes = ["All", ...new Set(cars.map((car) => car.make))];
  const filteredCars =
    filter === "All" ? cars : cars.filter((car) => car.make === filter);

  return (
    <>
      <div style={{ padding: 20, minHeight: "80vh" }}>
        <h2 style={{ textAlign: "center", color: "#0061a8", marginBottom: 20 }}>
          {t("home_title")}
        </h2>

        <div style={{ marginBottom: 20, textAlign: "center" }}>
          <label style={{ fontWeight: "bold", marginRight: 10 }}>
            {t("filter_by_make")}:
          </label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            style={{ padding: "8px 12px", fontSize: 16 }}
          >
            {makes.map((make) => (
              <option key={make} value={make}>
                {make === "All" ? t("all") : make}
              </option>
            ))}
          </select>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {filteredCars.map((car) => (
            <Link
              to={`/car/${car.id}`}
              key={car.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  border: "1px solid #ccc",
                  borderRadius: 10,
                  overflow: "hidden",
                  background: "#fff",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.03)";
                  e.currentTarget.style.boxShadow =
                    "0 10px 15px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                }}
              >
                <img
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  style={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                    borderRadius: "15px 15px 0 0",
                  }}
                />
                <div style={{ padding: 15, flexGrow: 1 }}>
                  <h3 style={{ margin: "0 0 10px 0" }}>
                    {car.make} {car.model}
                  </h3>
                  <p
                    style={{ margin: 0, fontWeight: "bold", color: "#0061a8" }}
                  >
                    {t("price")}: {car.price} €
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer
        style={{
          backgroundColor: "#0061a8",
          color: "white",
          textAlign: "center",
          padding: "15px 10px",
          marginTop: 20,
        }}
      >
        <p>© 2025 OneLeasing. {t("all_rights_reserved")}</p>
        <p>{t("contact")}: info@oneleasing.mk</p>
      </footer>
    </>
  );
}
