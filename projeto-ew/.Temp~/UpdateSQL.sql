-- Crosswalk [ent1]
create table `crosswalk` (
   `id`  integer  not null,
   `state`  integer,
   `npedestrian`  integer,
   `nvehicle`  integer,
   `latitude`  double precision,
   `longitude`  double precision,
   `elevacao`  double precision,
  primary key (`id`)
);


-- Pedestrian [ent2]
create table `pedestrian` (
   `id`  integer  not null,
   `distancia`  integer,
   `latitude`  double precision,
   `longitude`  double precision,
   `elevacao`  double precision,
  primary key (`id`)
);


-- Vehicle [ent3]
create table `vehicle` (
   `id`  integer  not null,
   `distancia`  integer,
   `latitude`  double precision,
   `longitude`  double precision,
   `elevacao`  double precision,
  primary key (`id`)
);


-- Crosswalk_Pedestrian [rel1]
alter table `pedestrian`  add column  `crosswalk_id`  integer;
alter table `pedestrian`   add index fk_pedestrian_crosswalk (`crosswalk_id`), add constraint fk_pedestrian_crosswalk foreign key (`crosswalk_id`) references `crosswalk` (`id`);


-- Crosswalk_Vehicle [rel6]
alter table `vehicle`  add column  `crosswalk_id`  integer;
alter table `vehicle`   add index fk_vehicle_crosswalk (`crosswalk_id`), add constraint fk_vehicle_crosswalk foreign key (`crosswalk_id`) references `crosswalk` (`id`);


