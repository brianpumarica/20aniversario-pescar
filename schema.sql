CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    user VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    nombreapellido VARCHAR(255),
    telefono VARCHAR(255),
    empresa VARCHAR(255),
    comida VARCHAR(255) DEFAULT 'Sin restricciones',
    habilitado BOOLEAN DEFAULT true
);

CREATE TABLE invitados (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombreapellido VARCHAR(255),
    idReferenciado INTEGER,
    empresa VARCHAR(255),
    comida VARCHAR(255) DEFAULT 'Sin restricciones',
    habilitado BOOLEAN DEFAULT true,
    FOREIGN KEY (idReferenciado) REFERENCES usuarios(id)
);

-- usuarios admin
-- Insert para la empresa JPM
INSERT INTO usuarios (nombreapellido, user, password, telefono, empresa, comida, habilitado)
VALUES ('Juan Pérez', 'user1', 'pass1', 123456789, 'JPM', 'vegetariano', true);

-- Inserts para la empresa SANTANDER
INSERT INTO usuarios (nombreapellido, user, password, telefono, empresa, comida, habilitado)
VALUES ('María López', 'user2', 'pass2', 987654321, 'SANTANDER', 'vegetariano', true);

-- Insert para la empresa SOSBA
INSERT INTO usuarios (nombreapellido, user, password, telefono, empresa, comida, habilitado)
VALUES ('Sofía Martínez', 'user3', 'pass3', 555555555, 'SOSBA', 'vegetariano', true);

-- Insert para la empresa JPPR
INSERT INTO usuarios (nombreapellido, user, password, telefono, empresa, comida, habilitado)
VALUES ('Carlos Rodríguez', 'user4', 'pass4', NULL, 'JPPR', 'vegano', false);

-- Inserts para la empresa MANAOS
INSERT INTO usuarios (nombreapellido, user, password, telefono, empresa, comida, habilitado)
VALUES ('Ana García', 'user5', 'pass5', NULL, 'MANAOS', 'vegano', true);

-- Inserts para la empresa Coca
INSERT INTO usuarios (user, password, habilitado)
VALUES ('user6', 'pass6', true);


-- invitados
-- Inserts para la empresa JPM
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Carlos Rodríguez', 1, 'JPM', 'vegano', true);

-- Inserts para la empresa SANTANDER
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Pedro López', 2, 'SANTANDER', 'vegetariano', true);

-- Inserts para la empresa SOSBA
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Juana Martínez', 3, 'SOSBA', 'vegetariano', true);

-- Inserts para la empresa MANAOS
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Luisa García', 5, 'MANAOS', 'sin restricciones', true);

-- Inserts para la empresa JPPR
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Ana Rodríguez', 4, 'JPPR', 'celiaco', true);

-- Inserts para la empresa JPM
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('María Pérez', 1, 'JPM', 'vegano', true);

-- Inserts para la empresa SANTANDER
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Juan Martínez', 2, 'SANTANDER', 'celiaco', true);

-- Inserts para la empresa SOSBA
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Luis Rodríguez', 3, 'SOSBA', 'vegetariano', true);

-- Inserts para la empresa MANAOS
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Pedro García', 5, 'MANAOS', 'sin restricciones', true);

-- Inserts para la empresa JPPR
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('María López', 4, 'JPPR', 'vegetariano', true);

-- Inserts para la empresa JPM
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Elena Martínez', 1, 'JPM', 'vegetariano', true);

-- Inserts para la empresa SANTANDER
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Andrés López', 2, 'SANTANDER', 'vegano', true);

-- Inserts para la empresa SOSBA
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Santiago Rodríguez', 3, 'SOSBA', 'celiaco', true);

-- Inserts para la empresa JPPR
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Laura Pérez', 4, 'JPPR', 'sin restricciones', true);

-- Inserts para la empresa MANAOS
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Carolina García', 5, 'MANAOS', 'vegetariano', true);

-- Inserts para la empresa JPM
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Ana García', 1, 'JPM', 'vegano', true);

INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Luis Rodríguez', 1, 'JPM', 'celiaco', true);

-- Inserts para la empresa SANTANDER
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Marta López', 2, 'SANTANDER', 'vegetariano', true);

INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Diego Martínez', 2, 'SANTANDER', 'vegano', true);

-- Inserts para la empresa SOSBA
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Julia Pérez', 3, 'SOSBA', 'celiaco', true);

INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Pablo Rodríguez', 3, 'SOSBA', 'sin restricciones', true);

-- Inserts para la empresa JPPR
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Carolina López', 4, 'JPPR', 'vegetariano', true);

INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Andrea Martínez', 4, 'JPPR', 'vegano', true);

-- Inserts para la empresa MANAOS
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Luisa Rodríguez', 5, 'MANAOS', 'vegetariano', true);

INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Javier Pérez', 5, 'MANAOS', 'vegano', true);

-- Inserts para la empresa JPM
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('María García', 1, 'JPM', 'celiaco', true);

INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Juan Rodríguez', 1, 'JPM', 'sin restricciones', true);

-- Inserts para la empresa SANTANDER
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Lucía Martínez', 2, 'SANTANDER', 'vegetariano', true);

INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Daniel Pérez', 2, 'SANTANDER', 'vegano', true);

-- Inserts para la empresa SOSBA
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Valeria López', 3, 'SOSBA', 'celiaco', true);

INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Hugo Martínez', 3, 'SOSBA', 'sin restricciones', true);

-- Inserts para la empresa JPPR
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Cecilia García', 4, 'JPPR', 'vegetariano', true);

INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Fernando Rodríguez', 4, 'JPPR', 'vegano', true);

-- Inserts para la empresa MANAOS
INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Lorenzo López', 5, 'MANAOS', 'vegetariano', true);

INSERT INTO invitados (nombreapellido, idReferenciado, empresa, comida, habilitado)
VALUES ('Isabel Martínez', 5, 'MANAOS', 'vegano', true);

-- Invitados Coca 
INSERT INTO invitados (idReferenciado)
VALUES (6 );
INSERT INTO invitados (idReferenciado)
VALUES (6 );
INSERT INTO invitados (idReferenciado)
VALUES (6 );
INSERT INTO invitados (idReferenciado)
VALUES (6 );
INSERT INTO invitados (idReferenciado)
VALUES (6 );
INSERT INTO invitados (idReferenciado)
VALUES (6 );
INSERT INTO invitados (idReferenciado)
VALUES (6 );
INSERT INTO invitados (idReferenciado)
VALUES (6 );