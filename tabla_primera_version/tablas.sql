create table NHMR_curso(
	codigo varchar2(50),
	nombre varchar2(50),
	horas_catedra number,
	horas_laboratorio number,
	nivel number,
	es_atemporal number,
	es_curso_general number,
	cantidad_de_estudiantes number,
	primary key (codigo)
);

create table NHMR_profesor(
	codigo number,
	nombre varchar2(50),
	apellido_materno varchar2(50),
	apellido_paterno varchar2(50),
	es_full_time number,
	primary key (codigo)
);

create table NHMR_sala(
	codigo varchar2(50),
	nombre varchar2(50),
	capacidad number,
	es_laboratorio number,
	primary key (codigo)
);

create table NHMR_seccion(
	codigo varchar2(50),
	codigo_profesor number,
	codigo_curso varchar2(50),
	codigo_sala_catedra varchar2(50),
	codigo_sala_laboratorio varchar2(50),
	cantidad_de_estudiantes_seccion number,
	primary key (codigo, codigo_curso),
	foreign key (codigo_profesor) references NHMR_profesor(codigo),
	foreign key (codigo_curso) references NHMR_curso(codigo),
	foreign key (codigo_sala_catedra) references NHMR_sala(codigo),
	foreign key (codigo_sala_laboratorio) references NHMR_sala(codigo),
);


create table NHMR_bloque_dia(
	codigo_dia number,
	codigo_bloque number,
	primary key (codigo_dia, codigo_bloque),
);

create table NHMR_profesor_bloques_disponibles(
	codigo_profesor number,
	codigo_dia number,
	codigo_bloque number,
	primary key (codigo_profesor, codigo_dia, codigo_bloque),
	foreign key (codigo_profesor) references NHMR_profesor(codigo),
	foreign key (codigo_dia, codigo_bloque) references NHMR_bloque_dia(codigo_dia,codigo_bloque )
);

create table NHMR_seccion_bloque_dia(
	codigo_seccion varchar2(50),
	codigo_dia number,
	codigo_bloque number,
	es_bloque_de_laboratorio number,
	primary key (codigo_seccion, codigo_dia, codigo_bloque),
	foreign key (codigo_seccion) references NHMR_seccion(codigo),
	foreign key (codigo_dia, codigo_bloque) references NHMR_bloque_dia(codigo_dia, codigo_bloque)
);