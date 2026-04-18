# Backend Programming Template (2025)

## Development Setup

1. Fork and clone this repository to your local computer.
2. Open the project using VS Code.
3. Install the recommended VS Code extensions: `ESLint` and `Prettier`.
4. Copy and rename `.env.example` to `.env`. Open `.env` and change the database connection string.
5. Run `npm install` to install the project dependencies.
6. Run `npm run dev` to start the dev server.
7. Test the endpoints in the API client app.

## Add New API Endpoints

1. Create a new database schema in `./src/models`.
2. Create a new folder in `./src/api/components` (if needed). Remember to separate your codes to repositories, services, controllers, and routes.
3. Add the new route in `./src/api/routes.js`.
4. Test your new endpoints in the API client app.

## Endpoint API Gacha
1. Melakukan Gacha
Method: `POST`
URL: `/api/gacha`
Input (Body - JSON):
  {
    "id_user": "ID_USER_DARI_MONGODB"
  }

2. Melihat Histori Gacha User
Method: GET
URL: /api/gacha/histori/:id
:id = Diisi dengan ID User (contoh: /api/gacha/histori/65a1b2c3d...)

3. Melihat Daftar Hadiah
Method: GET
URL: /api/gacha/hadiah
Parameter & Input: Tidak ada.

4. Melihat Daftar Pemenang Tersensor
Method: GET
URL: /api/gacha/pemenang
Parameter & Input: Tidak ada.