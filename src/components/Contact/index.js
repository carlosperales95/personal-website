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
    FormArea,
    FakeFormButton,
    ButtonArea
} from './ContactElements'



const Contact = () => {


    return (
        <>
            <Container>
                <FormWrapper>
                    <Icon to="/personal-website">CaPe</Icon>
                    <FormContent>
                        <Form action="mailto:carlos.perales95@opendeusto.es"
                        method="get"
                        enctype="text/plain"
                        onsubmit="location.href='/personal-website';"
                        name="EmailForm">
                            <FormHeader>Send me an email !</FormHeader>
                            <FormLabel htmlFor='for'>email</FormLabel>
                            <FormInput type='email' name="email" required/>
                            <br></br>
                            <FormLabel htmlFor='for'>Message</FormLabel>
                            <FormArea type='text' name="content" required/>
                            <ButtonArea>
                                <FormButton type='submit' name="submit">Send!</FormButton>
                                {/* <FakeFormButton id="fakebtn" type="button" value="Send!"  onclick="$('#msg').html('you got me');"/>                           */}
                            </ButtonArea>
                        </Form>
                    </FormContent>
                </FormWrapper>
            </Container>
            
        </>
    )
}

export default Contact
