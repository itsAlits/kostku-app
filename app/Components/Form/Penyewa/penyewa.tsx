"use client";

import React, { useState } from "react";

interface PenyewaData {
  kamarNo: string;
  namaPenyewa: string;
  tanggalMasuk: string;
  alamat: string;
  asal: string;
  jumlahOrang: string;
  noHandphone: string;
  tempatKerja: string;
}

export default function Penyewa() {
  const [formData, setFormData] = useState<PenyewaData>({
    kamarNo: "",
    namaPenyewa: "",
    tanggalMasuk: "",
    alamat: "",
    asal: "",
    jumlahOrang: "",
    noHandphone: "",
    tempatKerja: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Data Penyewa:", formData);
    // TODO: Implement save functionality
  };
  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
        <div>
          <label className="text-sm">Kamar No</label>
          <select
            className="select select-bordered w-full mt-1 focus-within:shadow-none focus-within:outline-none block"
            name="kamarNo"
            value={formData.kamarNo}
            onChange={handleInputChange}
          >
            <option value="">Pilih Kamar</option>
            {[...Array(10)].map((_, index) => (
              <option key={index + 1} value={index + 1}>
                Kamar No {index + 1}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-sm">Nama Penyewa</label>
          <input
            type="text"
            name="namaPenyewa"
            value={formData.namaPenyewa}
            onChange={handleInputChange}
            placeholder="Masukan Nama Penyewa"
            className="input focus-within:outline-none mt-1 w-full"
          />
        </div>
        <div>
          <label className="text-sm">Tanggal Masuk</label>
          <input
            type="date"
            name="tanggalMasuk"
            value={formData.tanggalMasuk}
            onChange={handleInputChange}
            className="input focus-within:outline-none mt-1 w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
        <div>
          <label className="text-sm">Alamat</label>
          <input
            type="text"
            name="alamat"
            value={formData.alamat}
            onChange={handleInputChange}
            placeholder="Masukan Alamat"
            className="input focus-within:outline-none mt-1 w-full"
          />
        </div>
        <div>
          <label className="text-sm">Asal</label>
          <input
            type="text"
            name="asal"
            value={formData.asal}
            onChange={handleInputChange}
            placeholder="Masukan Asal"
            className="input focus-within:outline-none mt-1 w-full"
          />
        </div>
        <div>
          <label className="text-sm">Berapa Orang</label>
          <input
            type="number"
            name="jumlahOrang"
            value={formData.jumlahOrang}
            onChange={handleInputChange}
            placeholder="Masukan Jumlah Orang"
            className="input focus-within:outline-none mt-1 w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
        <div>
          <label className="text-sm">No Handphone</label>
          <input
            type="tel"
            name="noHandphone"
            value={formData.noHandphone}
            onChange={handleInputChange}
            placeholder="Masukan No Handphone"
            className="input focus-within:outline-none mt-1 w-full"
          />
        </div>
        <div>
          <label className="text-sm">Tempat Kerja</label>
          <input
            type="text"
            name="tempatKerja"
            value={formData.tempatKerja}
            onChange={handleInputChange}
            placeholder="Masukan Tempat Kerja"
            className="input focus-within:outline-none mt-1 w-full"
          />
        </div>
      </div>

      <button type="submit" className="btn btn-primary w-full">
        Simpan Penyewa
      </button>

      {/* Tampilkan Preview Total */}
    </form>
  );
}
