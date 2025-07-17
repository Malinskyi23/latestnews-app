export async function handler(event) {
  const apiKey = process.env.NEWSAPI_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'API key is not configured' }),
    };
  }

  const params = event.queryStringParameters || {};
  const endpoint = params.endpoint || 'top-headlines';

  // Удаляем endpoint, чтобы не передавать его как параметр API
  delete params.endpoint;

  const queryParams = new URLSearchParams(params);
  const url = `https://newsapi.org/v2/${endpoint}?${queryParams.toString()}`;

  try {
    const response = await fetch(url, {
      headers: {
        'X-Api-Key': apiKey, // or 'Authorization': apiKey
      },
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        statusCode: response.status,
        body: JSON.stringify(errorData),
      };
    }

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*', // чтобы фронтенд мог получать ответ
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Internal Server Error' }),
    };
  }
}
