import { useState, useMemo, useEffect } from 'react';
import { TemplateUtils } from '@/utils/templateUtils';
import { Sidebar } from '@/components/Editor/Sidebar'; 
import { ReadmePreview } from '@/components/ReadmePreview'; 
import type { E
export const EditorPage = () => {
  const [variables, setVariables] = useState({ NAME: '', GITHUB_USER: '' });
  // 1. Fixes initialElements erroreChange={handleVariableChange} />
      
      <main className="flex-1 overflow-auto p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-xl font-bold">README Preview</h1>
          {/* 4. Use ReadmePreview to render the processed elements */}
          <ReadmePreview elements={dynamicElements} preset='default' onPresetChange={()=>{}}/>
        </div>
      </main>
    </div>
  );
};
