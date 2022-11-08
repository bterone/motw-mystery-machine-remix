import { Link } from "@remix-run/react";
import LeftArrowCurved from "~/images/icons/left-arrow-curved.svg";

export default function MysteryIndexPage() {
  return (
    <div className="flex items-center">
      <Link
        to="new"
        className="max-w-sm rounded-lg border border-gray-200 p-6 shadow-md"
      >
        + Create Mystery
      </Link>

      <div className="flex p-6">
        <img src={LeftArrowCurved} alt="Pointing left" className="mr-2" />

        <h1>Click Create Mystery to get started!</h1>
      </div>
    </div>
  );
}
