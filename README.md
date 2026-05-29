# Interactive AI Portfolio

A professional, interactive AI-powered portfolio tool showcasing analysis and insights capabilities. Perfect for demonstrating AI skills to recruiters and employers.

## Features

- **Sentiment Analyzer** — Analyze text for tone, sentiment, and key themes
- **Research Assistant** — Get structured research findings on any topic
- **Content Summarizer** — Break down and summarize content effectively
- **Data Insights** — Generate AI-powered insights from data

All powered by Claude's API for real, production-grade AI capabilities.

## Live Demo

Try the tool live (once deployed):
- Vercel: `https://your-vercel-url.vercel.app`
- Netlify: `https://your-netlify-url.netlify.app`

## Getting Started

### Prerequisites

- A Claude API key from [console.anthropic.com](https://console.anthropic.com)
- Git and GitHub account (for pushing the repo)
- Node.js (optional, only if you want to run locally with a dev server)

### Local Setup

1. Clone the repository:
```bash
git clone https://github.com/mitali06/interactive-ai-portfolio.git
cd interactive-ai-portfolio
```

2. Open `index.html` in your browser:
```bash
# Option 1: Direct open
open index.html

# Option 2: Using Python (simple server)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

3. The app will prompt for your Claude API key when you try to run a demo

### Environment Setup

When deploying, you'll need to securely handle your Claude API key:

**Option 1: Client-side (Not recommended for production)**
- Users provide their own API key
- Add a settings page to store it locally

**Option 2: Serverless backend (Recommended)**
- Use Vercel or Netlify Functions
- Keep API key secure on the backend
- See deployment instructions below

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repo
5. Add environment variable:
   - Name: `CLAUDE_API_KEY`
   - Value: Your Claude API key from [console.anthropic.com](https://console.anthropic.com)
6. Deploy!

```bash
# Or deploy via CLI
npm install -g vercel
vercel
```

**Live URL:** `https://interactive-ai-portfolio.vercel.app`

### Deploy to Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your GitHub repo
5. Add build settings:
   - Build command: (leave empty for static)
   - Publish directory: `.`
6. Add environment variable:
   - Key: `CLAUDE_API_KEY`
   - Value: Your Claude API key
7. Deploy!

**Alternative - Drag & Drop:**
- Simply drag the project folder to Netlify
- Configure environment variables after deployment

**Live URL:** `https://interactive-ai-portfolio.netlify.app`

## How to Use

1. **Open the app** in your browser
2. **Select a tool** from the top tabs (Sentiment Analyzer, Research, etc.)
3. **Enter your input** (text to analyze, question to research, etc.)
4. **Click the action button** to see AI-powered results
5. **Share with recruiters** — The live link is your portfolio

## API Key Security

**Important:** Never commit your API key to GitHub!

### For Production:
- Use environment variables (Vercel/Netlify handles this)
- Implement a backend proxy to hide your key
- Consider rate limiting and usage monitoring

### For Development:
- Get a free API key at [console.anthropic.com](https://console.anthropic.com)
- Keys have free trial credits
- Monitor usage in the console

## File Structure

```
interactive-ai-portfolio/
├── index.html          # Main application
├── README.md           # This file
├── LICENSE             # MIT License
├── package.json        # Project metadata
└── .gitignore          # Git ignore rules
```

## Customization

### Add Your Profile Info

Edit the header section in `index.html`:
```html
<div class="header">
  <h1>AI Analysis Portfolio</h1>
  <p>Interactive demos of AI-powered insights and analysis capabilities</p>
</div>
```

### Change Tool Names or Features

Modify the tab buttons and tool sections in the HTML to match your specific AI skills.

### Add Your Own Tools

The API structure is simple — add a new tool by:
1. Adding a new tab button
2. Adding a new `.tool-section` div
3. Creating a corresponding JavaScript function
4. Calling `callClaudeAPI(prompt)` with your custom prompt

## Technologies Used

- HTML5
- CSS3
- JavaScript (vanilla)
- Claude API (Anthropic)

## Examples

### Example 1: Sentiment Analysis
**Input:** "This product is amazing but customer service was terrible"
**Output:** Sentiment breakdown, tone analysis, key themes

### Example 2: Research Assistant
**Input:** "What are current trends in AI ethics in 2026?"
**Output:** Structured research findings with key points and recommendations

### Example 3: Content Summarizer
**Input:** [Long article or report]
**Output:** Executive summary, main points, key takeaways

### Example 4: Data Insights
**Input:** [Sales numbers, metrics, or statistics]
**Output:** Patterns, trends, findings, and recommendations

## LinkedIn & Job Applications

**Share your portfolio:**
1. Deploy to Vercel or Netlify (get live URL)
2. Add to your LinkedIn profile:
   - Under "Open to work" → add portfolio link
   - In About section
   - On your website/portfolio
3. Include in job applications:
   - Cover letters: "See my AI portfolio: [link]"
   - Resume: Add a "Projects" section with link
   - Application forms: Paste the URL

## Troubleshooting

**API calls not working?**
- Check your Claude API key is valid
- Verify it has available credits
- Check browser console for errors (F12)

**Deployment issues?**
- Ensure environment variables are set correctly
- Check that the repo is public (for GitHub integration)
- Verify build settings match your platform

**UI not loading?**
- Clear browser cache (Ctrl+Shift+Delete)
- Try a different browser
- Check that index.html is in the root directory

## Next Steps

- [ ] Deploy to Vercel or Netlify
- [ ] Test all tools with sample inputs
- [ ] Add to LinkedIn profile
- [ ] Share with recruiters
- [ ] Monitor usage in Claude console
- [ ] Customize tools to match your specific skills

## License

MIT License — see LICENSE file for details

## Support

For issues or questions:
- Check Claude API docs: [docs.anthropic.com](https://docs.anthropic.com)
- GitHub Issues: Create an issue in this repo
- Anthropic Support: [support.anthropic.com](https://support.anthropic.com)

## Author

Created by [@mitali06](https://github.com/mitali06)

---

**Make your AI skills stand out!** This portfolio is your interactive resume. Happy deploying! 🚀
