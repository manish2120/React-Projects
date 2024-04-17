import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Accord = (props) => {
  return (
    <>
    <Accordion>
      <AccordionSummary
      expandIcon={<ArrowDropDownIcon />}
      aria-controls="panel2-content"
      id="panel2-header"
      >
      <Typography >
        <p>{props.question}</p>
        </Typography>
      </AccordionSummary>

      <AccordionDetails
       className="bg-slate-300"
       >
      <Typography>
        <p>{props.answer}</p>
        </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default Accord;