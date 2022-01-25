// pages/Home.js
import { useState } from "react";
import Layout from "../components/shared/Layout";
import youtubeData from "../data/youtubeData.json";
import ExploreCard from "../components/explore/ExploreCard";
import Filter from "../components/Filter";

const target = ["전체", "BTS", "LISA", "ㅋㅋㅋ"];
function Home() {
  const [filter, setFilter] = useState("전체");

  function mapFunc(data, index) {
    return (
      <Filter
        filter={filter}
        text={data}
        onClickFilter={function () {
          setFilter(data);
        }}
        key={`explore-card-${index}`}
      />
    );
  }

  function filterFunc(data) {
    if (filter === "전체" || data.title.includes(filter)) return true;
    return false;
  }
  return (
    <Layout activeMenu="home">
      <div>{target.map(mapFunc)}</div>
      <div>
        {youtubeData["data"].filter(filterFunc).map(function (data, index) {
          return <ExploreCard key={`explore-card-${index}`} data={data} />;
        })}
      </div>
    </Layout>
  );
}

export default Home;