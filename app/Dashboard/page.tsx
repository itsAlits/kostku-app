import React from "react";
import type { Metadata } from "next";
import Card from "../Components/Card/Card";

export const metadata: Metadata = {
  title: "Kostku App - Dashboard",
  description: "Dashboard untuk mengelola aplikasi Kostku",
};

const dataCard = [
  {
    nama: "Rama",
    tgl: "2023-02-01",
    status: "Tersedia",
  },
  {
    nama: "Rama",
    tgl: "2023-10-01",
    status: "Tidak Tersedia",
  },
  {
    nama: "Rama",
    tgl: "2023-04-01",
    status: "Tersedia",
  },
  {
    nama: "Rama",
    tgl: "2023-11-01",
    status: "Tersedia",
  },
  {
    nama: "Rama",
    tgl: "2023-11-01",
    status: "Tersedia",
  },
  {
    nama: "Rama",
    tgl: "2023-11-01",
    status: "Tersedia",
  },
  {
    nama: "Rama",
    tgl: "2023-11-01",
    status: "Tersedia",
  },
  {
    nama: "Rama",
    tgl: "2023-11-01",
    status: "Tersedia",
  },
  {
    nama: "Rama",
    tgl: "2023-11-01",
    status: "Tersedia",
  },
  {
    nama: "Rama",
    tgl: "2023-11-01",
    status: "Tersedia",
  },
];

export default function page() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 gap-3">
      {dataCard.map((item, index) => (
        <Card key={index} title={`Kamar ${index + 1}`} {...item} />
      ))}
    </div>
  );
}
