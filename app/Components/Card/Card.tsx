interface CardProps {
  title?: string;
  nama?: string;
  tgl?: string;
  status?: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="border hover:shadow-sm cursor-pointer border-gray-300 bg-white rounded-md p-3">
      <div className="flex justify-between items-center">
        <h1 className="text-md font-medium">{props.title}</h1>
        <p className="text-sm">{props.tgl}</p>
      </div>
      <p className="text-sm mt-4">Penyewa : {props.nama}</p>
      {props.status === "Tersedia" ? (
        <p className="text-sm">
          Status : <span className="text-green-500">{props.status}</span>
        </p>
      ) : (
        <p className="text-sm">
          Status : <span className="text-red-500">{props.status}</span>
        </p>
      )}
    </div>
  );
}
