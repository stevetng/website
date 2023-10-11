import Link from 'next/link';

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
handleVisitedState('higbie-link');
handleVisitedState('twitter-link');
handleVisitedState('usc-entre-link');
handleVisitedState('btc-link');
handleVisitedState('gpt-code-link');
handleVisitedState('gpt-site-link');


export default function Projects() {
    return (
        <div id="projects_page">
            <h1 className="block text-2xl my-3 mx-0 font-bold">Projects</h1>
            <p className="block my-4 mx-0">My side projects include everything from live events, to random coding, to quant things, to research projects to writing. Click <a id="home-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="/">here</a> to go back home.</p>
            <ul className="block list-disc m-4 mx-0 pl-10">
                <li><p style={{ display: 'inline' }}><span className="font-bold">A Walk to Class</span> -- A Video I worked on with my friend from USC, William Higbie exploring how we can capture the serendipity of a walk to class. </p>[<a id="higbie-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://drive.google.com/file/d/1iFMrFEvFb7Tg7wziUAUhEV7VFncTpdMS/view?usp=sharing" target="_blank">Link</a>]
                </li>
                <li><p style={{ display: 'inline' }}><span className="font-bold">USC Entrepreneurship Guide</span> -- I wrote up a blog post detailing different parts of the USC entrepreneurial ecosystem to give beginners a place to start exploring.</p> [<a id="usc-entre-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://medium.com/@stevetng/usc-entrepreneurship-a-beginners-guide-to-getting-involved-373a5cc832de" target="_blank">Link</a>]
                </li>
                <li><p style={{ display: 'inline' }}><span className="font-bold">Case Study on Twitter Fleets</span> -- (With Drithi Iyer and Sumegha Aryal) This was my first foray into product management/prototyping as part of the first Product Buds Fellowship. I made a 27 page pitch deck on how Fleets could have been improved. </p>[<a id="twitter-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://docs.google.com/presentation/d/1CEWb3mwOMln45hiXBhtQoC2js33JywQL/edit?usp=sharing&ouid=101262000765985839539&rtpof=true&sd=true" target="_blank">Link</a>]
                </li>
                <li><p style={{ display: 'inline' }}><span className="font-bold">GBTC + BTC Quant Case Study</span> -- (Lead by Andrew Fisher) For my master's level quant class, we examined the relationship between BTC and Grayscale's Bitcoin trust due to the discount we noticed of GBTC. We used a L/S strategy to determine if there was potential arbitrage opportunities here.</p> [<a id="btc-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://docs.google.com/document/d/1asTmgKw8J0mIl82fPoGlA0S3wTyWIBdcUi-RUitPcnw/edit?usp=sharing" target="_blank">Link</a>]
                </li>
                <li><p style={{ display: 'inline' }}><span className="font-bold">GPT Landing Page w/ React</span> </p> I followed a three hour long React tutorial from JavaScript Mastery Youtube Channel, learning how to structure a React app and create components.[<a id="gpt-code-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://github.com/stevetng/react_practice" target="_blank">Code</a>]  [<a id="gpt-site-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://react-practice-ed1m.vercel.app/" target="_blank">Site</a>]
                </li>
            </ul>
        </div>
    )
}