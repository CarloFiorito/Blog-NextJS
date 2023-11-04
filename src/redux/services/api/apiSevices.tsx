import {
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";
import supabase from "../../../../config/config";
import { IPost } from "./models/getInfoPost.model";

// Define a service using a base URL and expected endpoints
export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery(),
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], undefined>({
      queryFn: async () => {
        try {
          const { data, error } = await supabase.from("posts").select("*");
          if (error) {
            return { error: error as unknown as FetchBaseQueryError };
          } else {
            return { data: data as IPost[] };
          }
        } catch (error) {
          return { error: error as FetchBaseQueryError };
        }
      },
    }),
  }),
});

export const { useGetPostsQuery } = blogApi;
