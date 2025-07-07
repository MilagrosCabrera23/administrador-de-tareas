import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaTasks, FaClock, FaCheckCircle } from "react-icons/fa";
import "./Home.css";

const HomeComponent = () => {
  return (
    <Container className="my-5 container-home">
      <div className="text-center mb-5 ">
        <h1 className="mb-3 title-home">
          Organizá tu vida con un Administrador de Tareas
        </h1>
        <p className="descripcion-home">
          Un buen gestor de tareas no solo te ayuda a recordar lo que tenés que
          hacer, sino que mejora tu productividad, reduce el estrés y te
          mantiene enfocado en lo importante.
        </p>
      </div>

      <Row className="mb-4">
        <Col md={4}>
          <Card className="text-center h-100 card">
            <Card.Body>
              <FaTasks size={50} className="mb-3 text-primary" />
              <Card.Title className="title">Mejor organización</Card.Title>
              <Card.Text className="text">
                Agrupá, filtrá y priorizá tus tareas para no olvidar nada
                importante.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center h-100">
            <Card.Body>
              <FaClock size={50} className="mb-3 text-success" />
              <Card.Title className="title">Más productividad</Card.Title>
              <Card.Text className="text">
                Administrá tu tiempo de forma efectiva y cumplí tus objetivos
                diarios.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card className="text-center h-100">
            <Card.Body>
              <FaCheckCircle size={50} className="mb-3 text-danger" />
              <Card.Title className="title">Mayor enfoque</Card.Title>
              <Card.Text className="text">
                Evitá distracciones y trabajá con claridad en tus pendientes.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <div className="text-center mt-5">
        <h2 className="mb-4 subtitle-home">¿Qué querés hacer hoy?</h2>
        
        <Row className="justify-content-center">
          <Col md={3} className="mb-3">
            <Link to="/tasks/new">
              <Button className="w-100 button-crear">
                Crear Tarea
              </Button>
            </Link>
          </Col>

          <Col md={3} className="mb-3">
            <Link to="/tasks">
              <Button className="w-100 buton-lista">
                Ver Lista de Tareas
              </Button>
            </Link>
          </Col>

          <Col md={3} className="mb-3">
            <Link to="/tasks/1">
              <Button className="w-100 buton-detalle">
                Ver Detalle de Tarea
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default HomeComponent;
