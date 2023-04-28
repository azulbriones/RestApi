-- Database: netflix
-- DROP DATABASE IF EXISTS netflix;
CREATE DATABASE netflix2 WITH OWNER = postgres ENCODING = 'UTF8' LC_COLLATE = 'Spanish_Mexico.1252' LC_CTYPE = 'Spanish_Mexico.1252' TABLESPACE = pg_default CONNECTION
LIMIT
    = -1 IS_TEMPLATE = False;

-- Table: public.titles
-- DROP TABLE IF EXISTS public.titles;
CREATE TABLE IF NOT EXISTS public.titles (
    show_id character varying(10) COLLATE pg_catalog."default",
    type character varying(20) COLLATE pg_catalog."default",
    title character varying(500) COLLATE pg_catalog."default",
    director character varying(500) COLLATE pg_catalog."default",
    "cast" character varying(1000) COLLATE pg_catalog."default",
    country character varying(200) COLLATE pg_catalog."default",
    date_added character varying(20) COLLATE pg_catalog."default",
    release_year integer,
    rating character varying(10) COLLATE pg_catalog."default",
    duration character varying(10) COLLATE pg_catalog."default",
    listed_in character varying(200) COLLATE pg_catalog."default",
    description text COLLATE pg_catalog."default"
) TABLESPACE pg_default;

ALTER TABLE
    IF EXISTS public.titles OWNER to postgres;