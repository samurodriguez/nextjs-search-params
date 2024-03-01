"use client";

import { usePathname, useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        router.push(`${pathname}?search=${e.target.elements.search.value}`);
      }}
    >
      <label htmlFor="search">Search:</label>
      <input id="search" name="search" className="text-black" />

      <button>Send</button>
    </form>
  );
};
export default Form;
