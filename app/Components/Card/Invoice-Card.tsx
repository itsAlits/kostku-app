import React from "react";

interface InvoiceCardProps {
  date: string;
  tenantName: string;
  total: string;
  paymentDate: string;
}

export default function InvoiceCard({
  date,
  tenantName,
  total,
  paymentDate,
}: InvoiceCardProps) {
  return (
    <>
      <div className="bg-white rounded border hover:shadow-sm cursor-pointer border-gray-200 p-3">
        <div className="text-gray-500">
          <h1 className="text-sm font-medium text-gray-900">{date}</h1>
          <div className="mt-4 flex justify-between">
            <p className="text-xs">Penyewa</p>
            <p className="text-xs">{tenantName}</p>
          </div>
          <div className="mt-1 flex justify-between">
            <p className="text-xs">Total</p>
            <p className="text-xs">{total}</p>
          </div>
          <div className="mt-1 flex justify-between">
            <p className="text-xs">Tanggal Pembayaran</p>
            <p className="text-xs">{paymentDate}</p>
          </div>
          <div className="mt-1 flex justify-between">
            <p className="text-xs">Status</p>
            <p className="text-xs">{paymentDate ? "Lunas" : "Belum Lunas"}</p>
          </div>
        </div>
      </div>
    </>
  );
}
