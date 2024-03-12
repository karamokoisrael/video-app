import { useEffect, useState } from "react";

export default function useInfinitePercentage() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the count
      setPercentage((prevPercentqge) => (prevPercentqge + 1) % 101);
    }, 1000); // Adjust the interval as needed (in milliseconds)

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  return [percentage];
}
