"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { cn } from "../../lib/utils";

interface EncryptedTextProps {
  text: string;
  encryptedClassName?: string;
  revealedClassName?: string;
  revealDelayMs?: number;
  interval?: number;
  className?: string;
  startDelay?: number;
}

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

export function EncryptedText({
  text,
  encryptedClassName = "text-neutral-500",
  revealedClassName = "text-white",
  revealDelayMs = 50,
  interval = 30,
  className,
  startDelay = 0,
}: EncryptedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [revealedCount, setRevealedCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const revealRef = useRef<NodeJS.Timeout | null>(null);

  const getRandomChar = useCallback(() => {
    return CHARS[Math.floor(Math.random() * CHARS.length)];
  }, []);

  // Initialize with encrypted text
  useEffect(() => {
    const encrypted = Array.from({ length: text.length }, () => getRandomChar()).join("");
    setDisplayText(encrypted);
  }, [text, getRandomChar]);

  // Start the reveal after delay
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  // Scramble effect for unrevealed characters
  useEffect(() => {
    if (!hasStarted || isComplete) return;

    intervalRef.current = setInterval(() => {
      const revealed = text.slice(0, revealedCount);
      const remaining = text.length - revealedCount;
      const encrypted = Array.from({ length: remaining }, () => getRandomChar()).join("");
      setDisplayText(revealed + encrypted);
    }, interval);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [hasStarted, isComplete, revealedCount, text, interval, getRandomChar]);

  // Reveal characters one by one
  useEffect(() => {
    if (!hasStarted || isComplete) return;

    if (revealedCount >= text.length) {
      setIsComplete(true);
      setDisplayText(text);
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    revealRef.current = setTimeout(() => {
      setRevealedCount((prev) => prev + 1);
    }, revealDelayMs);

    return () => {
      if (revealRef.current) clearTimeout(revealRef.current);
    };
  }, [hasStarted, isComplete, revealedCount, text, revealDelayMs]);

  // If complete, just show the final text
  if (isComplete) {
    return (
      <span className={cn(className, revealedClassName)}>
        {text}
      </span>
    );
  }

  return (
    <span className={cn(className)}>
      {displayText.split("").map((char, idx) => (
        <span
          key={idx}
          className={cn(
            "transition-colors duration-100",
            idx < revealedCount ? revealedClassName : encryptedClassName
          )}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}

export default EncryptedText;
