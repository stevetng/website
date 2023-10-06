function handleVisitedState(linkId) {
  if (typeof document !== 'undefined') {
    const linkElement = document.getElementById(linkId);
    const visited = localStorage.getItem(`visited-${linkId}`);

    if (visited) {
      linkElement.classList.add('text-purple-900');
    }

    linkElement.addEventListener('click', () => {
      localStorage.setItem(`visited-${linkId}`, true);
    });
  }
}

handleVisitedState('projects-link');
handleVisitedState("omneky-link");
handleVisitedState("helicone-link");
handleVisitedState('luma-link');

export default function Home() {
  return (
    <div id="maincontent" className="max-w-[42em] my-15 mx-auto">
      <div className="my_name">
      <h1 className="block text-2xl my-3 mx-0 font-bold">Steve Nguyen</h1>
      </div>
      <div className="current_work"> 
        <p className="block my-4 mx-0">USC grad. Technical PM @ServiceNow. Living in Boston. </p>
      </div>
      <div className="past_work">
        <h2 className="text-xl font-bold">Previously</h2>
        <ul className="block list-disc m-4 mx-0 pl-10">
          <li>Built early stage growth team + got early customers @ <a id="omneky-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://omneky.com" target="_blank">Omneky</a></li>
          <li>Created marketing materials(ie. launch video -- 50k+ views) @ <a id="helicone-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://helicone.ai" target="_blank">Helicone</a></li>
          <li>PM for product that detected duplicate patient records(75,000+ impacted) @ <a id="luma-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://lumahealth.io" target="_blank">Luma Health</a></li>
          <li>A cohort of audio content creators for Elis, a music app founded by the former head of research at Spotify.</li>
          <li>A startup career fair at USC which brought in 20+ startups to USC's campus.</li>
          <li>USC's first Quant Finance club which now has alum at Jane Street, Citadel, IMC, etc.</li>
          <li><a id="projects-link" href="/projects" className="text-blue-700 focus:text-purple-900 focus:outline-none underline">Link to more projects</a></li>
        </ul>
        
      </div>
      <div className="big_questions">
        <h2 className="text-xl font-bold">These are the biggest questions I'd be interested in solving.</h2>
          <ul className="block list-disc m-4 mx-0 pl-10">
          <li>As a young adult, how can we have it all: love, friends, family, and a career we're proud of?</li>
          <li>How do you get kids to have healthy consumption patterns with technology + AI? </li>
          <li>How can we create infinite memory?</li>
          <li>AI is currently a field in search of solutions, how do we change that?</li>
          <li>What does everyone who is building in AI right now need and how can someone build a business around that?</li>
          <li>Can search engines finally be disrupted?</li>
          <li>How do companies go from having a search engine like Google, and dominating other fields like cloud services, workspace management, phones, etc. ?</li>
          <li>Do we need to train ML models anymore(except for specific use cases)?</li>
          <li>How do I build a chrome extension where I can type in a question and it gets submitted to this list of questions?</li>
          <li>How can I optimize new learning styles for a post classroom life?</li>
          <li>Build a sentiment classifier of news article links using OpenAI and predict stock market.</li>
        </ul>
      </div>
      <div className="companies">
        <h2 className="text-xl font-bold">Companies I strongly believe in.</h2>
        <ul className="block list-disc m-4 mx-0 pl-10">
          <li><a href="https://imbue.com/" target="_blank">imbue - building the best agents</a></li>
          <li><a href="https://jenni.ai/" target="_blank">jenni - Jasper but better</a></li>
          <li><a href="https://www.cursor.so/" target="_blank">cursor.so - AI Code Editor</a></li>
          <li>more linked in my Notes</li>
        </ul>
      </div>
    </div>
    
  );
}
