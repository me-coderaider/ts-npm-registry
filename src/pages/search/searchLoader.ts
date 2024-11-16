import { searchPackages } from "../../api/queries/searchPackages";

export async function searchLoader({ request }:{request:Request}){
    const { searchParams } = new URL(request.url);
    const term = searchParams.get("term");

    if (!term) {
        throw new Error("Search term must be provided");
    }

    const results=await searchPackages(term);
    // return results; // also correct, but what if there are multiple queries, 
    
    // const testResults=await searchTests(); // like this query
    // So, it's good idea to return as an 'object'

    return {
        searchResults:results,
        // searchTests:testResults
    }
}