import Image from "next/image";

export default function Home() {
const sayings = [
  "",
  "when you do that little move that imitates the shy/pleased emoji",
  "the way you start to randomly massage my arms or neck when we are just sitting around doing nothing otherwise",
"That you remember so many little details of me. (“…but you don’t like people in your art, that’s why you don’t like it” example)",
"Your face, your whole face, including your eyes and their brows",
"when we tangle our legs while going to bed",
"who I am becoming as a person through being supported by you",
"the perfectly curated memes you send me",
"keeping you on your toes",
"that i feel totally comfortable and not self conscious around you",
"making you laugh and trying to get better at doing it",
"imagining living with you",
"being inspired by you to engage in art and better myself in general",
"taking care of you",
"so much that i hope i get to spend the rest of my life with you. I love who I am with you, and every aspect of your being. You are a beautiful soul and I am grateful every day that we choose to love each other. I deeply hope that our values continue to align and that I will one day get to call you my husband, for real. ",
"feeling like you are more than enough to satisfy my needs - my friendships ending werent even a blip because you support me (but in a healthy way)",
"the way we always bring little gifts back for each other when we go out (vacations, the grocery store, etc)",
"going out with you and being seen with you by everybody",
"the delicious meals we come up with together and share",
"buying or making you things you want or need",
"when you bring me flowers (HINT)"
]



const photos = [
  "/cabin.png",
    "/dino.png",
  "/hotelkiss.JPEG",
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
      {(date.getDate() === 14) ? <h2 style={{color: 'purple'}}>{saying}</h2> :  <div>{saying}</div>
      }
     
    </div>
    </div>
  );
}
