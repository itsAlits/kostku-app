import React from "react";

interface PenyewaData {
  id: number;
  kamarNo: string;
  namaPenyewa: string;
  tanggalMasuk: string;
  alamat: string;
  asal: string;
  jumlahOrang: number;
  noHandphone: string;
  tempatKerja: string;
}

export default function Table() {
  // Sample data for demonstration
  const penyewaData: PenyewaData[] = [
    {
      id: 1,
      kamarNo: "1",
      namaPenyewa: "Ahmad Susanto",
      tanggalMasuk: "2024-01-15",
      alamat: "Jl. Merdeka No. 123",
      asal: "Jakarta",
      jumlahOrang: 1,
      noHandphone: "081234567890",
      tempatKerja: "PT. Teknologi Indonesia",
    },
    {
      id: 2,
      kamarNo: "3",
      namaPenyewa: "Siti Rahayu",
      tanggalMasuk: "2024-02-20",
      alamat: "Jl. Sudirman No. 456",
      asal: "Bandung",
      jumlahOrang: 2,
      noHandphone: "082345678901",
      tempatKerja: "Bank Mandiri",
    },
    {
      id: 3,
      kamarNo: "5",
      namaPenyewa: "Budi Hartono",
      tanggalMasuk: "2024-03-10",
      alamat: "Jl. Gatot Subroto No. 789",
      asal: "Surabaya",
      jumlahOrang: 1,
      noHandphone: "083456789012",
      tempatKerja: "Freelancer",
    },
  ];

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th className="font-medium">Penyewa</th>
              <th className="font-medium">Kamar</th>
              <th className="font-medium">Jumlah Orang</th>
              <th className="font-medium">Tanggal Masuk</th>
              <th className="font-medium">No Handphone</th>
              <th className="font-medium">Alamat</th>
              <th className="font-medium">Tempat Kerja</th>
              <th className="font-medium">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {penyewaData.map((penyewa) => (
              <tr key={penyewa.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-medium">{penyewa.namaPenyewa}</div>
                      <div className="text-sm opacity-50">{penyewa.asal}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="font-medium">Kamar No. {penyewa.kamarNo}</div>
                </td>
                <td>
                  <span>{penyewa.jumlahOrang} orang</span>
                </td>
                <td>
                  <div className="text-sm">
                    {new Date(penyewa.tanggalMasuk).toLocaleDateString(
                      "id-ID",
                      {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </div>
                </td>
                <td>
                  <div className="text-sm font-medium">
                    {penyewa.noHandphone}
                  </div>
                </td>
                <td>
                  <div className="text-sm opacity-70">{penyewa.alamat}</div>
                </td>
                <td>
                  <div className="text-sm font-medium">
                    {penyewa.tempatKerja}
                  </div>
                </td>
                <th>
                  <div className="flex gap-1">
                    <button className="btn btn-ghost btn-sm">Edit</button>
                    <button className="btn btn-ghost btn-sm text-error">
                      Hapus
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
