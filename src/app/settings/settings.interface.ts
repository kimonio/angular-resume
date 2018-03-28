
// Home Component.
export interface IHome {
  name: String;
  title: String;
  bio: String;
  email: string;
  location: String;
  facebook:  String;
  twitter: String;
  github: String;
  instagram: String;
  cv_url: String;
  profile_img_url: String;
}

// Resume Component.
export interface IExperience {
  title: String;
  company: String;
  url?: String;
  dates: String;
  duties: String[];
}

export interface IResume {
  achievements: String[];
  experiences: IExperience[];
  skills: String[];
}

export interface IContent {
  home: IHome;
  resume: IResume;
}

