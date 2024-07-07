# Snippet Encryption

No one can view the content of your encrypted snippet on PasteCode.io unless you share the secret passphrase.

We utilize the AES-256 CBC encryption algorithm (cryptojs library) to encrypt snippets when you choose that option. All encryption and decryption processes take place on the client side.

The secret passphrase, which is 16 characters long, is randomly generated on the client side during snippet creation. It is stored in your browser's local storage and is not sent to our servers. A 256-bit key is derived from this secret passphrase using PBKDF2 to encrypt your snippet. When you visit the snippet detail page, the encrypted snippet is automatically decrypted on the client side if your browser has the correct passphrase stored in local storage.

If you do not have the secret passphrase in your browser's local storage (either due to clearing it or changing devices), and assuming you have stored the secret passphrase elsewhere, you can add the hashtag `#SECRET_PASSPHRASE` to your snippet's URL (e.g., `https://pastecode.io/s/a1b2c3d4#SECRET_PASSPHRASE`) and refresh the page. This allows you to retrieve and decrypt the snippet using the stored passphrase. However, if you have lost the secret passphrase, there is no way to recover the snippet content.

Additionally, you have the option to use other libraries like OpenSSL to decrypt your snippet. By clicking the 'View as Raw' or 'Download' button on the snippet detail page, you can access the encrypted content in OpenSSL format, as it is stored in our database.

Please note that the security of your snippets relies on keeping the secret passphrase confidential and ensuring its safe storage.