 create table multi_basket ( 
  id serial not null primary key,
  names text
 
 );
 
 create table fruit_basket ( 
  id serial not null primary key,
  fruit_name text, 
  quantity int, 
  price decimal (10,2),
  id_multi int not null,
  foreign key (id_multi) references multi_basket (id)
  );
insert into multi_basket (names) values('Apples');
insert into multi_basket (names) values('Orange');
insert into multi_basket (names) values('Peach');
