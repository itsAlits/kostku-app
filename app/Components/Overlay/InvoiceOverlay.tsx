"use client";

import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";

interface InvoiceOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  invoiceData: {
    date: string;
    tenantName: string;
    total: string;
    paymentDate: string;
    status: string;
  };
  onStatusChange: (newStatus: string) => void;
}

export default function InvoiceOverlay({
  isOpen,
  onClose,
  invoiceData,
  onStatusChange,
}: InvoiceOverlayProps) {
  const [paymentDate, setPaymentDate] = useState(invoiceData.paymentDate);

  const sendToWhatsApp = () => {
    const message = `*INVOICE KOST*
    
Tanggal: ${invoiceData.date}
Penyewa: ${invoiceData.tenantName}
Total: ${invoiceData.total}
Tanggal Pembayaran: ${paymentDate}
Status: ${invoiceData.status}

Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleStatusChange = (newStatus: string) => {
    onStatusChange(newStatus);
    onClose();
  };

  return (
    <>
      {/* Modal Overlay */}
      <div className={`px-4 xl:px-0 modal ${isOpen ? "modal-open" : ""}`}>
        <div className="modal-box w-full  max-w-2xl p-0 bg-white">
          <div className="title-modal text-lg font-medium p-4 border-b border-base-300">
            <h1>Invoice Kamar No 1 - 01 Maret 2025</h1>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div>
                <div className="flex text-sm justify-between border-b border-base-300 py-3">
                  <p>Tanggal</p>
                  <p>{invoiceData.date}</p>
                </div>
                <div className="flex text-sm justify-between border-b border-base-300 py-3">
                  <p>Penyewa</p>
                  <p>{invoiceData.tenantName}</p>
                </div>
                <div className="flex text-sm justify-between border-b border-base-300 py-3">
                  <p>Total</p>
                  <p>{invoiceData.total}</p>
                </div>
                <div className="flex text-sm justify-between border-b border-base-300 py-3">
                  <p>Tanggal Pembayaran</p>
                  <p>{paymentDate}</p>
                </div>
                <div className="flex text-sm justify-between border-b border-base-300 py-3">
                  <p>Status</p>
                  <p>{invoiceData.status}</p>
                </div>
              </div>
              <label htmlFor="" className="text-sm">
                Tanggal Pembayaran
              </label>
              <input
                type="date"
                value={paymentDate}
                className="input mt-2 w-full focus-within:outline-none"
                onChange={(e) => setPaymentDate(e.target.value)}
              />
              <button
                className="btn bg-green-500 w-full border-none text-white rounded"
                onClick={sendToWhatsApp}
              >
                Kirim Invoice ke WhatsApp
              </button>
              <div className="grid grid-cols-2 gap-2">
                <button
                  className="btn bg-blue-600 text-white w-full"
                  onClick={() => handleStatusChange("Lunas")}
                >
                  Lunas
                </button>
                <button className="btn btn-primary w-full" onClick={onClose}>
                  Kembali
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-backdrop" onClick={onClose}></div>
      </div>
    </>
  );
}
