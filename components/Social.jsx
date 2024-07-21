import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/agrawasu" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/samir-agrawal-83a2b52ab/",
  },
  { icon: <FaTwitter />, path: "https://x.com/sagrawal22" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
