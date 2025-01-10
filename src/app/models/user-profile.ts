import SocialLink from "./social-links";

interface UserProfile {
    image: string,
    fullname: string,
    location: string,
    links: SocialLink[],
}

export default UserProfile