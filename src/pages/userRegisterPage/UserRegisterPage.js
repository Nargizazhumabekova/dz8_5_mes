import React, { useState } from 'react'
import {Row, Col, Form, Button, Container, Spinner} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAction } from '../../redux/actions'




/*function validatePasswords()
{
    const passwords2 = document.getElementById("passwords1").value;
    const passwords1 = document.getElementById("passwords2").value;
    if(passwords2 === passwords1)

    return true;
}*/

function UserRegisterPage() {

    const {preloader} = useSelector(state => state.preloaderReducer)
    const dispatch = useDispatch()

    const [user, setUser,authSuccess, setAuthSuccess] = useState({
        name: '',
        username: '',
        email: '',
        passwords1: '',
        passwords2: '',
    })

    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const addUser = (event) => {
        event.preventDefault()
        dispatch(addUserAction(user))
        localStorage.setItem('user', JSON.stringify(user));

        if (user.name === '' || user.username === '' || user.email === ''||user.passwords1===''
        ||user.passwords2===''||user.passwords1===user.passwords2) {
            alert('Дальнейшее действие невозможно! Заполни все поля!')
            return
        }
    }

    return (
        <Container>
        {preloader ?
        <Spinner animation='border' role='status' /> :
        <Form onSubmit={addUser}>
            <Row>
                <Col lg={3}>
                    <Form.Group className='mb-3' controlId="name">
                        <Form.Control
                            type="text"
                            placeholder='введите имя'
                            name='name'
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className='mb-3' controlId="username">
                        <Form.Control
                            type="text"
                            placeholder='введите фамилию'
                            name='username'
                            onChange={formValue}
                        />
                    </Form.Group>
                     <Form.Group className='mb-3' controlId="passwords1">
                        <Form.Control
                            type="text"
                            placeholder='введите пароль'
                            name='password1'
                            onChange={formValue}
                        />
                    </Form.Group>
                     <Form.Group className='mb-3' controlId="passwords2">
                        <Form.Control
                            type="text"
                            placeholder='повторите пароль'
                            name='повторите пароль'
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Form.Group className='mb-3' controlId="email">
                        <Form.Control
                            type="text"
                            placeholder='электронная почта'
                            name='email'
                            onChange={formValue}
                        />
                    </Form.Group>
                </Col>
                <Col lg={3}>
                    <Button type='submit' variant='success' className='w-100'>
                        нажмите  регистрацию
                    </Button>
                </Col>
            </Row>
        </Form>
        }

      </Container>

  )
}


export default UserRegisterPage