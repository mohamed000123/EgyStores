// styles
import styles from "../styles/about.module.css";
// mui
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  const questions = [
    {
      id: 1,
      question: "who are we",
      answer: "we are nike company we sell shoes",
    },
    {
      id: 2,
      question: "who are we",
      answer: "we are nike company we sell shoes",
    },
    {
      id: 3,
      question: "who are we",
      answer: "we are nike company we sell shoes",
    },
    {
      id: 4,
      question: "who are we",
      answer: "we are nike company we sell shoes",
    },
    {
      id: 5,
      question: "who are we",
      answer: "we are nike company we sell shoes",
    },
    {
      id: 6,
      question: "who are we",
      answer: "we are nike company we sell shoes",
    },
  ];
  return (
    <>
      {questions.map((item) => {
        return (
          <div className={styles.questionContainer}>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        );
      })}
    </>
  );
};

export default Faq;
