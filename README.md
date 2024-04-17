# RentAndPass Apartment Management App

This is a React.js application built with Vite and Tailwind CSS for managing apartment access using the RentAndPass API.

## API Credentials

To access the RentAndPass API, you need to obtain a token using the following endpoint:

- **Endpoint:** `GET /singin/token`
- **Access Token:** `5882902affd7198c9bb0a7fe359f66c3a73dd8783948d7b83f6279136f653706`
- **Client ID:** `NMVbynLXxNLwoP0XVYFX72PIuhi1FBTIf6V`

This access token should be included in all API requests made on behalf of this user.

## Features

1. **Remote Door Opening**: Ability to remotely open the apartment door.
2. **Handle Door Handle Information**: View the name and battery level of the door handle.
3. **Manage Access Codes**: Ability to create and delete access codes for apartment users. These codes are of type 3 (for a period) and include start and end dates.

## API Methods

The following API methods are utilized in the application:

1. `GET /Lock/Lock_list`: Retrieve the list of locks.
2. `PUT /Lock/Lock_unlock`: Unlock a specific lock.
3. `GET /Lock/Lock_passwords`: Retrieve the passwords associated with a lock.
4. `GET /Password/Password_get`: Get a specific password.
5. `DELETE /Password/Password_delete`: Delete a specific password.

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Run the development server using `npm run dev`.
4. Access the application in your browser at `http://localhost:3000`.
