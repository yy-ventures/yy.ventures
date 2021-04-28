// import fetch from 'node-fetch';

export const get = async (url, token) => {
  try {
    const init = {
      method: 'GET',
      ...(token && {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }),
    };
    return await (await fetch(url, init)).json();
  } catch (error) {
    return [{ error: error.message }];
  }
};
export const post = async (url, body, token) => {
  try {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token && {
          Authorization: `Bearer ${token}`,
        }),
      },
      body: JSON.stringify(body),
    };
    return await (await fetch(url, init)).json();
  } catch (error) {
    return [{ error: error.message }];
  }
};
export const form = async (endpoint, body, headers, token) => {
  try {
    const url = process.env.API + endpoint;
    const init = {
      method: 'POST',
      headers: {
        ...headers,
        ...(token && {
          Authorization: `Bearer ${token}`,
        }),
      },
      body,
    };
    return await (await fetch(url, init)).json();
  } catch (error) {
    return [{ error: error.message }];
  }
};
export const put = async (endpoint, body, token) => {
  try {
    const url = process.env.API + endpoint;
    const init = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...(token && {
          Authorization: `Bearer ${token}`,
        }),
      },
      body: JSON.stringify(body),
    };
    return await (await fetch(url, init)).json();
  } catch (error) {
    return [{ error: error.message }];
  }
};
export const graph = async (query) => {
  try {
    const url = process.env.API + '/graphql';
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    };
    return await (await fetch(url, init)).json();
  } catch (error) {
    return [{ error: error.message }];
  }
};
