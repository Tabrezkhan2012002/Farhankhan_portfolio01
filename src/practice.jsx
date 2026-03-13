import { useState, useEffect, useRef } from "react";

function MySection() {
  const [animate, setAnimate] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true); // trigger animation when element is visible
        }
      },
      {
        threshold: 0.5, // trigger when 50% of element is visible
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ${
        animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      I animate when you scroll to me!
    </div>
  );
}

export default MySection;