import React from "react";

const CoachComments = () => {
  return (
    <div>
      <pre
        style={{
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            fontSize: "8px",// Adjust line height as needed (1.5 is an example)
            fontFamily: "monospace", // Optional: adds monospace font for a 'pre' style
          }}
      >
        {`1. Week 1: Strong start, but focus on maintaining form and relaxation 
   throughout the race.
2. Week 2: Improved posture and pacing; work on syncing arm swing 
   with leg drive.
3. Week 3: Great progress; quicken leg turnover and stay relaxed for a 
   strong finish.`}
      </pre>
    </div>
  );
};

export default CoachComments;
