import React from 'react'
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemPanel, AccordionItemButton } from 'react-accessible-accordion'
import "./forecast.css"

const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({data}) => {
  return (
    <>
        <label className='title'> Daily </label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0, 7).map((item, idx) => (
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`} />
                                <label className="day"></label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel></AccordionItemPanel>
                </AccordionItem>
                
            ))}
            

        </Accordion>
    </>
  );
};

export default Forecast;