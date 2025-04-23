import Spinner from "@/app/_components/Spinner";

function loading() {
  return (
    <div className="grid justify-center items-center">
      <Spinner />
    </div>
  );
}

export default loading;
