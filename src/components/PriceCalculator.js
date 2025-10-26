import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function PriceCalculator({ pricePerDay }) {
  const { t } = useTranslation();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [days, setDays] = useState(0);

  const calculatePrice = () => {
    if (!startDate || !endDate) {
      setTotalPrice(0);
      setDays(0);
      return;
    }
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end - start;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 0) {
      setDays(diffDays);
      setTotalPrice(diffDays * pricePerDay);
    } else {
      setDays(0);
      setTotalPrice(0);
    }
  };

  useEffect(() => {
    calculatePrice();
  }, [startDate, endDate]);

  return (
    <div style={{ marginTop: 20 }}>
      <label>
        {t("start_date")}:{" "}
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        {t("end_date")}:{" "}
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <br />
      <p>
        {totalPrice > 0
          ? t("total_price", { days: days, price: totalPrice })
          : t("total_price", { days: 0, price: 0 })}
      </p>
    </div>
  );
}
