import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import dbService from "../Appwrite/DbServices";

export const articleSlice = createApi({
    reducerPath: "api",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        allArticles: builder.query({
            queryFn: async () => {
                try {
                    const data = await dbService.RetriveAllPosts();
                    return { data: data.documents }; 
                } catch (error) {
                    return { error: { message: error.message || "An error occurred" } };
                }
            },
        }),
    }),
});

export const { useAllArticlesQuery } = articleSlice;
export default articleSlice;
