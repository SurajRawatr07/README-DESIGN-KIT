import { useEffect, useRef } from "react";

const DOT_COUNT = 8;


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
