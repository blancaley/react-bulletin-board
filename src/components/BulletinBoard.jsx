import ReactPost from "./ReactPost";

// FAQ
const BulletinBoard = () => {
  const FAQ = [{
    question: "Vad är tre fördelar med att använda React?",
    answer: "React är en mycket populär bibliotek som används av många stora företag och är skapad av Facebook. Det var det mest använda ramverket 2021 och det finns en stark community där man kan få hjälp med att utveckla en React app. Det är enkelt att jobba med React för att skapa komplexa gränssnitt med hjälp av återanvändbara komponenter. Det är snabb, effektiv och förutsägbart. React renderar DOMen bara när data ändras och vyn som visas är baserade på nuvarande data som sparas i en “state”. React är intuitiv och förutsägbart eftersom datan flöder i en riktning."
  },{
    question: "Vad betyder Single Page Application och vad skiljer det från en “vanlig” webbplats?",
    answer: "Single Page Application laddar bara en dokument. Innehållet uppdateras beroende på det man vill visa med hjälp av Javascript. Till skillnad från en vanlig webbplats som laddar en hel ny sida för varje klick på en länk, en SPA renderar om delar av sidan. Det här snabbar upp svarstiden och man sparar processorkraft på servern."
  },{
    question: "Nämn tre skillnader mellan React och Angular.",
    answer: "React är en flexibel bibliotek som man kan använda tillsammans med andra bibliotek. Angular är en komplex ramverk med specifika regler för hur det ska användas. React jobbar med en enkel-riktining data binding, dvs data flöder från parent till children. Angular har tvåsidig databinding.React använder sig av en virtuell DOM som sedan uppdaterar den vanliga DOMen. Angular använder den vanliga DOMen."
  }];

  return (
    <div>
      { FAQ.map((e, i) => <ReactPost key={i} question={e.question} answer={e.answer}/>) }
    </div>

  );
}
 
export default BulletinBoard;