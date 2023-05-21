import { useEffect, useState } from "react";

import { FetchData } from "../../api";
import { Container } from "./Folowers.styled";
import { CardList } from "../CardList/CardList";
import { LoadMoreButton } from "../LoadMoreButton/LoadMoreButton";
import { Loader } from "../Loader/Loader";

export const Followers = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [arrayLength, setArraylength] = useState();

  useEffect(() => {
    setIsLoading(true);

    const getData = async () => {
      try {
        const response = await FetchData(page);
        setData((prev) => [...prev, ...response]);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
    setArraylength(data.length + 2);
  };

  return (
    <>
      <Container>
        <CardList data={data}></CardList>

        {isLoading && <Loader />}

        {!isLoading && data.length !== arrayLength && (
          <LoadMoreButton
            title={"Load More"}
            handleLoadMore={loadMore}
          ></LoadMoreButton>
        )}
      </Container>
    </>
  );
};
