export type Member = {
  name: string;
  code?: string; // institute roll number / staff code, used as a specimen-style tag
  role: string;
  bio?: string;
  email?: string;
  phone?: string;
  linkedin?: string;
  scholar?: string;
  photo?: string;
};

export const pi: Member = {
  name: "Dr. Jagpreet Singh",
  role: "Assistant Professor · Department of Computer Science & Engineering · IIT Ropar",
  bio: "Leads the lab's work on High Performance Computing, Dept. of Computer Science & Engineering, IIT Ropar. He specializes in parallel and distributed systems, scheduling theory, operating systems, and real-time systems",
  email: "jagpreets[at]iitrpr[dot]ac[dot]in",
  phone: "91-1881-232170",
  scholar: "https://scholar.google.com/citations?user=50eQtXIAAAAJ&hl=en",
  photo:
    "/jagpreet.png",
};

export const phdAndScientists: Member[] = [
  {
    name: "Harasees Kaur",
    code: "23CSZ0012",
    role: "PhD Student, CSE",
    bio: "PhD scholar at IIT Ropar working on communication-efficient high-performance and distributed computing systems.",
    email: "harasees.24csz0001@iitrpr.ac.in",
    linkedin: "http://www.linkedin.com/in/amit-kumar-bb13b377",
    photo:
      "/harasees.png",
  },
  {
    name: "Sahil",
    code: "24BMZ0007",
    role: "PhD Student",
    bio: "Dedicated to advancing gene expression research, leveraging AI and deep learning approaches.",
    email: "ankita.24bmz0007@iitrpr.ac.in",
    linkedin:
      "https://www.linkedin.com/in/ankita-rani-496b5320b",
    photo:
      "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72ujScWsC_gDAP9N7opRtVZPBENOXUOzr7Q4MAb4S58ImkQrQDDPfd_fumLPzKTY-G22DjLSU9GYaD2-sCIZWV1q0_wNdQb-BiwHFzl9o56c7GTiy4GDHFA6REU5EUOZfzVwg-TjhGBPg3jTK8HvIieyZTMciGNExEhzmzxG646ajBpM_6UzEuoLtUbGJNSj4ZcJXJX1qCABy0NxAo_Cu0OH4NSixwJRdKgBp3MSoK8=w1280",
  },
  
];

export const mastersAndPredoc: Member[] = [
 
];

export const bachelors: Member[] = [
  {
    name: "Ayush Tyagi",
    code: "2023CSB1108",
    role: "Bachelor's Student",
    bio: "Pursuing research at the intersection of machine learning and scientific applications, exploring how deep learning and data-driven modeling can solve challenging problems across diverse domains.",
    email: "2023csb1108@iitrpr.ac.in",
    linkedin: "https://www.linkedin.com/in/ayushtyagi2",
    photo:
      "/ayush_tb.jpeg",
  },
  {
    name: "Aryan Singh",
    code: "2023CSB1102",
    role: "Bachelor's Student",
    bio: "Working on image segmentation, CBC-based hematology malignancy diagnosis and deepfakes in healthcare. Also interested in frontier AI models' development and safety research.",
    email: "2023csb1102@iitrpr.ac.in",
    linkedin: "https://www.linkedin.com/in/aryan-singh-824329287/",
    photo:
      "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72taHDucWyQcpDgj_yjwHQTvfQ6pNn7KsqRN6Vztm-hGedkn_vMN8uQuArfcdvTW3zqHGHp6curV5Bokf_2wYCpWU4c8qpZ2tEsCcfhZZ8EY9Lz_QxWkTcd4DPm38gsaG_nZBurAoF5qzRnoVHofJV6Wx2yne6rbG1DBF4sLHoQz_aSeuz1N1uaDTKimgT1GhsPS2AvAr00QheVhIXd_6e9mO3MVm4yC4qmwU2g7fsg=w1280",
  },
  {
    name: "Nishant Sahni",
    code: "2023CSB1140",
    role: "Bachelor's Student",
    bio: "Working on image segmentation, CBC-based hematology malignancy diagnosis and deepfakes in healthcare. Also interested in frontier AI models' development and safety research.",
    email: "2023csb1102@iitrpr.ac.in",
    linkedin: "https://www.linkedin.com/in/aryan-singh-824329287/",
    photo:
      "https://lh7-us.googleusercontent.com/sitesv-images-rt/AMxu72taHDucWyQcpDgj_yjwHQTvfQ6pNn7KsqRN6Vztm-hGedkn_vMN8uQuArfcdvTW3zqHGHp6curV5Bokf_2wYCpWU4c8qpZ2tEsCcfhZZ8EY9Lz_QxWkTcd4DPm38gsaG_nZBurAoF5qzRnoVHofJV6Wx2yne6rbG1DBF4sLHoQz_aSeuz1N1uaDTKimgT1GhsPS2AvAr00QheVhIXd_6e9mO3MVm4yC4qmwU2g7fsg=w1280",
  },
];

export const alumni: Member[] = [
  { name: "Umesh", role: "Doing deep learning + applied AI research, no cap.", linkedin: "https://www.linkedin.com/in/agaazbansal/" },
  { name: "Sankalp Shashi", role: "Fascinated by deep learning and software systems.", linkedin: "http://linkedin.com/in/akanksha-narula-b6ba26249" },
  
];
