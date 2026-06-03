import { useEffect, useRef } from "react";

const DOT_COUNT = 8;

functmouseY = useRef(0);
nst 

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      
      history.unshift({ x: mouseX.current, y: mouseY.current });
      history.pop();

      dotRefs.current.forEach((dot, index) => {
        if (!dot) return;

        const target = history[index];
        const current = positions[index];

        
        current.x += (target.x - current.x) * 0.18;
        current.y += (target.y - current.y) * 0.18;

        dot.style.left = `${current.x}px`;
        dot.style.top = `${current.y}px`;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="cursor-container">
      {Array.from({ length: DOT_COUNT }).map((_, index) => (
        <span
          key={index}
          className="cursor-dot"
          ref={(el) => {
            if (el) dotRefs.current[index] = el;
          }}
        />
      ))}
    </div>
  );
}

export default Cursortrail;
