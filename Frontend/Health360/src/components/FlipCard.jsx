import React, { useState} from "react";
import {Card,CardContent,Typography} from "@mui/material";

const FlipCard=({frontContent, backContent})=>{

const [isFlipped, setIsFlipped] = useState(false);

const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return(

    <div style={{
        perspective: "1000px",
        width: "500px",
        height: "320px",
        margin: "20px",
        cursor: "pointer"    
    }}
    onClick={handleFlip}>
    <div 
    style={{
        width: "100%",
        height: "100%",
        position: "relative",
        transformStyle: "preserve-3d",
        transition: "transform 0.6s",
        transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
    }}
    >
{/* Cara frontal */}
<Card
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardContent>
            <Typography variant="h5">{frontContent}</Typography>
          </CardContent>
        </Card>

        {/* Cara trasera */}
        <Card
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <CardContent>
            <Typography variant="h5">{backContent}</Typography>
          </CardContent>
        </Card>

    </div>


    </div>


  )
}

export default FlipCard