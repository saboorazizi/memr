'use client'

import { useSearchParams } from "next/dist/client/components/navigation";
import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useCallback } from "react";
import { IconType } from "react-icons";

interface CategoryProps{
    label: string;
    icon: IconType;
    selected?: boolean
}

const Category:React.FC<CategoryProps> = ({label, icon:Icon, selected}) => {
    const router = useRouter()
    const params = useSearchParams()

    const handleClick = useCallback(() => {
        if(label === 'All'){
            router.push('/')
        }else{
            let currentQuery = {};

            if(params){
                currentQuery = queryString.parse(params.toString())
            }

            const updatedQuery:any = {
                ...currentQuery,
                category: label
            }

            const url = queryString.stringifyUrl(
                {
                    url: '/',
                    query: updatedQuery
                },
                {
                    skipNull: true
                }
            )

            router.push(url)
        }
    }, [label, params, router])

    return ( <div onClick={handleClick} className={`flex items-center justify-center text-center gap-1 p-2 border-b-2 hover:text-red-800 hover:bg-gray-300 transition cursor-pointer
    ${selected ? 'border-b-4 border-indigo-500 text-orange-800 bg-gray-200' : 'border-transparent text-gray-500'}
    `}>
        {/* <Icon size={20}/> */}
        <div className="font-light text-md">{label}</div>
    </div> );
}
 
export default Category;