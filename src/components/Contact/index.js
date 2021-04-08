import React from 'react'
import {
    Container,
    FormWrapper,
    Icon,
    FormContent,
    Form,
    FormHeader,
    FormLabel,
    FormInput,
    FormButton,
    FormArea
} from './ContactElements'


const Contact = () => {
    return (
        <>
            <Container>
                <FormWrapper>
                    <Icon to="/personal-website">CaPe</Icon>
                    <FormContent>
                        <Form action="mailto:carlos.perales95@opendeusto.es"
                        method="POST"
                        enctype="multipart/form-data"
                        name="EmailForm">
                            <FormHeader>Send me an email !</FormHeader>
                            <FormLabel htmlFor='for'>email</FormLabel>
                            <FormInput type='email' required/>
                            <br></br>
                            <FormLabel htmlFor='for'>Message</FormLabel>
                            <FormArea type='content' required/>
                            <FormButton type='submit'>Send!</FormButton>
                        </Form>
                    </FormContent>
                </FormWrapper>
            </Container>
            
        </>
    )
}

export default Contact
