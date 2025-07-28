import Invoice from "@/app/Components/Form/Invoice/invoice";

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
      <div className="mt-2 p-3 bg-white rounded border border-gray-200">
        <Invoice />
      </div>
    </div>
  );
}
