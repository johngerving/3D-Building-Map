PGDMP                      |           buildingmap    16.3    16.3 -    >           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            @           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            A           1262    16398    buildingmap    DATABASE     m   CREATE DATABASE buildingmap WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'C';
    DROP DATABASE buildingmap;
                postgres    false            �            1259    16399 	   buildings    TABLE     �   CREATE TABLE public.buildings (
    building_id integer NOT NULL,
    building_name character varying(255) NOT NULL,
    location_font_size numeric NOT NULL,
    initial_camera_pos double precision[] NOT NULL
);
    DROP TABLE public.buildings;
       public         heap    postgres    false            �            1259    16402    buildings_building_id_seq    SEQUENCE     �   CREATE SEQUENCE public.buildings_building_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.buildings_building_id_seq;
       public          postgres    false    215            B           0    0    buildings_building_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.buildings_building_id_seq OWNED BY public.buildings.building_id;
          public          postgres    false    216            �            1259    16414    floors    TABLE     �  CREATE TABLE public.floors (
    floor_id integer NOT NULL,
    building_id integer NOT NULL,
    index integer NOT NULL,
    floor_name character varying(255) NOT NULL,
    svg text NOT NULL,
    scale numeric NOT NULL,
    vertical_gap numeric NOT NULL,
    "position" numeric[] NOT NULL,
    extruded_sections text[] NOT NULL,
    floor_layer character varying(255) NOT NULL,
    extrude_depth double precision NOT NULL
);
    DROP TABLE public.floors;
       public         heap    postgres    false            �            1259    16417    floors_floor_id_seq    SEQUENCE     �   CREATE SEQUENCE public.floors_floor_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public.floors_floor_id_seq;
       public          postgres    false    217            C           0    0    floors_floor_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public.floors_floor_id_seq OWNED BY public.floors.floor_id;
          public          postgres    false    218            �            1259    16432 	   locations    TABLE     �   CREATE TABLE public.locations (
    location_id integer NOT NULL,
    floor_id integer NOT NULL,
    description text NOT NULL,
    "position" numeric[] NOT NULL,
    default_enabled boolean NOT NULL,
    type character varying(255) NOT NULL
);
    DROP TABLE public.locations;
       public         heap    postgres    false            �            1259    16435    locations_location_id_seq    SEQUENCE     �   CREATE SEQUENCE public.locations_location_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 0   DROP SEQUENCE public.locations_location_id_seq;
       public          postgres    false    219            D           0    0    locations_location_id_seq    SEQUENCE OWNED BY     W   ALTER SEQUENCE public.locations_location_id_seq OWNED BY public.locations.location_id;
          public          postgres    false    220            �            1259    16450    users    TABLE     U   CREATE TABLE public.users (
    user_id integer NOT NULL,
    email text NOT NULL
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16473    users_buildings    TABLE     h   CREATE TABLE public.users_buildings (
    user_id integer NOT NULL,
    building_id integer NOT NULL
);
 #   DROP TABLE public.users_buildings;
       public         heap    postgres    false            �            1259    16453    users_user_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.users_user_id_seq;
       public          postgres    false    221            E           0    0    users_user_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.users_user_id_seq OWNED BY public.users.user_id;
          public          postgres    false    222            �           2604    16403    buildings building_id    DEFAULT     ~   ALTER TABLE ONLY public.buildings ALTER COLUMN building_id SET DEFAULT nextval('public.buildings_building_id_seq'::regclass);
 D   ALTER TABLE public.buildings ALTER COLUMN building_id DROP DEFAULT;
       public          postgres    false    216    215            �           2604    16418    floors floor_id    DEFAULT     r   ALTER TABLE ONLY public.floors ALTER COLUMN floor_id SET DEFAULT nextval('public.floors_floor_id_seq'::regclass);
 >   ALTER TABLE public.floors ALTER COLUMN floor_id DROP DEFAULT;
       public          postgres    false    218    217            �           2604    16436    locations location_id    DEFAULT     ~   ALTER TABLE ONLY public.locations ALTER COLUMN location_id SET DEFAULT nextval('public.locations_location_id_seq'::regclass);
 D   ALTER TABLE public.locations ALTER COLUMN location_id DROP DEFAULT;
       public          postgres    false    220    219            �           2604    16454    users user_id    DEFAULT     n   ALTER TABLE ONLY public.users ALTER COLUMN user_id SET DEFAULT nextval('public.users_user_id_seq'::regclass);
 <   ALTER TABLE public.users ALTER COLUMN user_id DROP DEFAULT;
       public          postgres    false    222    221            3          0    16399 	   buildings 
   TABLE DATA           g   COPY public.buildings (building_id, building_name, location_font_size, initial_camera_pos) FROM stdin;
    public          postgres    false    215   �5       5          0    16414    floors 
   TABLE DATA           �   COPY public.floors (floor_id, building_id, index, floor_name, svg, scale, vertical_gap, "position", extruded_sections, floor_layer, extrude_depth) FROM stdin;
    public          postgres    false    217   �5       7          0    16432 	   locations 
   TABLE DATA           j   COPY public.locations (location_id, floor_id, description, "position", default_enabled, type) FROM stdin;
    public          postgres    false    219   �5       9          0    16450    users 
   TABLE DATA           /   COPY public.users (user_id, email) FROM stdin;
    public          postgres    false    221   �5       ;          0    16473    users_buildings 
   TABLE DATA           ?   COPY public.users_buildings (user_id, building_id) FROM stdin;
    public          postgres    false    223    6       F           0    0    buildings_building_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.buildings_building_id_seq', 1, false);
          public          postgres    false    216            G           0    0    floors_floor_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public.floors_floor_id_seq', 1, false);
          public          postgres    false    218            H           0    0    locations_location_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.locations_location_id_seq', 1, false);
          public          postgres    false    220            I           0    0    users_user_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.users_user_id_seq', 1, false);
          public          postgres    false    222            �           2606    16405 #   buildings buildings_building_id_key 
   CONSTRAINT     e   ALTER TABLE ONLY public.buildings
    ADD CONSTRAINT buildings_building_id_key UNIQUE (building_id);
 M   ALTER TABLE ONLY public.buildings DROP CONSTRAINT buildings_building_id_key;
       public            postgres    false    215            �           2606    16411 %   buildings buildings_building_name_key 
   CONSTRAINT     i   ALTER TABLE ONLY public.buildings
    ADD CONSTRAINT buildings_building_name_key UNIQUE (building_name);
 O   ALTER TABLE ONLY public.buildings DROP CONSTRAINT buildings_building_name_key;
       public            postgres    false    215            �           2606    16468    buildings buildings_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.buildings
    ADD CONSTRAINT buildings_pkey PRIMARY KEY (building_id);
 B   ALTER TABLE ONLY public.buildings DROP CONSTRAINT buildings_pkey;
       public            postgres    false    215            �           2606    16420    floors floors_floor_id_key 
   CONSTRAINT     Y   ALTER TABLE ONLY public.floors
    ADD CONSTRAINT floors_floor_id_key UNIQUE (floor_id);
 D   ALTER TABLE ONLY public.floors DROP CONSTRAINT floors_floor_id_key;
       public            postgres    false    217            �           2606    16470    floors floors_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public.floors
    ADD CONSTRAINT floors_pkey PRIMARY KEY (floor_id);
 <   ALTER TABLE ONLY public.floors DROP CONSTRAINT floors_pkey;
       public            postgres    false    217            �           2606    16438 #   locations locations_location_id_key 
   CONSTRAINT     e   ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_location_id_key UNIQUE (location_id);
 M   ALTER TABLE ONLY public.locations DROP CONSTRAINT locations_location_id_key;
       public            postgres    false    219            �           2606    16472    locations locations_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_pkey PRIMARY KEY (location_id);
 B   ALTER TABLE ONLY public.locations DROP CONSTRAINT locations_pkey;
       public            postgres    false    219            �           2606    16487 $   users_buildings users_buildings_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.users_buildings
    ADD CONSTRAINT users_buildings_pkey PRIMARY KEY (user_id, building_id);
 N   ALTER TABLE ONLY public.users_buildings DROP CONSTRAINT users_buildings_pkey;
       public            postgres    false    223    223            �           2606    16462    users users_email_key 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);
 ?   ALTER TABLE ONLY public.users DROP CONSTRAINT users_email_key;
       public            postgres    false    221            �           2606    16466    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    221            �           2606    16456    users users_user_id_key 
   CONSTRAINT     U   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_user_id_key UNIQUE (user_id);
 A   ALTER TABLE ONLY public.users DROP CONSTRAINT users_user_id_key;
       public            postgres    false    221            �           2606    16425    floors floors_building_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.floors
    ADD CONSTRAINT floors_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.buildings(building_id);
 H   ALTER TABLE ONLY public.floors DROP CONSTRAINT floors_building_id_fkey;
       public          postgres    false    3467    217    215            �           2606    16443 !   locations locations_floor_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.locations
    ADD CONSTRAINT locations_floor_id_fkey FOREIGN KEY (floor_id) REFERENCES public.floors(floor_id);
 K   ALTER TABLE ONLY public.locations DROP CONSTRAINT locations_floor_id_fkey;
       public          postgres    false    219    3473    217            �           2606    16481 0   users_buildings users_buildings_building_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users_buildings
    ADD CONSTRAINT users_buildings_building_id_fkey FOREIGN KEY (building_id) REFERENCES public.buildings(building_id);
 Z   ALTER TABLE ONLY public.users_buildings DROP CONSTRAINT users_buildings_building_id_fkey;
       public          postgres    false    3467    215    223            �           2606    16476 ,   users_buildings users_buildings_user_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.users_buildings
    ADD CONSTRAINT users_buildings_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(user_id);
 V   ALTER TABLE ONLY public.users_buildings DROP CONSTRAINT users_buildings_user_id_fkey;
       public          postgres    false    223    221    3485            3      x������ � �      5      x������ � �      7      x������ � �      9      x������ � �      ;      x������ � �     