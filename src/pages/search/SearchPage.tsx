import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";

export default function SearchPage() {
    // const data = useLoaderData() as {searchResults:PackageSummary[]}; // type is coming as 'unknown'
    // above solution will not work for complex projects as what if someone changes 'searchResults' property from the loader function.

    // better solution
    const data = useLoaderData() as SearchLoaderResult;
    console.log(data);
    return <div>SearchPage</div>;
}
