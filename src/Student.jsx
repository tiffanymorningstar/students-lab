import Score from "./Score";

const Student = (props) => {
  return ( 
    <>
    <h1>{props.student.name}</h1>
    <p>{props.student.bio}</p>
    {props.student.scores.map((score, idx) => 
    <Score key={idx} score={score} />
    )}
    </>
   );
}
 
export default Student;