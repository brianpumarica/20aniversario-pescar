CREATE TABLE usuarios (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombreapellido VARCHAR(255),
    telefono INTEGER,
    empresa VARCHAR(255),
    comida VARCHAR(255),
    admin BOOLEAN DEFAULT false,
    habilitado BOOLEAN DEFAULT true
);

-- Inserts para la empresa JPM (12 registros)
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Juan Pérez', 123456789, 'JPM', 'vegetariano', true, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Carlos Rodríguez', NULL, 'JPM', 'vegano', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Luis García', NULL, 'JPM', 'celiaco', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Alejandro Martínez', NULL, 'JPM', 'sin restricciones', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('María Fernández', NULL, 'JPM', 'vegetariano', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Sofía González', NULL, 'JPM', 'vegano', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Javier López', NULL, 'JPM', 'celiaco', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Andrea Ramírez', NULL, 'JPM', 'sin restricciones', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Diego Sánchez', NULL, 'JPM', 'vegetariano', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Valentina Martínez', NULL, 'JPM', 'vegano', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Valentin Juarez', NULL, 'JPM', 'vegano', false, true);

-- Inserts para la empresa SANTANDER (8 registros)
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('María López', 987654321, 'SANTANDER', 'vegetariano', true, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Ana García', NULL, 'SANTANDER', 'vegano', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Laura Rodríguez', NULL, 'SANTANDER', 'celiaco', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Carmen Pérez', NULL, 'SANTANDER', 'sin restricciones', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Rodrigo Martínez', NULL, 'SANTANDER', 'vegetariano', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Patricia Ramírez', NULL, 'SANTANDER', 'vegano', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Hugo González', NULL, 'SANTANDER', 'celiaco', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Elena López', NULL, 'SANTANDER', 'sin restricciones', false, true);

-- Inserts para la empresa SOSBA (10 registros)
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Sofía Martínez', 555555555, 'SOSBA', 'vegetariano', true, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Valentina Sánchez', NULL, 'SOSBA', 'vegano', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Isabella González', NULL, 'SOSBA', 'celiaco', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Julia Ramírez', NULL, 'SOSBA', 'sin restricciones', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Emilia López', NULL, 'SOSBA', 'vegetariano', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Lucas Martínez', NULL, 'SOSBA', 'vegano', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Benjamín García', NULL, 'SOSBA', 'celiaco', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Diana Rodríguez', NULL, 'SOSBA', 'sin restricciones', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Mateo Pérez', NULL, 'SOSBA', 'vegetariano', false, true);
INSERT INTO usuarios (nombreapellido, telefono, empresa, comida, admin, habilitado)
VALUES ('Natalia Ramírez', NULL, 'SOSBA', 'vegano', false, true);
