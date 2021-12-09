import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import { Alert } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const onSubmit = (formData) => {
        mutation.mutate(formData)
    }

    const mutation = useMutation((formData) => {
        return (
            axios({
                method: "post",
                url: "https://dev.api.globetrott.app/api/users/login/",
                data: formData,
            })
        )
    })

    // console.log(mutation.error.response.data)

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group size="lg" controlId="email" className="input-container">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        {...register("email", { required: true })}
                        autoFocus
                        type="email"
                    />
                    {errors.email && <div className="required-field-text">This field is required</div>}
                </Form.Group>
                <Form.Group size="lg" controlId="password" className="input-container">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        {...register("password", { required: true })}
                        type="password"
                    />
                    {errors.password && <div className="required-field-text">This field is required</div>}
                </Form.Group>
                <Button size="lg" type="submit" className="login-button">
                    Login
                </Button>
            </Form>
            {mutation.isSuccess ?
                <Alert variant="success">{mutation.status}</Alert> && navigate("/quotes")
                : null}
            {mutation.isError ?
                <Alert variant="danger">{JSON.stringify(mutation.error?.response.data)}</Alert> :
                null}
        </div>
    );
}

// Email: cct-lab@cct.lt
// Password: cctLAB123@