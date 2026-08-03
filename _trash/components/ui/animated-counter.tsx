"use client";

import CountUp from "react-countup";

export function AnimatedCounter({
  value,
  suffix = "",
  duration = 2.4,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  return (
    <CountUp
      end={value}
      duration={duration}
      suffix={suffix}
      enableScrollSpy
      scrollSpyOnce
      scrollSpyDelay={100}
    />
  );
}
