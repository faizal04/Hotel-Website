import Spinner from "@/app/_components/Spinner";

function loading() {
  return (
    <div className="grid justify-center items-center">
      <Spinner />
      <p>Loading Cabins data...</p>
    </div>
  );
}

export default loading;
