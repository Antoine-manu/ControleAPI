# Getting Started

## Installation des dependences
```
npm Install
```
## Base de donnée

### Création de la base
```
npx sequelize-cli db:create
```

### Lancement des migrations 
```
npx sequelize-cli db:migrate
```

### Generation de donnée dans la base
```
npx sequelize-cli db:seed:all
```

## Lancement de l'api 
```
npm run dev
```

## Documentation de l'api

### Create reservation
Route : ```localhost:6500/api/v1/reservation/create```

Attendus :

```
{
    customer_name : Nom du customer
start_date : Date de début
end_date : Date de fin
parking_id : id du parking
}
```

### Edit reservation
Route : ```localhost:6500/api/v1/reservation/edit/:id```

Attendus :
```
{
    customer_name : Nom du customer
}
```
### GetAll reservation
Route : ```localhost:6500/api/v1/reservation/find-all```

Retourne :

- Tout les utilisateurs

### GetById reservation
Route : ```localhost:6500/api/v1/reservation/find/:id```

Retourne :

- L'utilisateur correspondant a l'id

### Delete reservation
Route : ```localhost:6500/api/v1/reservation/find/:id```

Supprime la reservation


