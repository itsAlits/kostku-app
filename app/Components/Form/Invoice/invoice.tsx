"use client";

import React, { useState } from "react";
import { pdf } from "@react-pdf/renderer";
import { saveAs } from "file-saver";
import InvoicePDF from "@/app/Components/PDF/InvoicePDF";

export default function Invoice() {
  const [listrikBulanIni, setListrikBulanIni] = useState<string>("");
  const [jumlahOrang, setJumlahOrang] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Data statis untuk form
  const formData = {
    kamarNo: "1",
    namaPenyewa: "Ngakan Made Alit Wiradhanta",
    tanggalMasuk: "2023-10-01",
    listrikKemarin: "3302",
    air: "Rp.20.000",
    sampah: "Rp.20.000",
    poskamling: "Rp.10.000",
    kamar: "Rp.600.000",
  };

  const calculateTotal = () => {
    const listrikSekarang = parseInt(listrikBulanIni) || 0;
    const listrikKemarin = parseInt(formData.listrikKemarin);
    const pemakaianListrik = listrikSekarang - listrikKemarin;
    const biayaListrik = pemakaianListrik * 1500; // Rp 1500 per kWh

    const orang = parseInt(jumlahOrang) || 1;
    const biayaAir = 20000 * orang;
    const biayaSampah = 20000;
    const biayaPoskamling = 10000;
    const biayaKamar = 600000;

    const total =
      biayaListrik + biayaAir + biayaSampah + biayaPoskamling + biayaKamar;
    return {
      biayaListrik,
      biayaAir,
      biayaSampah,
      biayaPoskamling,
      biayaKamar,
      total,
      totalFormatted: total.toLocaleString("id-ID"),
    };
  };

  const generateInvoicePDF = async () => {
    if (!listrikBulanIni || !jumlahOrang) {
      alert("Mohon lengkapi semua field yang required");
      return;
    }

    setIsGenerating(true);
    try {
      const { biayaListrik, biayaAir } = calculateTotal();
      const today = new Date();
      const invoiceDate = today.toLocaleDateString("id-ID");
      const dueDate = new Date(
        today.setDate(today.getDate() + 30)
      ).toLocaleDateString("id-ID");

      // Hitung total dengan angka murni
      const biayaSampah = 20000;
      const biayaPoskamling = 10000;
      const biayaKamar = 600000;
      const totalAmount =
        biayaListrik + biayaAir + biayaSampah + biayaPoskamling + biayaKamar;

      const invoiceData = {
        date: invoiceDate,
        tenantName: formData.namaPenyewa,
        total: totalAmount.toString(),
        paymentDate: dueDate,
        status: "Belum Lunas",
        details: {
          kamar: biayaKamar.toString(),
          listrik: biayaListrik.toString(),
          air: biayaAir.toString(),
          sampah: biayaSampah.toString(),
          poskamling: biayaPoskamling.toString(),
        },
      };

      const blob = await pdf(<InvoicePDF invoiceData={invoiceData} />).toBlob();
      saveAs(
        blob,
        `invoice-${formData.namaPenyewa}-${invoiceDate.replace(/\//g, "-")}.pdf`
      );

      alert("Invoice PDF berhasil dibuat dan didownload!");

      // Reset form
      setListrikBulanIni("");
      setJumlahOrang("");
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Gagal membuat PDF invoice");
    } finally {
      setIsGenerating(false);
    }
  };
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
          <label className="text-sm">Listrik Bulan Ini *</label>
          <input
            type="number"
            placeholder="Masukan Listrik Bulan Ini"
            value={listrikBulanIni}
            onChange={(e) => setListrikBulanIni(e.target.value)}
            className="input focus-within:outline-none mt-1 w-full"
            required
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
          <label className="text-sm">Berapa Orang / Kamar *</label>
          <input
            type="number"
            placeholder="Masukan Jumlah Orang / Kamar"
            value={jumlahOrang}
            onChange={(e) => setJumlahOrang(e.target.value)}
            className="input focus-within:outline-none mt-1 w-full"
            required
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

      {/* Tampilkan Preview Total */}
      {listrikBulanIni && jumlahOrang && (
        <div className="mt-4 p-4 bg-[#f5f5f5] rounded-md">
          <h4 className="font-medium text-md mb-5">Preview Total:</h4>
          <div className="space-y-2 text-sm">
            <div className="flex pb-1 justify-between">
              <span>
                Listrik (
                {parseInt(listrikBulanIni) - parseInt(formData.listrikKemarin)}{" "}
                kWh):
              </span>
              <span>
                Rp.
                {(
                  (parseInt(listrikBulanIni) -
                    parseInt(formData.listrikKemarin)) *
                  1500
                ).toLocaleString("id-ID")}
              </span>
            </div>
            <div className="flex pb-1 justify-between">
              <span>Air ({jumlahOrang} orang):</span>
              <span>
                Rp.{(20000 * parseInt(jumlahOrang)).toLocaleString("id-ID")}
              </span>
            </div>
            <div className="flex pb-1 justify-between">
              <span>Sampah:</span>
              <span>Rp.20.000</span>
            </div>
            <div className="flex pb-1 justify-between">
              <span>Poskamling:</span>
              <span>Rp.10.000</span>
            </div>
            <div className="flex pb-1 justify-between">
              <span>Kamar:</span>
              <span>Rp.600.000</span>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="flex pb-1 justify-between font-bold">
              <span>Total:</span>
              <span>Rp.{calculateTotal().totalFormatted}</span>
            </div>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={generateInvoicePDF}
        disabled={!listrikBulanIni || !jumlahOrang || isGenerating}
        className="btn btn-primary rounded mt-3 w-full disabled:opacity-50"
      >
        {isGenerating ? "Generating PDF..." : "Generate Invoice PDF"}
      </button>
    </form>
  );
}
