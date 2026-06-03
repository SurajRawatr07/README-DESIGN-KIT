import { useState, useMemo, useEffect } from 'react';
import { TemplateUtils } from '@/utils/templateUtils';
import { Sidebar } from '@/components/Editor/Sidebar'; 
import { ReadmePreview } from '@/components/ReadmePreview'; 
import type { E
export const EditorPage = () => {
  const [variables, setVariables] = useState({ NAME: '', GITHUB_USER: '' });
  // 1. Fixes initialElements erroreChange={handleVariableChange} />
      
      <main clas
      </main>
    </div>
  );
};
