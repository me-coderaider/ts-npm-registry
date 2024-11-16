import { PackageSummary } from "../types/packageSummary";

interface SearchResponse{
    objects:{
        package:{
            name:string;
            description:string,
            version:string;
            keywords:string[];
        }
    }[] // array of ojects
}

export async function searchPackages(term:string): Promise<PackageSummary[]>{
    const res = await fetch(
        `https://registry.npmjs.org/-/v1/search?text=${term}`
    );
    // expecting 'data' to be as 'SearchResponse' which is basically the 'nodes' we need
    const data:SearchResponse = await res.json();

    // now, transforming the 'data' to 'PackageSummary' which we'll use across our application.
    // return data.objects.map((searchResult)=>{
    //     return{
    //         name:searchResult.package.name,
    //         description:searchResult.package.description,
    //         version:searchResult.package.version,
    //         keywords:searchResult.package.keywords
    //     }
    // });

    // more refining
    return data.objects.map(({package:{name, description,version,keywords}})=>{
        return{
            name:name,
            description:description,
            version:version,
            keywords:keywords
        }
    });
}