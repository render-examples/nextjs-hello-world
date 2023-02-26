"use client";
import { useState } from "react";
export default function Topic() {
    const [inputValue, setInputValue] = useState("");

    const onChangeHandler = event => {
       setInputValue(event.target.value);
    };
  }