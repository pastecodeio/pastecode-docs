# Snippet Encryption

No one can see your encrypted snippet content including PasteCode.io unless you share the secret passphrase.

We are using the AES-256 CBC (cryptojs library) encryption algorithm to encrypt snippets if you select that option. All encryption and decryption occur on the client side.

The secret passphrase is 64 characters long and randomly generated on the client side while creating a snippet and stored in your browser's local storage without sending it to our servers. A 256-bit key generated from this secret passphrase by using PBKDF2 to encrypt your snippet. The encrypted snippet will be automatically decrypted on the client side when you visit snippet detail page if your browser has the correct passphrase in local storage.

If you don't have the secret passphrase on your browser's local storage (cleared or changed device) and assuming you kept the secret passphrase somewhere else and then you can add https://pastecode.io/s/a1b2c3d4#SECRET_PASSPHRASE hashtag to your snippet's URL and refresh the page. If you lost your secret passphrase, there is no way to recover snippet content again.

You can also use other libraries like OpenSSL to decrypt your snippet. You can click the 'View as Raw' or 'Download' button on the snippet detail page to view encrypted content in OpenSSL format as we store in our database.