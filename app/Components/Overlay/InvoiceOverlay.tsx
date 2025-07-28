"use client";

import React, { useState } from "react";

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
  onStatusChange: (newStatus: string, newPaymentDate: string) => void;
}

export default function InvoiceOverlay({
  isOpen,
  onClose,
  invoiceData,
  onStatusChange,
}: InvoiceOverlayProps) {
  const [paymentDate, setPaymentDate] = useState(invoiceData.paymentDate);
  const [status, setStatus] = useState(invoiceData.status);

  const handleSaveChanges = () => {
    onStatusChange(status, paymentDate);
    onClose();
  };

  return (
    <>
      {/* Modal Overlay */}
      <div className={`px-4 xl:px-0 modal ${isOpen ? "modal-open" : ""}`}>
        <div className="modal-box w-full max-w-2xl p-0 bg-white">
          <div className="title-modal text-lg font-medium p-4 border-b border-base-300">
            <h1>Edit Invoice - {invoiceData.tenantName}</h1>
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
              </div>

              <div>
                <label className="text-sm font-medium">Status Pembayaran</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="select w-full mt-1 border-gray-300 focus-within:outline-none"
                >
                  <option value="Belum Lunas">Belum Lunas</option>
                  <option value="Lunas">Lunas</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Tanggal Pembayaran
                </label>
                <input
                  type="date"
                  value={paymentDate}
                  className="input mt-1 w-full focus-within:outline-none border-gray-300"
                  onChange={(e) => setPaymentDate(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mt-6">
                <button
                  className="btn bg-green-600 hover:bg-green-700 text-white border-none"
                  onClick={handleSaveChanges}
                >
                  Simpan Perubahan
                </button>
                <button className="btn btn-outline" onClick={onClose}>
                  Batal
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
