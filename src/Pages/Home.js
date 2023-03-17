import React from 'react'
import "./Home.css"
import { Contact } from '../components/Contact'

function Home() {
    return (
        <div 
        
        style={{display:"flex", flexDirection:'column', alignItems:"center", marginLeft:"auto", marginRight:"auto", textAlign:"center"}}
        >
            <div>
                <h4 class="desc"> Farland uses new JS technology to keep code light, simple,<br/> and quick for developers around the world to use for bootstrapping. </h4>
                <h1>Farland by the numbers</h1>
                <div class="container">
                    <div class="e1"><i class="fa-solid fa-code-pull-request"></i><br/><span2 id="monkey"><b>10264</b><br/></span2><p>requests/second</p></div>
                    <div class="e2"><i class="fa-solid fa-shapes"></i><br/><span2><b>6K+</b><br/></span2><p>projects served</p></div>
                    <div class="e3"><i class="fa-solid fa-person-running"></i><br/><span2><b>99.8%</b><br/></span2><p>cache hit ratio</p></div>
                </div>

                <div>
                    <h1>Perks of using Farland</h1>
                    <div class="container">
                        <div >Plenty of CDN and DNS providers</div>
                        <div >Cache saving and failproof failover</div>
                        <div >Tons of servers in our network</div>
                        <div >State-of-the-art load balancing</div>
                        <div >Lightweight CDN caching</div>
                        <div >One line of code to get started</div>
                    </div>

                    <h2 id="maiousbg">Not enough?</h2><br/>
                        <button>Try it yourself, for free.</button>
                </div>
            </div>
            <Contact />
        </div>
    )
}

export default Home