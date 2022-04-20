import React, { useEffect, useState } from "react";
import DisplayCounter from "../components/DisplayCounter";
import Loader from "../components/Loader";
import ModifyCounter from "../components/ModifyCounter";

export default function Counter() {
  const [counter, setCounter] = useState(1);
  const [isSaving, setIsSaving] = useState(false);
  const KEY = "prathamesh";

  const api =
    "https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json";

  const updateCounter = (newCounter) => {
    if (checkCounter(newCounter)) {
      return;
    } else {
      if (newCounter) {
        setCounter(parseInt(newCounter));
      } else {
        setCounter("");
      }
    }
  };

  const checkCounter = (newCounter) => {
    const MAX_VALUE = process.env.REACT_APP_MAX_VALUE || 1000;
    return newCounter > MAX_VALUE;
  };

  useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => {
        if (data[KEY]) {
          setCounter(parseInt(data[KEY]));
        }
      });
  }, []);

  useEffect(() => {
    const saveCounter = () => {
      setIsSaving(true);
      fetch(api, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ [KEY]: counter }),
      }).then(() => setIsSaving(false));
    };

    saveCounter();
  }, [counter]);

  return (
    <>
      <div style={{ visibility: isSaving ? "visible" : "hidden" }}>
        <Loader />
      </div>
      <ModifyCounter counter={counter} updateCounter={updateCounter} />
      <DisplayCounter counter={counter} />
    </>
  );
}
