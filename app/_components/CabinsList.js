// import { unstable_noStore as noStore } from "next/cache";
import CabinCard from "../_components/CabinCard";
import { getCabins } from "../_lib/data-service";

async function CabinsList({ filter }) {
  // noStore();
  // console.log(capacity);
  const cabins = await getCabins();
  if (!cabins.length) return null;
  let maxCapacity;
  if (filter === "all") maxCapacity = cabins;
  if (filter === "small")
    maxCapacity = cabins.filter((cabin) => cabin.maxCapacity <= 2);
  if (filter === "medium")
    maxCapacity = cabins.filter(
      (cabin) => cabin.maxCapacity > 2 && cabin.maxCapacity < 8
    );
  if (filter === "large")
    maxCapacity = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {maxCapacity.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinsList;
