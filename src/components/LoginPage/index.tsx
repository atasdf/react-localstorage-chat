import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'modules/login/actions/login';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState({value: ''})
    const handleChange = (event: any) => {
        setUsername({value: event.target.value});
    };
    const handleSubmit = (event: any) => {
        event.preventDefault();
        dispatch(login(username.value));
    };
    return (
        <Container  style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Row className="justify-content-md-center">
                <Col md="auto" className="p-5 rounded border custom-border">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Ваше имя</Form.Label>
                            <Form.Control type="text" value={username.value} onChange={handleChange} placeholder="Введите ваше имя или никнейм" />
                            <Form.Text className="text-muted">
                                Ваши данные сохраняются только пока открыта вкладка браузера
                            </Form.Text>
                        </Form.Group>
                        <Button variant="primary" type="submit" value="Submit" >
                            Войти в чат
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default LoginForm;