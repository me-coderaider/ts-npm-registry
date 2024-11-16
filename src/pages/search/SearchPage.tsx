import type { SearchLoaderResult } from "./searchLoader";
import { useLoaderData } from "react-router-dom";
import PackageListItem from "../../components/PackageListItem";

export default function SearchPage() {
    // const data = useLoaderData() as {searchResults:PackageSummary[]}; // type is coming as 'unknown'
    // above solution will not work for complex projects as what if someone changes 'searchResults' property from the loader function.

    // better solution
    const { searchResults } = useLoaderData() as SearchLoaderResult;
    const renderedResults = searchResults.map((result) => {
        return <PackageListItem pack={result} key={result.name} />;
    });

    return (
        <div>
            <h1 className="text-2xl font-bold my-6">Search Results</h1>
            <div className="space-y-4 mt-4">{renderedResults}</div>
        </div>
    );
}
