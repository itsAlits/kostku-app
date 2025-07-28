import InvoiceCard from "@/app/Components/Card/Invoice-Card";

export default function page() {
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
        <InvoiceCard
          date="01 Februari 2025"
          tenantName="Ngakan Made Alit Wiradhanta"
          total="Rp.740.000"
          paymentDate="03 Februari 2025"
        />
        <InvoiceCard
          date="01 Maret 2025"
          tenantName="Ngakan Made Alit Wiradhanta"
          total="Rp.740.000"
          paymentDate="31 Maret 2025"
        />
        <InvoiceCard
          date="01 April 2025"
          tenantName="Ngakan Made Alit Wiradhanta"
          total="Rp.740.000"
          paymentDate="02 April 2025"
        />
      </div>
    </div>
  );
}
