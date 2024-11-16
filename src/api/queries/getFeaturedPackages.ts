import type { PackageDetails } from "../types/packageDetails";

const FEATURED_PACKAGES=[
    'react',
    'typescript',
    'esbuild',
    'vite'
]

export async function getFeaturedPackages(){
    // It is not considered a good practice to use 'async' function in a map function because 
    // it will return an object of 'promises' and how are you going to resolve all of those??
    const promises = FEATURED_PACKAGES.map(async (name)=>{
        const res=await fetch(`https://registry.npmjs.org/${name}`);

        return res.json();
    });

    const data=await Promise.all(promises);

    return data as PackageDetails[];
}