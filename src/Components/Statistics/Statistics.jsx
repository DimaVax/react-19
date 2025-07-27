import { useCount } from "../hooks/useCount";


export const Statistics = ({good, neutral, bad}) => {
const total = useCount(good, neutral, bad)
    return (  
          <>
          {total > 0 ? (
            <>
            <h2>Statistics</h2>
            <ul>
              <li>Good: {good}</li>
              <li>Neutral: {neutral}</li>
              <li>Bad: {bad}</li>
              <li>
                Total: {total}
              </li>
              <li>
                Positive feedback:{" "}
                {Math.round(
                  (good /
                    (total)) *
                    100
                )}
                %
              </li>
            </ul>
            </>
            
          ) : (
            <h2>There is no feedback</h2>
          )}
            
          </>
    );
}