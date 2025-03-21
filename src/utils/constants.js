
import bG_IMG from "../utils/Images/BG_IMG.jpg"
export const LOGO = "https://fontmeme.com/permalink/240222/bcdb91e51f3c28e0157e790186fff21d.png"

export const USER_ICON = bG_IMG



export const BACKGROUND = "https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_large.jpg"


export const API_OPtion = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY,
  }
};


export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANG = [{
  identifier: "en", name: "English"
},
{
  identifier: "hindi", name: "Hindi"
},
{
  identifier: "spanish", name: "Spanish"
},
];



export const GPT_KEY = "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";
