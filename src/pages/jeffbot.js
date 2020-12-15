import React, { useState } from 'react';
import FrankyNavbar from '../components/FrankyNavbar';

const Jeffbot = () => {

    const [status, setStatus] = useState(0);

    const data = {
        guildId: '295140989377708033',
        textChannelId: '750792463630729246'
    };

    const jeffbotStatus = async () => {
        const res = await fetch('http://localhost:8082/check-guild-channel', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        return res.json();
        
    }

    return (
        <div>
            <FrankyNavbar/>
            <p>Jeffbot integration with the web is coming soon!</p>
            {/* <button onClick={() => console.log(jeffbotStatus().then(data => setStatus(data.successful)))}>
                Check Guild Status
            </button>
            <div>
                Status of Jeffbot { status ? 'successful' : 'failed' }
            </div> */}
        </div>
    )

}

export default Jeffbot;