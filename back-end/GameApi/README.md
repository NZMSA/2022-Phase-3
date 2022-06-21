## Steps to update the database
1. dotnet ef migrations add MIGRATION-NAME
2. dotnet ef database update


## API Workflow
1. Create a user using /api/Users [POST]
2. Create an instance of the game using /api/game [POST]
3. Get game grid using /api/game/{id} [GET]
4. Create a new move in the game instance using /api/game/new-move [POST]