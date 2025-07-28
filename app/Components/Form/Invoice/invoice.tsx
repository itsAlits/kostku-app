import React from "react";

export default function Invoice() {
  return (
    <form>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3">
        <div>
          <label className="text-sm">Kamar No</label>
          <input type="text" value="1" disabled className="input mt-1 w-full" />
        </div>
        <div>
          <label className="text-sm">Nama Penyewa</label>
          <input
            type="text"
            value="Ngakan Made Alit Wiradhanta"
            disabled
            className="input mt-1 w-full"
          />
        </div>
        <div>
          <label className="text-sm">Tanggal Masuk</label>
          <input
            type="text"
            value="2023-10-01"
            disabled
            className="input mt-1 w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
        <div>
          <label className="text-sm">Listrik Bulan Kemarin</label>
          <input
            type="text"
            value="3302"
            disabled
            className="input mt-1 w-full"
          />
        </div>
        <div>
          <label className="text-sm">Listrik Bulan Ini</label>
          <input
            type="text"
            placeholder="Masukan Listrik Bulan Ini"
            className="input focus-within:outline-none mt-1 w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-3 mt-3">
        <div>
          <label className="text-sm">Air</label>
          <input
            type="text"
            value="Rp.20.000"
            disabled
            className="input mt-1 w-full"
          />
        </div>
        <div>
          <label className="text-sm">Berapa Orang / Kamar</label>
          <input
            type="text"
            placeholder="Masukan Jumlah Orang / Kamar"
            className="input focus-within:outline-none mt-1 w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-3 mt-3">
        <div>
          <label className="text-sm">Sampah</label>
          <input
            type="text"
            value="Rp.20.000"
            disabled
            className="input mt-1 w-full"
          />
        </div>
        <div>
          <label className="text-sm">Poskamling</label>
          <input
            type="text"
            value="Rp.10.000"
            disabled
            className="input mt-1 w-full"
          />
        </div>
        <div>
          <label className="text-sm">Kamar</label>
          <input
            type="text"
            value="Rp.600.000"
            disabled
            className="input mt-1 w-full"
          />
        </div>
      </div>

      <button className="btn btn-primary mt-3 w-full">Create Invoice</button>
    </form>
  );
}
