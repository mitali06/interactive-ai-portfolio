export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { action, prompt } = req.body;

  // Validate input
  if (!prompt || !action) {
    return res.status(400).json({ error: 'Missing prompt or action' });
  }

  // Get API key from environment variables
  const apiKey = process.env.CLAUDE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ 
      error: 'API key not configured. Please add CLAUDE_API_KEY to environment variables in Vercel.' 
    });
  }

  try {
    // Call Claude API
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-5-sonnet-20241022',
        max_tokens: 1000,
        messages: [
          { role: 'user', content: prompt }
        ]
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Claude API Error:', error);
      return res.status(response.status).json({ 
        error: error.error?.message || 'Claude API call failed' 
      });
    }

    const data = await response.json();
    const result = data.content[0].text;

    return res.status(200).json({ result });
  } catch (error) {
    console.error('Server Error:', error);
    return res.status(500).json({ 
      error: 'Server error: ' + error.message 
    });
  }
}
