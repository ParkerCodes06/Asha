import PageBanner from '../components/PageBanner';
import Activities from '../components/Activities';
import Courses from '../components/Courses';
import { classCourses } from '../data/siteData';

export default function Classes() {
  return (
    <>
      <PageBanner title="Our Classes" highlight="" breadcrumb="Home / Classes" />
      <Activities />
      <Courses
        courses={classCourses}
        subtitle="Our Programs"
        title="Explore Our "
        highlight="Classes"
      />
    </>
  );
}
