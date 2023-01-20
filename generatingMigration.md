npx sequelize model:generate --name Reservations --attributes customer_name:string

npx sequelize model:generate --name Parkings --attributes name:string,address:string,city:string,daily_rate:float

npx sequelize model:generate --name Reservations_parking --attributes parking_id:integer,reservation_id:integer,start_date:date,end_date:date