import Image from "next/image";

export default function Home() {
const sayings = [
  "",
  "when you do that little move that imitates the shy/pleased emoji",
  "the way you start to randomly massage my arms or neck when we are just sitting around doing nothing otherwise",
  "your organization style that mirrors mine (in ideal circumstances) that makes me confident we would be a good match living together",
    "your willingness to meet me where i am at if i am having a bad day",
  "your perfect blend of challenging me while still validating and soothing me if im having trouble with an area of my life",
  "your constant confidence in me and my abilities",
    "the way you always have something nice to say about my cooking no matter how many times i do it for you",
  "your gentle softness, mentally and physically  ",
  "the way you work a hard hard job and rarely complain about it, even when youre tired",
  "when you beat me in tekken and perfectly mix being nice and taunting about it",
  "you for introducing me to new music",
  "the way you make it easy for me to imagine a future with you",
  "that you follow news and politics and have such strong opinions on what is right and wrong within them",
  "your interest in self growth",
  "your tense, tense neck and back",
  "the way you dance so joyously and freely",
  "the way you make me feel free and unencumbered",
  "the way i feel great after seeing you, even if it was only for a little while",
  "the way your hair curls after a shower",
  "the way your shoulders look when youre reaching up for something or laying down (and all the rest of the time)",
  "the way your voice softens when you tell me something sweet",
   "the way you kiss me 50x whenever you get on a roll",
  "your beautiful doe eyes",
   "your music taste",
  "your attentiveness to my nuances and genuine interest in figuring them out",
  "the way you take care of your skin and your body, because you are embodied and care about how you feel",
  "the way you keep me on my toes (always one upping me in jokes and i love it)",
  "the silky softness of your hair, especially the part that lays over your forehead",
  "the way you do little things to let me know you're thinking of me, like writing me a little note or bringing me an energy drink",
  "the way you can take any joke i think we've hit the punchline on and come up with an even better one",
  "your unyielding honesty with me and yourself",
]



const photos = [
  "/cabin.png",
  "/hotelkiss.JPEG",
  "/dino.png",
  "/hill.png",
    "/hotel.JPEG",
  "/cabinchairs.png",
  "/gzero.jpg",
]

const date = new Date();
const dayOfWeek = date.getDay()
const saying = sayings[date.getDate()];
const background = photos[dayOfWeek]
const sectionStyle = {
  display: 'flex',
  justifyContents: 'center',
  textAlign: 'center',
  flexDirection: 'column',
  color: 'white',
  margin: '0px',
};

const backgroundStyle = {
  height: '100vh',
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${background})`,
  backgroundPosition: 'center center'
  
}

console.log("You found this? good job techie babe :) my fave curious person ever as always")

  return (
    <div style={ backgroundStyle }>
    <div style={sectionStyle }>
      <h1 style={{textDecoration: 'underline', fontWeight: 'bold'}}>I love</h1>
      <div>{saying}</div>
    </div>
    </div>
  );
}
