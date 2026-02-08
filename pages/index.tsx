"use client";
import { useState } from "react";

export default function Home() {
  const [yesSize, setYesSize] = useState(1);
  const [noPos, setNoPos] = useState({ top: "65%", left: "55%" });
  const [hideNo, setHideNo] = useState(false);
  const [hearts, setHearts] = useState<number[]>([]);
  const [index, setIndex] = useState(0);
  const [finalMessage, setFinalMessage] = useState("");

  const lines = [
    "Will you be my Valentine, Cutie? 💖",
    "Arey itna attitude kyu? 😂",
    "Ek chhota sa yes bol do na 🥺",
    "Main itna bhi bura nahi hoon 😌",
    "Mere dil ka WiFi sirf tumse connect hota hai 📶❤️",
    "Tum mana karogi toh system hang ho jayega 💻😩",
    "Itni cute ho, thoda sa pyaar de do 💕",
    "Please yaar, drama mat karo 😭",
    "Dekho phir puch raha hoon 😤",
    "Yes bolne me kya jaa raha hai 😏",
    "Main chocolate bhi dunga 🍫😌",
    "Tumhari smile pe full flat hoon 😍",
    "Itna mat bhaago, No button bhi thak gaya 😂",
    "Dil ka notification tum hi ho 🔔💖",
    "Ab toh maan jao na 😩",
    "Ek baar yes bolke dekh lo 😉",
    "Mujhe ignore karna illegal hona chahiye 🚨😂",
    "Cutie please, system crash ho raha hai 😭",
    "Itni der se puch raha hoon 😅",
    "Agar mana kiya toh sad playlist chalu kar dunga 🎵💔",
    "Tum meri default setting ho ❤️",
    "Itna torture mat karo 😩",
    "Last 3 chances bache hain 😤",
    "Last 2 chances 😳",
    "Last 1 chance 😭",
    "Ab seriously puch raha hoon... banogi meri Valentine? 💘"
  ];

  const handleNo = () => {
    const randomTop = Math.random() * 70 + "%";
    const randomLeft = Math.random() * 70 + "%";
    setNoPos({ top: randomTop, left: randomLeft });

    setYesSize((prev) => prev + 0.25);

    if (index < lines.length - 1) {
      setIndex((prev) => prev + 1);
    }
  };

  const handleYes = () => {
    setHideNo(true);
    setFinalMessage("Yayyyyy 😍💖 I knew it cutie!!! You just made my whole year special 💕✨");
    const newHearts = Array.from({ length: 50 }, (_, i) => i);
    setHearts(newHearts);
  };

  return (
    <div className="container">
      <div className="card flex flex-col items-center">

        <img
          src="./panda.png"
          className="main-img"
          alt="valentine"
        />

        <h1 className="title">
          {finalMessage ? finalMessage : lines[index]}
        </h1>

        <div className="btn-area">
          {!finalMessage && (
            <>
              <button
                className="yes"
                style={{ transform: `scale(${yesSize})` }}
                onClick={handleYes}
              >
                Yes 💕
              </button>

              {!hideNo && (
                <button
                  className="no"
                  style={{ top: noPos.top, left: noPos.left }}
                  onClick={handleNo}
                >
                  No 😢
                </button>
              )}
            </>
          )}
        </div>

        <p className="credit">Developer by Yash 💻❤️</p>
      </div>

      {hearts.map((i) => (
        <div
          key={i}
          className="floating-heart"
          style={{
            left: Math.random() * 100 + "%",
            animationDuration: 2 + Math.random() * 3 + "s"
          }}
        >
          💖
        </div>
      ))}

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          background: linear-gradient(135deg, #ff9a9e, #fad0c4);
          font-family: "Segoe UI", sans-serif;
          overflow: hidden;
          position: relative;
          padding: 10px;
        }

        .card {
          background: white;
          padding: 35px;
          border-radius: 25px;
          text-align: center;
          width: 100%;
          max-width: 450px;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .main-img {
          width: 230px;
          border-radius: 20px;
          animation: float 4s ease-in-out infinite;
        }

        @keyframes float {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .title {
          font-size: 20px;
          margin: 20px 0;
          color: #ff4d6d;
          min-height: 60px;
          transition: all 0.4s ease;
        }

        .btn-area {
          position: relative;
          height: 180px;
          margin-top: 20px;
        }

        button {
          padding: 12px 30px;
          border-radius: 20px;
          border: none;
          cursor: pointer;
          font-size: 16px;
          position: absolute;
          transition: all 0.3s ease;
        }

        .yes {
          background: #ff4d6d;
          color: white;
          left: 20%;
          top: 65%;
        }

        .no {
          background: #666;
          color: white;
        }

        .credit {
          margin-top: 20px;
          font-size: 13px;
          color: gray;
        }

        .floating-heart {
          position: absolute;
          bottom: 0;
          font-size: 32px;
          animation: floatUp linear forwards;
        }

        @keyframes floatUp {
          from { transform: translateY(0); opacity: 1; }
          to { transform: translateY(-100vh); opacity: 0; }
        }

        @media (max-width: 480px) {
          .main-img { width: 180px; }
          .title { font-size: 17px; }
        }
      `}</style>
    </div>
  );
}
