# Creating an API Key
After logging into your account, navigate to the [Profile](https://pastecode.io/profile) page to create an API key.

To enhance the security of your API key, you can choose the expiration date and set up an IP address whitelist. Additionally, you have the option to toggle the `Allow Login` feature to utilize your API key for login purposes.

### Warnings:
Please take note of the following important information regarding API keys:

- API keys can be used for logins and to display raw snippet contents. This means that both your private snippets and publicly accessible snippets from other users can be accessed using your API key.

- API keys function similarly to passwords. If you enable login functionality with your API key, it will be used to obtain a JSON Web Token (JWT) and will bypass two-factor authentication (2FA). This can potentially put your account at risk if the API key falls into the wrong hands.

- Deactivating the API key does not automatically log you out from any active sessions you may have logged into using that key. However, the same API key cannot be used again to obtain a new JWT. To log out, you will need to do it manually or wait until the JWT expires and the session terminates.

- It is crucial to keep your API keys secure and avoid enabling login functionality unnecessarily. Exercise caution when using API keys with unofficial clients, and refrain from sharing them with others.

Please ensure the safety of your API keys and use them responsibly to protect the integrity of your account.