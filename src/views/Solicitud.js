import React, { useState, useEffect, Component } from "react";
import axios from "axios";
import Select from "react-select";
import environment from "../environment";



// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";

//obteniendo fecha y hora
function getFecha() {
  const date = new Date();
  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0")
  );
}

class App extends Component {
  state = { tipos: [], personas: [], fiadores: [] };

  componentDidMount() {
    let url =  "http://localhost:81/acoesi/public/api/solicitud/create";

    axios
      .get(url)
      .then((response) => {
        console.log(response);
        this.setState({ tipos: response.data.Tipo });
        this.setState({ personas: response.data.Persona });
        this.setState({ fiadores: response.data.Fiador });
        console.log(response.data.Fiador);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Solicitud</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Fecha</label>
                        <Form.Control
                          defaultValue={`${getFecha()}`}
                          type="date"
                        ></Form.Control>
                      </Form.Group>
                    </Col>

                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Tipo de credito</label>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Solicitante</label>
                        <select
                          id="Persona"
                          name="Persona"
                          className="form-control"
                        >
                          {this.state.personas.map((element) => (
                            <option key={element.Id} value={element.Id}>
                              {element.Nombre}
                            </option>
                          ))}
                        </select>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Fiador</label>
                        <select
                          id="Fiador"
                          name="Fiador"
                          className="form-control"
                        >
                          {this.state.fiadores.map((element) => (
                            <option key={element.Id} value={element.Id}>
                              {element.Nombre}
                            </option>
                          ))}
                        </select>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Tasa %</label>
                        <Form.Control
                          placeholder=" %%"
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Cantidad</label>
                        <Form.Control type="number"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <div className="clearfix"></div>
                      <Form.Group>
                        <Button
                          className="btn-fill pull-right"
                          type="submit"
                          variant="info"
                        >
                          Aceptar
                        </Button>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
/*
function User() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Solicitud</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Fecha</label>
                        <Form.Control
                          defaultValue={`${getFecha()}`}
                          type="date"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Tipo de credito</label>
                        <select
                          id="comboDepartamento"
                          name="departmentId"
                          className="form-control"
                        ></select>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Solicitante</label>
                        <select
                          id="comboDepartamento"
                          name="departmentId"
                          className="form-control"
                        ></select>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Fiador</label>
                        <select
                          id="comboDepartamento"
                          name="departmentId"
                          className="form-control"
                        ></select>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Tasa %</label>
                        <Form.Control
                          placeholder=" %%"
                          disabled
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="12">
                      <Form.Group>
                        <label>Cantidad</label>
                        <Form.Control type="number"></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <div className="clearfix"></div>
                      <Form.Group>
                        <Button
                          className="btn-fill pull-right"
                          type="submit"
                          variant="info"
                        >
                          Aceptar
                        </Button>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;*/
