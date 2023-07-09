# Creating an API Key
After login to your account, go to [Profile](https://pastecode.io/profile) page to create an API key.

You can select the expiration date, and IP address whitelist for making your API key more secure. Also, you can toggle `Allow Login` to use your API key for login purposes.


### Warnings:
API keys can be used for logins and displaying raw snippet contents. Your private snippets and others' public snippets can be accessed via your API key.

API key behaves like a password. If you allow login; they are used to obtain JWT and will bypass 2FA and they can put your account at risk if falls into the wrong hands. Also, deactivating the API key does not automatically log you out from the session you logged in with it. But the same API key cannot be used again to obtain a JWT. So for logging out, you need to do it manually, or will be done eventually when JWT expires. So, please keep your API keys safe, do not allow login when unnecessary, be cautious while using them with unofficial clients, and don't share them with others.