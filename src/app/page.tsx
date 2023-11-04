"use client";
import Card from "@/components/common/Card/Card";
import styles from "./page.module.scss";
import { useGetPostsQuery } from "@/redux/services/api/apiSevices";

export default function Home() {
  const { data } = useGetPostsQuery(undefined);

  return (
    <main className={styles.main}>
      <div className={styles.main_cardsWrapper}>
        {data &&
          data.map((post) => {
            return (
              <Card
                key={post.id}
                title={post.title}
                description={post.description}
                src="prova"
                createdInfo="ASK Project - June 5, 2023"
              />
            );
          })}
      </div>
    </main>
  );
}
