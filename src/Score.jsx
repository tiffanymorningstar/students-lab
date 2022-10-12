const Score = (props) => {
  return ( 
    <>
    <p>{props.score.score}</p>
    <p>{props.score.date}</p>
    </>
   );
}
 
export default Score;