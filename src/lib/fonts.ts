import {
  Poppins,
  Quicksand,
  Mea_Culpa,
  Playfair,
  Playwrite_HR_Lijeva,
  Italiana,
} from "next/font/google";

import localFont from "next/font/local";
const nueueBold = localFont({ src: "./fonts/nueue/NeueHaasDisplayBold.ttf" });
const nueue = localFont({ src: "./fonts/nueue/NeueHaasDisplayLight.ttf" });
const fancy = localFont({ src: "./fonts/PerfectoCalligraphy.ttf" });
const logo = localFont({ src: "./fonts/VitreousBlack-n3zJ.ttf" });

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600"],
});

export const Fonts = {
  quicksand,
  nueueBold,
  nueue,
  fancy,
  logo,
};
