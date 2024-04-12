import Link from 'next/link';
import Head from 'next/head';

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

handleVisitedState('crawler-link');
handleVisitedState('twitter-link');
handleVisitedState('arc-link');
handleVisitedState('higbie-link');
handleVisitedState('twitter-link');
handleVisitedState('usc-entre-link');
handleVisitedState('btc-link');
handleVisitedState('gpt-code-link');
handleVisitedState('gpt-site-link');
handleVisitedState('number-code-link');
handleVisitedState('carrot-code-link');
handleVisitedState('zelda-link');



export default function Projects() {  
    return (
        <>
            <Head>
            <title>Steve Nguyen</title>
            <meta property="og:title" content="Projects" />
            </Head>
            <div id="projects_page">
                <h1 className="block text-2xl my-3 mx-0 font-bold">Projects</h1>
                <p className="block my-4 mx-0">My side projects include everything from live events, to random coding, to quant things, to research projects to writing. Click <a id="home-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="/">here</a> to go back home.</p>
                
                <ul className="block list-disc m-4 mx-0 pl-10">
                    <li><p style={{ display: 'inline' }}><span className="font-bold">News, but make it sports.</span> -- I played around with the EXA and Open AI APIs and email servers to send myself a weekly email containing the latest political news articles. I used the APIs to fetch and then summarize the articles in the tone of a sports narrator so they'd be more interesting to read.  </p>[<a id="crawler-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://github.com/stevetng/sports_narrator" target="_blank">Link</a>]
                              </li>
                    <li><p style={{ display: 'inline' }}><span className="font-bold">Web Crawling Visualization</span> -- A passion project inspired by how Google uses web crawlers to index trillions of URLs. I used a bunch of python libraries to build a website crawler that takes in a URL and creates a graph of URLs mentioned on the site.  </p>[<a id="crawler-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://github.com/stevetng/web-crawler" target="_blank">Link</a>]
                          </li>
                    <li><p style={{ display: 'inline' }}><span className="font-bold">iMessage Data Analysis</span> -- Used SQL + ChatGPT to answer questions like who are the top 10 people I text? </p>[<a id="twitter-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://twitter.com/WoahIsThatSteve/status/1742696109875900787" target="_blank">Link</a>]
                        </li>
                    <li><p style={{ display: 'inline' }}><span className="font-bold">Arc Browser Wrapped</span> --(With Jess Wang and Karla Leung) Experimented with what the design would look like for a browsing wrapped for users of the web browser Arc.(14k views and reply from the CEO!) </p>[<a id="arc-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://x.com/WoahIsThatSteve/status/1730043860351357429?s=20" target="_blank">Link</a>]
                    </li>
                    <li><p style={{ display: 'inline' }}><span className="font-bold">A Walk to Class</span> -- A Video I worked on with my friend from USC, William Higbie exploring how we can capture the serendipity of a walk to class. </p>[<a id="higbie-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://www.instagram.com/reel/Cu4rNy0A6U0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target="_blank">Link</a>]
                    </li>
                    <li><p style={{ display: 'inline' }}><span className="font-bold">USC Entrepreneurship Guide</span> -- I wrote up a blog post detailing different parts of the USC entrepreneurial ecosystem to give beginners a place to start exploring.</p> [<a id="usc-entre-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://medium.com/@stevetng/usc-entrepreneurship-a-beginners-guide-to-getting-involved-373a5cc832de" target="_blank">Link</a>]
                    </li>
                    <li><p style={{ display: 'inline' }}><span className="font-bold">Case Study on Twitter Fleets</span> -- (With Drithi Iyer and Sumegha Aryal) This was my first foray into product management/prototyping as part of the first Product Buds Fellowship. I made a 27 page pitch deck on how Fleets could have been improved. </p>[<a id="twitter-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://docs.google.com/presentation/d/1CEWb3mwOMln45hiXBhtQoC2js33JywQL/edit?usp=sharing&ouid=101262000765985839539&rtpof=true&sd=true" target="_blank">Link</a>]
                    </li>
                    <li><p style={{ display: 'inline' }}><span className="font-bold">GBTC + BTC Quant Case Study</span> -- (Lead by Andrew Fisher) For my master's level quant class, we examined the relationship between BTC and Grayscale's Bitcoin trust due to the discount we noticed of GBTC. We used a L/S strategy to determine if there was potential arbitrage opportunities here.</p> [<a id="btc-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://docs.google.com/document/d/1asTmgKw8J0mIl82fPoGlA0S3wTyWIBdcUi-RUitPcnw/edit?usp=sharing" target="_blank">Link</a>]
                    </li>
                    <li><p style={{ display: 'inline' }}><span className="font-bold">GPT Landing Page w/ React</span> </p> -- I followed a three hour long React tutorial from JavaScript Mastery Youtube Channel, learning how to structure a React app and create components.[<a id="gpt-code-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://github.com/stevetng/react_practice" target="_blank">Code</a>]  [<a id="gpt-site-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://react-practice-ed1m.vercel.app/" target="_blank">Site</a>]
                    </li>
                    <li><p style={{ display: 'inline' }}><span className="font-bold">Carrot - Tab Manager Chrome Extension</span> </p> -- My first experience using OpenAI's API to organize all open tabs into categories and display/manage them in a chrome extension pop up. [<a id="carrot-code-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://github.com/stevetng/carrot" target="_blank">Code</a>]
                    </li>
                    <li><p style={{ display: 'inline' }}><span className="font-bold">Number Checker (tutorial by Samson Zhang)</span> </p> -- Followed a thirty minute youtube tutorial to create a neural network from scratch to identify (w/ 80%~ success rate) images of digits. [<a id="number-code-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://github.com/stevetng/numberChecker" target="_blank">Code</a>]
                    </li>
                    <li><p style={{ display: 'inline' }}><span className="font-bold">Legend of Zelda TOTK Marketing Plan</span> </p> -- (With Sage Wu) Created a 33 slide presentation on how Nintendo should market their recent Legend of Zelda game as part of my Gaming Marketing class. [<a id="zelda-link" className="text-blue-700 focus:text-purple-900 focus:outline-none underline" href="https://docs.google.com/presentation/d/1QNhO2eLYK8mk9Rr66kL1JiUSu_EF7HsYX9KZCFLxmJA/edit?usp=sharing" target="_blank">Link</a>]
                    </li>
                </ul>
            </div>
        </>
    )
}