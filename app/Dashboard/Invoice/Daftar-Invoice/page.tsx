"use client";

import { useState } from "react";
import InvoiceCard from "@/app/Components/Card/Invoice-Card";
import InvoiceOverlay from "@/app/Components/Overlay/InvoiceOverlay";

interface Invoice {
  id: number;
  date: string;
  tenantName: string;
  total: string;
  paymentDate: string;
  status: string;
}

export default function page() {
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: 1,
      date: "01 Februari 2025",
      tenantName: "Ngakan Made Alit Wiradhanta",
      total: "Rp.740.000",
      paymentDate: "03 Februari 2025",
      status: "Lunas",
    },
    {
      id: 2,
      date: "01 Maret 2025",
      tenantName: "Ngakan Made Alit Wiradhanta",
      total: "Rp.740.000",
      paymentDate: "...",
      status: "Belum Lunas",
    },
    {
      id: 3,
      date: "01 April 2025",
      tenantName: "Ngakan Made Alit Wiradhanta",
      total: "Rp.740.000",
      paymentDate: "02 April 2025",
      status: "Lunas",
    },
  ]);

  const handleCardClick = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setIsOverlayOpen(true);
  };

  const handleCloseOverlay = () => {
    setIsOverlayOpen(false);
    setSelectedInvoice(null);
  };

  const handleStatusChange = (newStatus: string) => {
    if (selectedInvoice) {
      setInvoices((prev) =>
        prev.map((invoice) =>
          invoice.id === selectedInvoice.id
            ? { ...invoice, status: newStatus }
            : invoice
        )
      );
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <div className="w-full">
          <select
            defaultValue="Pick a color"
            className="select border-gray-200 focus-within:shadow-none focus-within:outline-none w-full"
          >
            <option>Pilih Kamar</option>
            <option>Crimson</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-1 xl:grid-cols-3 gap-2 ">
        {invoices.map((invoice) => (
          <InvoiceCard
            key={invoice.id}
            date={invoice.date}
            tenantName={invoice.tenantName}
            total={invoice.total}
            paymentDate={invoice.paymentDate}
            status={invoice.status}
            onClick={() => handleCardClick(invoice)}
          />
        ))}
      </div>

      {selectedInvoice && (
        <InvoiceOverlay
          isOpen={isOverlayOpen}
          onClose={handleCloseOverlay}
          invoiceData={selectedInvoice}
          onStatusChange={handleStatusChange}
        />
      )}
    </div>
  );
}
