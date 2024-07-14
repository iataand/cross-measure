import { Button } from "@/components/ui/button";
import PlayButton from "use-sound";
import useSound from "use-sound";
import { list } from "aws-amplify/storage";

import { getUrl } from "aws-amplify/storage";
import { useEffect } from "react";

async function listClips() {
  try {
    const result = await list({
      path: "public/",
      // Alternatively, path: ({identityId}) => `protected/${identityId}/photos/`
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

export default function AudioClip({ audioClip }: any) {
  const audioUrl =
    "https://crossmeasure17003eb82fd84b2d81e511c1633035fe99ec2-dev.s3.eu-central-1.amazonaws.com/public/cali.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDGV1LWNlbnRyYWwtMSJGMEQCIGY609u7y34JtshDdFF1%2FTKK9Xfctnffdzz1hjfjqFEeAiBmOWoveprvMQT6GqTtI6XvTKvcfQohsp71AP03dByuUSrkAgh0EAAaDDIxMTEyNTc2MTUwNCIMEFpUdRpPsjVz4%2BY%2BKsECr4op9EBU1Jr3%2F%2B%2FIFBxXqNxJP75Kxwnf3cK781NdvxswEqQS61ToyhHK3aRYeXv%2F%2FvrN9OAfszgqdCnC77ZuVxrC9tKudhaS4p8xu5zmSsR4ZmCRuS1nQQBf04jLN6UNjizT5WjDdQl0TML84XrRZaBjQKfvVElsFfFPDH8ucJh%2FrDVdGrjppe1gNxoFplwMt4H1tBCzn7iSmQW36hcawOlfFTyEHY9ZXAXBzjj04OEZE7qXJVe%2BYZrqEkjlvv3zpGXvrEOuTQZJDAEeU4UlSLgnrgu%2BTFCBNYC2BlJG22XzerYixlDJX0RVemd1Ite3tr88X2PnMQECI1Rbw6sGPJsA1Xf3MusYwOYt1qPwNL5cK3OTQc60bHhbTyDMsNL7L1aZsxI9TdJH2H1t9Zh1T9jyQGNMkjgeli3geipgvYmiMMKYxLQGOrQCwwkHe0VZEid1h2%2FsiWiO%2FHuvSRJE77%2FcEd9c6mqtA4YEKHPewYIIrc3lNFSZ0OX0HWr%2FP1nOxqybVTcs6j%2Bmsua7NfqF6Jt4g4WtBj%2BwgecASz6DahnNxs3PhLMW7Zz53%2FPt7u6aTV4zrrccp28vrvQABhY5X1IGJbSwwD3%2BP%2ByrileSnO2MRZAIkKhznAXeEn1Bai1IE8eD0y1GKj1g99n8s71s9QWHDzKXIDDifBmlQI3yFp7VKu3bSQ2SR%2Ff7ZmezDY1Nkh6gYqGLewhXbvN0z6OxdbjXWYC7Q0CEGcIwPiFTeI7icDpxGYkcajLjmIbjKzR3%2FOcY%2B8Cj%2BBXkHaVivbI7Evc628R6jT03RRJuuLNNvOugcC%2BHgNzsuIU6xPO9uOJI2N6t2I8%2B%2Bj7C9x7h4vQ%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240712T173324Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATCKATOXQFBQHLA4J%2F20240712%2Feu-central-1%2Fs3%2Faws4_request&X-Amz-Signature=5917740139762b58be26ac62276a41827d94c76b141fe6ba1afaa80ab02ff690";
  const [play, { stop }] = useSound(audioUrl, { volume: 0.75 });

  useEffect(() => {
    listClips();
  }, []);
  // return <></>;
  return <Button onClick={() => play()} />;
}
