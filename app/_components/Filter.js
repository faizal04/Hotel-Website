"use client";

import { Chilanka } from "next/font/google";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

function Filter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  let activeFilter = searchParams.get("capacity") ?? "all";
  function handleFilter(filter) {
    const mutableParams = new URLSearchParams(searchParams);
    mutableParams.set("capacity", filter);
    router.replace(`?${mutableParams.toString()}`);
  }

  return (
    <div className="border border-primary-800    ">
      <Button
        handleFilter={handleFilter}
        filter="all"
        activeFilter={activeFilter}
      >
        All Cabins
      </Button>
      <Button
        handleFilter={handleFilter}
        filter="small"
        activeFilter={activeFilter}
      >
        1 - 3 guests
      </Button>{" "}
      <Button
        handleFilter={handleFilter}
        filter="medium"
        activeFilter={activeFilter}
      >
        4 - 8 guests
      </Button>{" "}
      <Button
        handleFilter={handleFilter}
        filter="large"
        activeFilter={activeFilter}
      >
        8 - 12 guests
      </Button>{" "}
      {/* <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("all")}
      >
        All Cabins
      </button>
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("small")}
      >
        1 - 3
      </button>{" "}
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("medium")}
      >
        4 - 7
      </button>{" "}
      <button
        className="px-5 py-2 hover:bg-primary-700"
        onClick={() => handleFilter("large")}
      >
        8 - 12
      </button> */}
    </div>
  );
}

function Button({ children, handleFilter, filter, activeFilter }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        activeFilter === filter ? "bg-primary-700" : ""
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
