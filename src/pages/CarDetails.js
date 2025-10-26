import React from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PriceCalculator from "../components/PriceCalculator";

// Import fotot
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
  {
    id: 1,
    key: "volkswagen_golf_7",
    make: "Volkswagen",
    model: "Golf 7",
    price: 40,
    image: vwGolf,
  },
  { id: 2, key: "bmw_x5", make: "BMW", model: "X5", price: 60, image: bmwX5 },
  {
    id: 3,
    key: "audi_a4",
    make: "Audi",
    model: "A4",
    price: 50,
    image: audiA4,
  },
  {
    id: 4,
    key: "mercedes_c_class",
    make: "Mercedes",
    model: "C Class",
    price: 65,
    image: mercedesCclass,
  },
  {
    id: 5,
    key: "toyota_corolla",
    make: "Toyota",
    model: "Corolla",
    price: 35,
    image: toyotaCorolla,
  },
  {
    id: 6,
    key: "ford_mustang",
    make: "Ford",
    model: "Mustang",
    price: 70,
    image: fordMustang,
  },
  {
    id: 7,
    key: "honda_civic",
    make: "Honda",
    model: "Civic",
    price: 38,
    image: hondaCivic,
  },
  {
    id: 8,
    key: "nissan_altima",
    make: "Nissan",
    model: "Altima",
    price: 42,
    image: nissanAltima,
  },
  {
    id: 9,
    key: "chevrolet_camaro",
    make: "Chevrolet",
    model: "Camaro",
    price: 75,
    image: camaro,
  },
  {
    id: 10,
    key: "mazda_6",
    make: "Mazda",
    model: "6",
    price: 45,
    image: mazda6,
  },
  {
    id: 11,
    key: "jeep_wrangler",
    make: "Jeep",
    model: "Wrangler",
    price: 80,
    image: wrangler,
  },
  {
    id: 12,
    key: "kia_sportage",
    make: "Kia",
    model: "Sportage",
    price: 50,
    image: sportage,
  },
  {
    id: 13,
    key: "hyundai_tucson",
    make: "Hyundai",
    model: "Tucson",
    price: 48,
    image: tucson,
  },
  {
    id: 14,
    key: "skoda_octavia",
    make: "Skoda",
    model: "Octavia",
    price: 43,
    image: octavia,
  },
  {
    id: 15,
    key: "peugeot_3008",
    make: "Peugeot",
    model: "3008",
    price: 47,
    image: peugeot3008,
  },
  {
    id: 16,
    key: "renault_megane",
    make: "Renault",
    model: "Megane",
    price: 39,
    image: megane,
  },
  {
    id: 17,
    key: "fiat_500e",
    make: "Fiat",
    model: "500e",
    price: 30,
    image: fiat500e,
  },
  {
    id: 18,
    key: "tesla_model_3",
    make: "Tesla",
    model: "Model 3",
    price: 90,
    image: teslaModel3,
  },
  {
    id: 19,
    key: "subaru_outback",
    make: "Subaru",
    model: "Outback",
    price: 55,
    image: outback,
  },
  {
    id: 20,
    key: "citroen_c3",
    make: "Citroen",
    model: "C3",
    price: 36,
    image: citroenC3,
  },
];

export default function CarDetails() {
  const { id } = useParams();
  const { t } = useTranslation();

  const car = cars.find((c) => c.id === parseInt(id));
  if (!car) {
    return (
      <div style={{ padding: 30 }}>
        {t("car_not_found", "Makina nuk u gjet")}
      </div>
    );
  }

  // Përkthimet e makinës si objekt
  const carData = t(`cars.${car.key}`, { returnObjects: true });

  return (
    <div style={{ padding: 30 }}>
      <h2 style={{ color: "#0061a8" }}>
        {carData.name} – {car.price} €/ditë
      </h2>

      <img
        src={car.image}
        alt={carData.name}
        style={{
          width: "100%",
          maxWidth: 600,
          height: "auto",
          marginBottom: 20,
          borderRadius: 10,
        }}
      />

      <p style={{ fontSize: 18 }}>{carData.description}</p>

      <div style={{ marginTop: 20, fontSize: 16, lineHeight: "1.6" }}>
        <p>
          <strong>{t("fuel", "Karburanti")}:</strong> {carData.fuel}
        </p>
        <p>
          <strong>{t("transmission", "Transmisioni")}:</strong>{" "}
          {carData.transmission}
        </p>
        <p>
          <strong>{t("year", "Viti i prodhimit")}:</strong> {carData.year}
        </p>
        <p>
          <strong>{t("power", "Fuqia")}:</strong> {carData.power}
        </p>
      </div>

      {/* Këtu vendosim kalkulatorin e çmimit */}
      <PriceCalculator pricePerDay={car.price} />
    </div>
  );
}
