import diff from 'microdiff';

// Generic type for a patch
export type Patch = ReturnType<typeof diff>;

/**
 * Applies a pSON.parse(JSON.stringify(state));

  patch.forEach((ci < path.length - 1; i++) {
      current = current[path[i]];
    }
ge.type === 'CREATE' || change.type === 'CHANGE') {
      curnt.splice(Number(key), 1);
      } else {
        delete current[key];
      }
    }
  });

  return newState;
}

/**
 * Storage helpers
 */
export const saveToStorage = (key: string, data: unknown) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (_e) {
    console.error("Storage quota exceeded", _e);
  }
};

export const loadFromStorage = <T>(key: string): T | null => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};
