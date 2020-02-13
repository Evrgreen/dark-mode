import React from "react";



export default function EventCard({events}){
    if(events==undefined){
     events=[]
    };
    return(
            <>
            {events.length?
                events.map(event=>
                    <div key={event.title}>
                        <h1>{event.title}</h1>
                        <h2>{`${event.city}, ${event.start_date}/${event.end_date}`}</h2>
                        <div className="event_img">
                            <img src={event.screenshot}/>
                        </div>
                        <p>{event.description}</p>
                        <div className="event__contact">
                            <p>{event.organizer}</p>
                            <p>{event.email}</p>
                            <a href={event.website}>Event Website</a>
                        </div>
                        </div>
                ):null}
                
            </>
    );
};


