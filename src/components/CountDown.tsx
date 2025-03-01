"use client";

import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const [endingDate, setEndingDate] = useState<Date | null>(null);

  useEffect(() => {
    setEndingDate(new Date("2025-05-26"));
  }, []);

  if (!endingDate) return null;

  return (
    <Countdown
      className="font-bold text-4xl text-yellow-300"
      date={endingDate}
    />
  );
};

export default CountDown;
