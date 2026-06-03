import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import obile(window.innerWidth < 768);
    };
    checkMobile();
    windoScrollRestoration />
              <Routes>

                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/elements" element={<Layout><Elements /></Layout>} />
                <Route path="/templates" element={<Layout><TemplateLibraryPage /></Layout>} />
                <Route path="/projects" element={<Layout><ProjectsSection /></Layout>} />
                <Route path="/submit" element={<Layout><SubmitSection /></Layout>} />
                <Route path="/drag-drop" element={<Layout><DragDropEditor /></Layout>} />
                

                <Route path="/about" element={<Layout><AboutUs /></Layout>} />
                <Route path="/privacy" element={<Layout><PrivacyPolicy /></Layout>} />
                <Route path="/terms" element={<Layout><TermsOfService /></Layout>} />
                <Route path="/readme-generator" element={<Layout><ReadmeGenerator /></Layout>} />
                <Route path="/readme-editor" element={<ReadmeEditor />} />
                <Route path="/markdown-editor" element={<Layout><MarkdownEditor /></Layout>} />
                <Route path="/ai-editor-intro" element={<Layout><AIEditorIntro /></Layout>} />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
              </Routes>
            </BrowserRouter>
            <Toaster richColors />
          </HistoryProvider>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};
