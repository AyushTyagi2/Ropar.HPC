import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PISection from "@/components/PISection";
import RosterSection from "@/components/RosterSection";
import AlumniWall from "@/components/AlumniWall";
import Footer from "@/components/Footer";
import { pi, phdAndScientists, mastersAndPredoc, bachelors, alumni } from "@/data/team";

export default function Home() {
  const currentCount =
    phdAndScientists.length + mastersAndPredoc.length + bachelors.length;

  return (
    <>
      <Header />
      <main>
        <Hero currentCount={currentCount} alumniCount={alumni.length} />
        <PISection pi={pi} />
        <div id="roster">
          <RosterSection
            title="PhD Students & Research Scientists"
            members={phdAndScientists}
            accent="violet"
          />
          <RosterSection
            title="Master's & Pre-Doctoral Researchers"
            members={mastersAndPredoc}
            accent="rose"
          />
          <RosterSection
            title="Bachelor's Students"
            members={bachelors}
            accent="ochre"
          />
        </div>
        <AlumniWall members={alumni} />
      </main>
      <Footer />
    </>
  );
}
