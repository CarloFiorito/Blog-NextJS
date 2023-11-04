"use client";
import Image from "next/image";
import styles from "./page.module.css";
import supabase from "../../config/config";
import { useEffect, useState } from "react";
import { useGetPostsQuery } from "@/redux/services/api/apiSevices";

export default function Home() {
  const { data } = useGetPostsQuery(undefined);

  console.log(data);

  return (
    <main className={styles.main}>
      {/*   {dataPost &&
        dataPost.map((el, idx) => {
          return <p key={idx}>{el.title}</p>;
        })} */}
    </main>
  );
}
