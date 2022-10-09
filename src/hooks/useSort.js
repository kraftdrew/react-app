import {useMemo} from "react";

export const UseSortedPosts = (posts, sort) => {
    return useMemo(() => {

        if (sort && sort === 'title') {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        if (sort && sort === 'price') {
            console.log('work')
            return [...posts].sort((a,b) => b.price - a.price)
        }
        return posts
    }, [posts, sort])

}


export const UseFilteredPosts = (posts, sort, query) => {

    const sortedPosts = UseSortedPosts(posts, sort)

    return useMemo(() => {
        return sortedPosts.filter(e => e.title.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedPosts])
}


