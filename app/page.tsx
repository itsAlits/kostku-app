import Auth from "./Components/Form/Auth/auth";

export default function Home() {
  return (
    <div className="h-dvh flex items-center justify-center">
      <div className="w-xl">
        <h1 className="text-center text-xl font-medium text-primary">Masuk</h1>
        <p className="text-center text-sm text-gray-500 mb-5">
          Masuk ke dalam sistem Kostku
        </p>
        <Auth />
      </div>
    </div>
  );
}
