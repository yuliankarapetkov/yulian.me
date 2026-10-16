export const pageTitle = "Yulian Karapetkov — Full-Stack Software Engineer";

export const pageDescription =
  "Yulian Karapetkov, full-stack software developer and lead engineer. 12+ years across front-end and backend. Selected for the Toptal Talent Network in 2019.";

export const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://yulian.me/#profile",
  url: "https://yulian.me/",
  name: pageTitle,
  mainEntity: {
    "@type": "Person",
    "@id": "https://yulian.me/#person",
    name: "Yulian Karapetkov",
    url: "https://yulian.me/",
    jobTitle: "Software Engineer",
    description: pageDescription,
    sameAs: [
      "https://github.com/yuliankarapetkov",
      "https://www.linkedin.com/in/yuliankarapetkov/",
    ],
  },
};
