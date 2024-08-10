export interface MyInfo extends SocialNetwork {
    img: string;
    name: string;
    jobTitle: string,
    bio?: string;
}

export interface SocialNetwork {
    x?: string,
    facebook?: string
    instagram?: string
    tiktok?: string;
    threads?: string;
    youtube?: string;
    github?: string;
    phone?: string;
    website?: string;
    email?: string;
    dribble?: string;
    spotify?: string
}

export interface WorkInfo {
    img: string;
    name: string;
    description?: string,
    url?: string;
}