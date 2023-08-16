import { Button, Table, Form, Input } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Invitados from "./Invitados";
import User from "./User";

function Home() {
  const [editingRow, setEditingRow] = useState(null);
  const [form] = Form.useForm();
  const [users, setUsers] = useState([]);
  //atributos para editar
  const [nombreForm, setNombre] = useState();
  const [telefonoForm, setTelefono] = useState();
  const [ComidaForm, setComida] = useState();
  const [habilitadoForm, setHabilitado] = useState();

  useEffect(() => {
    if (editingRow !== null) {
      setNombre(users.find((user) => user.id === editingRow).nombreapellido);
      setTelefono(users.find((user) => user.id === editingRow).telefono);
      setComida(users.find((user) => user.id === editingRow).comida);
      setHabilitado(users.find((user) => user.id === editingRow).habilitado);
    }
  }, [editingRow, users]);

  const url = "http://localhost:8081/";
  useEffect(() => {
    const config = {
      params: {
        server: "174.25.0.3",
        username: "admin",
        db: "db",
      },
    };
    axios
      .get(url, config)
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);
  const navigate = useNavigate();
  const handleOnClick = (userId) => {
    axios
      .put(`${url}user/${userId}`, {
        id: userId,
        nombre: nombreForm,
        telefono: telefonoForm,
        comida: ComidaForm,
        habilitado: habilitadoForm,
      })
      .then((response) => {
        if (response.data.success) {
          navigate("/");
          window.location.reload(); // Recargar la página
        }
      })
      .catch((error) => {
        console.error("Error al actualizar usuario:", error);
      });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item
              name="id"
              rules={[
                {
                  required: false,
                  message: "Please enter a name",
                },
              ]}
            >
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Nombre y apellido",
      dataIndex: "nombreapellido",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item
              name="name"
              rules={[
                {
                  required: false,
                  message: "Please enter a name",
                },
              ]}
            >
              <Input
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
              />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Telefono",
      dataIndex: "telefono",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item name="telefono">
              <Input
                onChange={(e) => {
                  setTelefono(e.target.value);
                }}
              />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Empresa",
      dataIndex: "empresa",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item name="empresa">
              <Input />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Comida",
      dataIndex: "comida",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item name="comida">
              <Input
                onChange={(e) => {
                  setComida(e.target.value);
                }}
              />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Estoy Habilitado",
      dataIndex: "habilitado",
      render: (text, record) => {
        if (editingRow === record.id) {
          return (
            <Form.Item name="habilitado">
              <Input
                onChange={(e) => {
                  setHabilitado(e.target.value);
                }}
              />
            </Form.Item>
          );
        } else {
          return <p>{text}</p>;
        }
      },
    },
    {
      title: "Actions",
      render: (_, record) => {
        return (
          <>
            <Button
              type="link"
              onClick={() => {
                setEditingRow(record.id);
                form.setFieldsValue({
                  id: record.id,
                  habilitado: record.habilitado,
                  name: record.nombreapellido,
                  telefono: record.telefono,
                  empresa: record.empresa,
                  comida: record.comida,
                });
              }}
            >
              Edit
            </Button>
            <Button
              type="link"
              htmlType="submit"
              onClick={() => handleOnClick(record.id)}
            >
              Save
            </Button>
            {/* <button type="button"
              onClick={()=>handleOnClick(record.id)}>
              Go guardar
            </button> */}
          </>
        );
      },
    },
  ];
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div className="App">
      <header>
        <div>
          <User></User>
        </div>
        <div>
          <Invitados></Invitados>
        </div>
      </header>
    </div>
  );
}

export default Home;