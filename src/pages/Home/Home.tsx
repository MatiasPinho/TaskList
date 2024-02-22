import { ResumeList } from "../../components/ResumesLists/ResumeList.jsx";
import { HeaderContainer } from "../../components/HomeHeader/HomeHeader.js";
import { RecentActivity } from "../../components/RecentActivity/RecentActivity.jsx";
import "./Home.css";

export const Home = () => {
  return (
    <section className="home-container">
      <HeaderContainer />
      <ResumeList />
      <RecentActivity />
    </section>
  );
};
